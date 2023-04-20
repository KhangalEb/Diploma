import Navbarr from "../components/Navbarr";
import BackButton from "../components/BackButton";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Table, Space } from "antd";
import moment from "moment";
import { Collapse } from 'antd';

export default function TeacherProfile() {
    const router = useRouter();
    const { id } = router.query;
    const [dataa, setData] = useState([]);
    const [datateacher, setDataTeacher] = useState([]);
    const [dataatable, setDatatable] = useState([]);
    const [dataaa, setDataaa] = useState("")
    const { Panel } = Collapse;
    const fetchData = async () => {
        return fetch("http://localhost:8000/api/teacherList")
            .then((response) => response.json())
            .then((data) => setData(data));
    };
    useEffect(() => {
        setDataaa(JSON.parse(localStorage.getItem("user")))
        fetchData();
    }, []);
    console.log(dataa);
    useEffect(() => {
        dataa.map((e, ind) => {
            // console.log(dataa);
            if (e._id === id) {
                console.log(e._id);
                setDataTeacher(e);
            }
        });
    }, [dataa]);
    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            router.push("/");
        } else {
            //show validation message
        }
    });
    console.log(id);
    console.log(datateacher);
    console.log("datatable", dataatable);
    const age = moment().year() - datateacher.year;
    const handleClick = async (record) => {
        console.log(record);
        try {
            const response = await fetch("http://localhost:8000/api/orderwindowData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    edate: record.edate,
                    sdate: record.sdate,
                    teacher: record.teacher,
                    student: dataaa._id,
                    datatable: record._id,
                }),
            });
            const data = await response.json();
            if (data.status === "ok") {
                router.push(`/checkout/${record._id}`)
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const columns = [
        {
            title: 'Эхлэх Цаг',
            dataIndex: 'sdate',
            key: 'sdate',
        },
        {
            title: 'Дуусах Цаг',
            dataIndex: 'edate',
            key: 'edate',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <button className=" text-700" onClick={() => (handleClick(record))}>Сонгох</button>
                </Space>
            ),
        },
    ];
    const onChange = (key) => {
        console.log(key);
    };
    console.log(datateacher)
    const filterDataa = (data) => {
        const fData = data.filter((i) => {
            return i.teacher === datateacher._id && i.isOrdered === "false";
        });

        console.log(fData);
        setDatatable(fData);
    };
    const fetchDataa = useCallback(async () => {
        const response = await fetch("http://localhost:8000/api/timetableData");
        const data = await response.json();
        console.log(data);

        filterDataa(data);
    }, [datateacher]);

    useEffect(() => {
        if (datateacher) {
            fetchDataa();
        }
    }, [datateacher]);
    return (
        <div>
            <Navbarr />
            <BackButton />
            <div className="p-8 container flex justify-center mx-auto">
                <div className="p-8 bg-0 shadow mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">

                        </div>
                        <div className="relative">
                            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-24 w-24"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Connect
                            </button>
                        </div>
                    </div>
                    <div className="mt-20 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">
                            {datateacher.fname} {datateacher.lname},
                            <span className="font-light text-gray-500">{age}</span>
                        </h1>
                        <p className="font-light text-gray-600 mt-3">{datateacher.surguuli}</p>
                        <p className="mt-8 text-gray-500">
                            {datateacher.gender}
                        </p>
                        <p className="mt-2 text-gray-500">{datateacher.province}</p>
                    </div>
                    <div className="mt-12 flex flex-col justify-center">
                        <p className="text-gray-600 text-center font-light lg:px-16">
                            Товч намтар: {datateacher.tovchtaniltsuulga}
                        </p>
                    </div>
                    <Collapse defaultActiveKey={['1']} onChange={onChange} className="mt-8">
                        <Panel showArrow={false} header="Цагийн хуваарь харах" key="2">
                            <div className="p-8 bg-0 shadow">
                                <Table columns={columns} dataSource={dataatable} />
                            </div>
                        </Panel>
                    </Collapse>
                </div>
            </div>

        </div>
    );
};

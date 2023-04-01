import Navbarr from "../components/Navbarr";
import BackButton from "../components/BackButton";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment"
// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`http://localhost:8000/api/teacherList`);
//     const data = await res.json();

//     // Pass data to the page via props
//     return { props: { mes: "haahhahaha" } }
// }
export default function TeacherProfile() {
    const router = useRouter();
    const { id } = router.query;
    const [dataa, setData] = useState([]);
    const [datateacher, setDataTeacher] = useState([]);
    const fetchData = async () => {
        return fetch("http://localhost:8000/api/teacherList")
            .then((response) => response.json())
            .then((data) => setData(data));
    };
    useEffect(() => {
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
    const [userrr, setUserrr] = useState("");
    useEffect(() => {
        setUserrr(JSON.parse(localStorage.getItem("user")));
    }, []);
    const age = moment().year() - datateacher.year;
    return (
        <div>
            <Navbarr />
            <BackButton />
            <div className="p-8 container flex justify-center mx-auto">
                <div className="p-8 bg-white shadow mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            {/* <div>
                                <p className="font-bold text-gray-700 text-xl">22</p>
                                <p className="text-gray-400">Friends</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700 text-xl">10</p>
                                <p className="text-gray-400">Photos</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700 text-xl">89</p>
                                <p className="text-gray-400">Comments</p>
                            </div> */}
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
                            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Message
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
                        <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                            Цагийн хуваарь харах
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

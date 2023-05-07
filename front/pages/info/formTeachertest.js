import React from "react";
import PlainNavbar from "../components/PlainNavbar";
import Footer from "../components/Footer";
import { Button, Form, Input, InputNumber } from "antd";
import { Select, Space } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Router, { useRouter } from "next/router";
import jwt from "jsonwebtoken";

const FormTeacher = () => {
  const router = useRouter();
  const [gender, setGender] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [pnum1, setpnum1] = useState("");
  const [pnum2, setpnum2] = useState("");
  const [province, setprovince] = useState("");
  const [bag, setbag] = useState("");
  const [sum, setsum] = useState("");
  const [delgerengui, setdelgerengui] = useState("");
  const [surguuli, setsurguuli] = useState("");
  const [angi, setangi] = useState("");
  const [tovchtaniltsuulga, settovchtaniltsuulga] = useState("");
  const [userr, setUser] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [dataa, setData] = useState([]);
  const [userrr, setUserrr] = useState("");
  useEffect(() => {
    setUserrr(JSON.parse(localStorage.getItem("user")));
  }, []);
  console.log(dataa);
  const fetchData = async () => {
    return fetch("http://localhost:8000/api/categoryData")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);


  const a = [];
  dataa.map((i) => {
    a.push({ label: i.title, value: i.title });
  });
  const handleclick = (e) => {
    setCategories(e);
  };
  // const handleSubmit = async (e) => {


  //   // const token = localStorage.getItem("token");
  //   // e.preventDefault();
  //   // console.log(categories);
  //   // const user = jwt.decode(token);
  //   // console.log(user);
  //   // if (categories.length < 4) {
  //   //   try {
  //   //     const response = await fetch("http://localhost:8000/api/update", {
  //   //       method: "POST",
  //   //       headers: {
  //   //         authorization: `
  //   //       Bearer ${token}`,
  //   //         "Content-Type": "application/json",
  //   //       },
  //   //       body: JSON.stringify({
  //   //         gender: gender,
  //   //         year: year,
  //   //         day: day,
  //   //         month: month,
  //   //         fname: fname,
  //   //         lname: lname,
  //   //         pnum1: pnum1,
  //   //         pnum2: pnum2,
  //   //         province: province,
  //   //         bag: bag,
  //   //         sum: sum,
  //   //         delgerengui: delgerengui,
  //   //         surguuli: surguuli,
  //   //         angi: angi,
  //   //         tovchtaniltsuulga: tovchtaniltsuulga,
  //   //         price: price,
  //   //         categories: categories,
  //   //       }),
  //   //     });
  //   //     const data = await response.json();
  //   //     if (data.status === "ok") {
  //   //       console.log("ok");
  //   //     }
  //   //     console.log(data);
  //   //     setfname(userrr.fname);
  //   //     setlname(userrr.lname);
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   }
  //   // }
  // };
  console.log(userr);
  const { register, handleSubmit } = useForm();
  const onSubmit = (e) => {
    console.log(e);
  }
  return (
    <div>
      {/* <PlainNavbar /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className=" py-1 bg-blueGray-50">
          <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t bg-0 mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">
                    My account
                  </h6>
                  <button
                    className="bg-1 text-0 active:bg-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"

                  >
                    Хадгалах
                  </button>
                  <button
                    className="bg-500 text-0 active:bg-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => Router.back()}
                  >
                    Буцах
                  </button>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Хэрэглэгчийн мэдээлэл
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Нэр
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          // defaultValue={userrr.fname}
                          // value={fname}
                          {...register("fname")}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Овог
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          // defaultValue={userrr.lname}
                          {...register("lname")}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Утасны дугаар 1
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-1000 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          // defaultValue={userrr.pnum1}
                          {...register("pnum1")}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Утасны дугаар 2
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          // defaultValue={userrr.pnum2}
                          {...register("pnum2")}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Үнэ
                        </label>
                        <input
                          type="number"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          // defaultValue={userrr.price}
                          {...register("price")}
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Холбогдо мэдээлэл
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Аймаг/Хот
                        </label>
                        <select
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          // defaultValue={userrr.province}
                          {...register("province")}
                        >
                          <option value="null">{userrr.province}</option>
                          <option value="Улаанбаатар">Улаанбаатар</option>
                          <option value="Архангай">Архангай</option>
                          <option value="Баян-Өлгий">Баян-Өлгий</option>
                          <option value="Баянхонгор">Баянхонгор</option>
                          <option value="Булган">Булган</option>
                          <option value="Говь-Алтай">Говь-Алтай</option>
                          <option value="Говьсүмбэр">Говьсүмбэр</option>
                          <option value="Дархан-Уул">Дархан-Уул</option>
                          <option value="Дорноговь">Дорноговь</option>
                          <option value="Дорнод">Дорнод</option>
                          <option value="Дундговь">Дундговь</option>
                          <option value="Завхан">Завхан</option>
                          <option value="Орхон">Орхон</option>
                          <option value="Өвөрхангай">Өвөрхангай</option>
                          <option value="Өмнөговь">Өмнөговь</option>
                          <option value="Сүхбаатар">Сүхбаатар</option>
                          <option value="Сэлэнгэ">Сэлэнгэ</option>
                          <option value="	Төв"> Төв</option>
                          <option value="Увс">Увс</option>
                          <option value="Ховд">Ховд</option>
                          <option value="Хөвсгөл">Хөвсгөл</option>
                          <option value="Хэнтий">Хэнтий</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          баг/хороо
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          // defaultValue={userrr.bag}
                          {...register("bag")}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          сум/дүүрэг
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          // defaultValue={userrr.sum}
                          {...register("sum")}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Дэлгэрэнгүй хаяг
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          // defaultValue={userrr.delgerengui}
                          {...register("delgerengui")}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-3/12 px-4">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Хүис
                      </label>
                      <input
                        className=""
                        type="radio"
                        value="male"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        name="gender"
                      />{" "}
                      Эр
                      <input
                        className="ml-6"
                        type="radio"
                        value="female"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        name="gender"
                      />{" "}
                      Эм
                    </div>
                    <div className="w-full lg:w-3/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Төгссөн сургууль
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          // defaultValue={userrr.surguuli}
                          {...register("surguuli")}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-3/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Төрсөн өдөр
                        </label>
                        <input
                          type="text"
                          className="inputDate"
                          // defaultValue={userrr.year}
                          placeholder="Он"
                          {...register("year")}
                          id="Year"
                          name="Year"
                          required
                          pattern="[0-9]+$"
                        />
                        <input
                          type="text"
                          className="inputDate"
                          placeholder="Сар"
                          // defaultValue={userrr.month}
                          {...register("month")}
                          id="month"
                          name="month"
                          required
                          pattern="[0-9]+$"
                        />
                        <input
                          type="text"
                          className="inputDate"
                          placeholder="Өдөр"
                          // defaultValue={userrr.day}
                          {...register("day")}
                          id="day"
                          name="day"
                          required
                          pattern="[0-9]+$"
                        />
                      </div>
                    </div>
                    <div className=" w-32 lg:w-3/12 px-4">
                      <div className="relative w-32 mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Анги
                        </label>
                        <select
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          // defaultValue={userrr.angi}
                          {...register("angi")}
                        >
                          <option value="null">-Сонгох-</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Өөрийн товч танилцуулга
                        </label>
                        <textarea
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          rows="4"
                          // defaultValue={userrr.tovchtaniltsuulga}
                          onChange={(e) => settovchtaniltsuulga(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Ордог хичээлүүд
                        </label>
                        <Space
                          style={{
                            width: "100%",
                          }}
                          direction="vertical"
                        >
                          <Select
                            mode="multiple"
                            allowClear
                            style={{
                              width: "100%",
                            }}
                            maxTagCount={5}
                            onChange={handleclick}
                            placeholder="Please select"
                            options={a}
                          />
                        </Space>
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </form>
              </div>
            </div>
            <footer className="relative  pt-8 pb-6 mt-2">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </form>
      {/* <Footer /> */}
    </div>
  );
};

export default FormTeacher;

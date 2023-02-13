import PlainNavbar from "../components/PlainNavbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
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
  const values = {
    gender,
    year,
    day,
    month,
    fname,
    lname,
    pnum1,
    pnum2,
    province,
    bag,
    sum,
    delgerengui,
    surguuli,
    angi,
    tovchtaniltsuulga,
  };

  async function populate() {
    const token = localStorage.getItem("token");
    const req = await fetch("http://localhost:8000/api/userData", {
      method: "POST",
      headers: {
        authorization: `
        Bearer ${token}`,
      },
    });
    const data = await req.json();
    console.log(data.data);
    // console.log(data.password);
    setUser(data.data);
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        router.push("/LoginAsTeacher");
      } else {
        populate();
      }
    }
  }, []);
  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    const user = jwt.decode(token);
    console.log(user);
    try {
      const response = await fetch("http://localhost:8000/api/update", {
        method: "POST",
        headers: {
          authorization: `
          Bearer ${token}`,
        },
        body: JSON.stringify({
          token: token,
          gender,
          year,
          day,
          month,
          fname,
          lname,
          pnum1,
          pnum2,
          province,
          bag,
          sum,
          delgerengui,
          surguuli,
          angi,
          tovchtaniltsuulga,
        }),
      });
      const data = await response.json();
      if (data.status === "ok") {
        console.log("ok");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <PlainNavbar />
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
                  type="button"
                  onClick={handleSubmit}
                >
                  Save
                </button>
                <button
                  className="bg-500 text-0 active:bg-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => Router.back()}
                >
                  back
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={userr.fname}
                        onChange={(e) => setfname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={userr.lname}
                        onChange={(e) => setlname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Phone Number 1
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-1000 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={pnum1}
                        onChange={(e) => setpnum1(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Phone Number 2
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={pnum2}
                        onChange={(e) => setpnum2(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
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
                        value={province}
                        onChange={(e) => setprovince(e.target.value)}
                      >
                        <option value="null">-Select-</option>
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
                        value={bag}
                        onChange={(e) => setbag(e.target.value)}
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
                        value={sum}
                        onChange={(e) => setsum(e.target.value)}
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
                        value={delgerengui}
                        onChange={(e) => setdelgerengui(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12 px-4">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Gender
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
                    Male
                    <input
                      className="ml-6"
                      type="radio"
                      value="female"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                      name="gender"
                    />{" "}
                    Female
                  </div>
                  <div className="w-full lg:w-3/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Сургууль
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={surguuli}
                        onChange={(e) => setsurguuli(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Date of birth
                      </label>
                      <input
                        type="text"
                        className="inputDate"
                        value={year}
                        placeholder="Он"
                        onChange={(e) => {
                          setYear(e.target.value);
                        }}
                        id="Year"
                        name="Year"
                        required
                        pattern="[0-9]+$"
                      />
                      <input
                        type="text"
                        className="inputDate"
                        placeholder="Сар"
                        value={month}
                        onChange={(e) => {
                          setMonth(e.target.value);
                        }}
                        id="month"
                        name="month"
                        required
                        pattern="[0-9]+$"
                      />
                      <input
                        type="text"
                        className="inputDate"
                        placeholder="Өдөр"
                        value={day}
                        onChange={(e) => {
                          setDay(e.target.value);
                        }}
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
                        value={angi}
                        onChange={(e) => setangi(e.target.value)}
                      >
                        <option value="null">-Select-</option>
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
                <div className=" w-32 lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Start day
                    </label>
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
                <div className=" w-32 lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      End day
                    </label>
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
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
                        value={tovchtaniltsuulga}
                        onChange={(e) => settovchtaniltsuulga(e.target.value)}
                      ></textarea>
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
      <Footer />
    </div>
  );
};

export default FormTeacher;

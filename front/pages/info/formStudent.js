import PlainNavbar from "../components/PlainNavbar";
import Footer from "../components/Footer";
import { useState } from "react";
const FormStudent = () => {
  const [gender, setGender] = useState("");

  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
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
                  className="bg-500 text-0 active:bg-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Save
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
                        htmlfor="grid-password"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-1000 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
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
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        City
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
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
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  About Me
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        About me
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-0 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div>
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

export default FormStudent;

import { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import ModalTeacher from "../components/ModalTeacher";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const TeachersList = () => {
  const [dataa, setData] = useState([]);
  const router = useRouter();
  const fetchData = async () => {
    return fetch("http://localhost:8000/api/teacherList")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  const handleClick = (i) => {
    if (localStorage.getItem("token") === null) {
      router.push("/LoginAs")
    } else {
      router.push(`/teacherprofile/${i}`)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <div>
      <div className="w-full dark:bg-gray-800 px-10 pt-10">
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className=" lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            {dataa.map((i, ind) => {
              return (

                <div
                  role="listitem"
                  className="  xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="bg-50 rounded overflow-hidden shadow-md  dark:bg-gray-900">
                    <div className="absolute -mt-0 w-full text-center">
                      <div className="w-32 h-32 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-24 w-24 z-10"
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
                    <div className=" px-6 mt-16">
                      <button
                        className="mx-auto block font-bold font-roboto dark:text-white text-2xl text-center mb-1"
                        key={i._id}
                        onClick={() => handleClick(i._id)}
                      >
                        {i.fname} {i.lname}
                      </button>
                      <p className=" text-700 text-xl text-center font-bold">
                        {i.price}₮
                      </p>
                      <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                        {i.tovchtaniltsuulga}
                      </p>

                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div aria-label="Github" role="img">
                            <img
                              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                              alt="github"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div aria-label="Twitter" role="img">
                            <img
                              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                              alt="twitter"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div aria-label="Instagram" role="img">
                            <img
                              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                              alt="instagram"
                            />
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>
                </div>

              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersList;

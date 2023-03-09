import { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import ModalTeacher from "../components/ModalTeacher";
const TeachersList = () => {
  const [dataa, setData] = useState([]);
  const fetchData = async () => {
    return fetch("http://localhost:8000/api/teacherList")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState("");
  const showModal = (i, ind) => {
    setIndex(ind);
    setIsModalOpen(true);
    createModal();
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const createModal = () => {
    return (
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        mask={false}
      >
        {/* <p>{dataa[index] && dataa[index].fname}</p> */}
      </Modal>
    )
  }
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16"></div>

      <div className="w-full bg-0 dark:bg-gray-800 px-10 pt-10">
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            {dataa.map((i, ind) => {
              return (
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-0 dark:bg-gray-900">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                          alt="Display Picture of Andres Berlin"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <button
                        className="block font-bold dark:text-white text-2xl text-center mb-1"
                        key={i._id}
                        onClick={(e) => showModal(e, ind)}
                      >
                        {i.fname} {i.lname}
                      </button>
                      <p className=" text-700 text-xl text-center font-bold">
                        {i.price}
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

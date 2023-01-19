const Teacher = () => {
  return (
    // <!-- Card code block start -->
    <div
      aria-label="cards"
      className="bg-white dark:bg-gray-800 shadow rounded"
    >
      <div className="relative">
        <img
          tabindex="0"
          className="focus:outline-none h-56 shadow rounded-t w-full object-cover object-center"
          src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
          alt="mountains cover"
        />
        <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
          <img
            tabindex="0"
            className="focus:outline-none w-full h-full overflow-hidden object-cover rounded"
            src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
            alt="person"
          />
        </div>
      </div>
      <div className="px-5 xl:px-10 pb-10">
        <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
          <div
            tabindex="0"
            aria-label="4 stars"
            role="img"
            className="focus:outline-none flex items-center"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg"
              alt="yellow star"
            />
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg"
              alt="yellow star"
            />
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg"
              alt="yellow star"
            />
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg"
              alt="yellow star"
            />
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg2.svg"
              alt="gray star"
            />
          </div>
        </div>
        <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
          <div className="xl:pr-16 w-full xl:w-2/3">
            <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
              <a
                tabindex="0"
                className=" focus:outline-none  text-gray-800 dark:text-gray-100 focus:outline-none"
              >
                {" "}
                <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl  font-medium tracking-normal">
                  Marshall Mathers
                </h2>
              </a>
              <p
                tabindex="0"
                className="focus:outline-none text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full"
              >
                Pro
              </p>
            </div>
            <p
              tabindex="0"
              className="focus:outline-none text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5"
            >
              HI, I am a direct response copywriter from the US. When you work
              with me, we have the same goal. Maximizing your ROI
            </p>
          </div>
          <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
            <div className="mr-6 xl:mr-10">
              <h2
                tabindex="0"
                className="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center"
              >
                82
              </h2>
              <a
                tabindex="0"
                className=" focus:outline-none text-gray-800 dark:text-gray-100 "
              >
                {" "}
                <p className=" text-sm xl:text-xl leading-5">Reviews</p>
              </a>
            </div>
            <div className="mr-6 xl:mr-10">
              <h2
                tabindex="0"
                className="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center"
              >
                28
              </h2>
              <a
                tabindex="0"
                className=" focus:outline-none text-gray-800 dark:text-gray-100 "
              >
                {" "}
                <p className=" text-sm xl:text-xl leading-5">Projects</p>
              </a>
            </div>
            <div>
              <h2
                tabindex="0"
                className="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center"
              >
                42
              </h2>
              <a
                tabindex="0"
                className=" focus:outline-none text-gray-800 dark:text-gray-100 "
              >
                {" "}
                <p className=" text-sm xl:text-xl leading-5">Approved</p>
              </a>
            </div>
          </div>
          <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
            <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
              <div
                tabindex="0"
                className="focus:outline-none rounded-full bg-gray-100 text-gray-700 dark:text-gray-400 text-sm px-6 py-2 flex justify-center items-center"
              >
                Remote
              </div>
              <div
                tabindex="0"
                className="focus:outline-none ml-5 rounded-full bg-green-100 text-green-700 text-sm px-6 py-2 flex justify-center items-center"
              >
                Available
              </div>
            </div>
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
    // <!-- Card code block end -->
  );
};

export default Teacher;

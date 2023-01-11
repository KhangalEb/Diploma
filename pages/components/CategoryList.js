import React, { useEffect } from "react";

function CategoryList() {
  //   useEffect(() => {
  //     document.querySelector("body").addEventListener("click", (e) => {
  //       // e.stopPropagation();
  //       console.log("body");
  //       if (
  //         document
  //           .getElementById("drop-down-div_search_5")
  //           .classList.contains("active")
  //       ) {
  //         document
  //           .getElementById("drop-down-div_search_5")
  //           .classList.add("hidden");
  //         document
  //           .getElementById("drop-down-div_search_5")
  //           .classList.remove("active");
  //       }
  //     });
  //   });
  function showDropDownMenu_search_5(el) {
    document.querySelectorAll(".hideme").forEach((el) => {
      el.classList.remove("active");
    });
    el.parentElement.children[1].classList.add("active");
    el.parentElement.children[1].classList.remove("hidden");
  }
  function text_search_5(el) {
    const targetText = el.innerText;
    document.getElementById("drop-down-content-setter_search_5").innerText =
      targetText;
    document
      .getElementById("drop-down-div_search_5")
      .classList.toggle("hidden");
    console.log(targetText);
  }
  return (
    <>
      <div className="py-4 px-4 h-[550px] ">
        <div className="lg:max-w-[356px] md:max-w-[744px] max-w-[375px] mx-auto py-3">
          <div className="mt-8 px-6">
            <p className="text-lg font-semibold leading-none text-gray-800 ml-1">
              Select subject
            </p>
            <div className="dropdown-one border border-gray-300 w-full rounded outline-none bg-white relative mt-4">
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  showDropDownMenu_search_5(event.target);
                }}
                className="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full shadow-md"
              >
                <span
                  className="text-left font-medium text-gray-600 text-sm"
                  id="drop-down-content-setter_search_5"
                >
                  Communications
                </span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 5.75L8 10.25L12.5 5.75"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="hidden rounded w-full  border-t border-gray-200 px-3 py-2 absolute top-16 right-0 bg-white shadow-full shadow-lg"
                id="drop-down-div_search_5"
              >
                <div className="overflow-y-scroll h-[330px]">
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 hover:font-medium p-3"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Architecture and engineering
                    </p>
                  </a>
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 p-3 hover:font-medium"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Arts, culture and entertainment
                    </p>
                  </a>
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 p-3 hover:font-medium"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Law and public policy
                    </p>
                  </a>
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 p-3 hover:font-medium"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Communications
                    </p>
                  </a>
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 p-3 hover:font-medium"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Community and social services
                    </p>
                  </a>
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 p-3 hover:font-medium"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Education
                    </p>
                  </a>
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 p-3 hover:font-medium"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Science and technology
                    </p>
                  </a>
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 p-3 hover:font-medium"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Health and medicine
                    </p>
                  </a>
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 p-3 hover:ont-medium"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Farming, fishing and forestry
                    </p>
                  </a>
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 p-3 hover:font-medium"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Government
                    </p>
                  </a>
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 p-3 text-left hover:font-medium"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Installation, repair and maintenance
                    </p>
                  </a>
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 p-3 text-left hover:font-medium"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Business, management and administration
                    </p>
                  </a>
                  <a href="#">
                    <p
                      className="text-base font-normal leading-none text-gray-600 hover:text-gray-800 p-3 hover:font-medium"
                      onClick={(event) => {
                        event.stopPropagation();
                        text_search_5(event.target);
                      }}
                    >
                      Sales
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
 ::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 20px; 
}
::-webkit-scrollbar-thumb {
  background: #D1D5DB;
  border-radius: 20px; 
}

`}
      </style>
    </>
  );
}

export default CategoryList;

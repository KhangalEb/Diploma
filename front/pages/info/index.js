import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import PlainNavbar from "../components/PlainNavbar";
const Info = () => {
  return (
    <div>
      <PlainNavbar />
      <div class="flex flex-col items-center my-48">
        <h1 class="font-bold text-center">SIGN UP AS</h1>
        <div class="">
          <button class=" m-4 bg-transparent hover:bg-1 hover:border-1 text-700 font-semibold hover:text-0 py-10 px-14 border border-500 hover:border-transparent rounded">
            Student
          </button>
          <button class=" m-4 bg-500 hover:bg-700 text-0 font-bold py-10 px-14 border border-700 rounded">
            Teacher
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Info;

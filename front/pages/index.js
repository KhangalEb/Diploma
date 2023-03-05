import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TeachersList from "./components/TeachersList";
import CategoryList from "./components/CategoryList";
import ScheduleList from "./components/ScheduleList";
import NavbarMainHome from "./components/NavbarMainHome";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      router.push("/dashboard");
    }
  });
  return (
    <div>
      <Head>
        <title>E-Teacher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarMainHome></NavbarMainHome>

      <div className="container w-full h-96 mt-96 mx-auto">
        <Image
          src="/OnlineSchool.jpg"
          alt="Background home"
          className="brightness-50"
          // placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <h1 className="relative xl:text-4xl text-3xl text-center text-gray-800 text-0 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto pt-4 z-10">
          Let's study from today
        </h1>
      </div>
      <div>
        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto pt-4">
          Recommended Teachers
        </h1>
        <TeachersList></TeachersList>
      </div>

      <Footer></Footer>
    </div>
  );
}

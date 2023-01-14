import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeachersList from "../components/TeachersList";
import CategoryList from "../components/CategoryList";
import ScheduleList from "../components/ScheduleList";
import Navbarr from "../components/Navbarr";
import { useRouter } from "next/router";
const SubjectDetails = () => {
  const router = useRouter();
  const { subjectDetails } = router.query;
  return (
    <div>
      <Head>
        <title>E-Teacher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbarr></Navbarr>
      This is the page of - {subjectDetails}
    </div>
  );
};

export default SubjectDetails;

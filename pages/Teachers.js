import Footer from "./components/Footer";
import TeachersList from "./components/TeachersList";
import Navbar from "./components/Navbar";
const Teachers = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <p className="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3 mx-auto pt-16">
          MONGOLIAN EDUCATION FIRST
        </p>
        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
          Our Teachers
        </h1>
      </div>
      <TeachersList />
      <Footer></Footer>
    </div>
  );
};

export default Teachers;

import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import HomeTeacher from "./components/HomeTeacher";
import HomeStudent from "./components/HomeStudent";
const Dashboard = () => {
  const router = useRouter();
  const [userr, setUser] = useState("");
  // const [tempQuote, setTempQuote] = useState();
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
  const rolee = userr.role;
  if (rolee == "student") {
    return <HomeStudent />;
  } else {
    return <HomeTeacher />;
  }
};

export default Dashboard;

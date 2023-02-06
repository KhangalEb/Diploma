import React, { useEffect } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
const Dashboard = () => {
  const router = useRouter();
  async function populateQuote() {
    const req = await fetch("http://localhost:8000/api/quote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = req.json();
    console.log(data);
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        router.push("/LoginAsTeacher");
      } else {
        populateQuote();
      }
    }
  }, []);
  return <div>Hello</div>;
};

export default Dashboard;

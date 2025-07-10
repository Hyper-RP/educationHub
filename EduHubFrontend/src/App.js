import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import axios from "axios";

const API_URL = "http://localhost:8080/user/allUsers";

function App() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState();
  const [userId,setUserId]=useState();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setUsers(res.data))
      .catch((err) => "springBoot se data nahi aaya hai");
  },[]);

  const handleAddUser = () => {
    axios
      .post("http://localhost:8080/user/addUser", {userId:userId, userName: userName, userPassword: userPass })
      .then((res) => setUsers([...users, res.data]))
      .catch((err) => console.error("user add nahi hua"));
  };

  return (
    <Router>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;

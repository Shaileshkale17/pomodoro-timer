// App.js
import React, { useEffect } from "react";
import Login from "./components/Login/Login.";
import Timer from "./components/Timer/Timer";
import { auth } from "./firebase";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;

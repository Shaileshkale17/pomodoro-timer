import React, { useEffect, useState } from "react";
import assets  from "../../assets/pomodoro-technique-64.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../Login/Logout";

function Header() {
  const [userName, setUserName] = useState({});
 const navigate = useNavigate(); 
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUserName(storedUser);
  }, [setUserName]);

const HeadleLogout = async() =>{
await signOut(auth);
localStorage.removeItem("token");
localStorage.removeItem("user");
navigate("/")
}

  return (
    <div className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full mr-2"
            src={assets}
            alt="Logo"
          />
          <div className="text-white text-2xl font-bold">Pomodoro Time</div>
        </div>
        <div className="flex items-center">
          {userName && userName.displayName && (
            <div className="text-white mr-4">{userName.displayName}</div>
          )}
          
        </div>
        <div className="flex items-center">
          {userName == ""?(
            <Logout/>
            ):(
            <div className="text-white mr-4"><Link to='/'>Loging</Link></div>
           
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Header;

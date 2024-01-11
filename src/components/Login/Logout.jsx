import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate(); 
    const HeadleLogout = async() =>{
        await signOut(auth);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/")
        }
  return (
    <div>
      <div className="text-white mr-4" onClick={()=>HeadleLogout}>Logout</div>
    </div>
  )
}

export default Logout

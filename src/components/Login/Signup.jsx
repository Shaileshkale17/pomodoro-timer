import React, { useState } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import GoogleButton from "react-google-button";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
const Signup = () => {
  const [Email , setEmail] = useState();
  const [Password , setPassword] = useState();

  const navigate = useNavigate(); // Use useNavigate hook here

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate('/protected'); // Use navigate function
    } catch (error) {
      console.error(error.message);
      console.log(error.message);
    }
  };
  const singninWithForm = async (e) =>{
    e.preventDefault()
    try {

      const result = await createUserWithEmailAndPassword(auth, Email, Password);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate('/protected'); // Use navigate function
    } catch (error) {
      console.error(error.message);
      console.log(error.message);
    }
  }
  return (
    <div className="flex justify-center items-center h-screen login-container">
  <div className="bg-white flex flex-col items-center p-8 rounded shadow-md w-96 main_Class">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
<form action="" onSubmit={singninWithForm} className="formData">
  <div className="inputform">
    <label htmlFor="Email">Email</label>
    <input type="email" name="Email" id="Email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="inputform">
    <label htmlFor="Password">Password</label>
    <input type="Password" name="Password" id="Password" value={Password} onChange={(e)=> setPassword(e.target.value)}/>
  </div>
  <button type="submit">submit</button>
</form>
<p>Need To Login <Link to="/">Login</Link></p>
<hr className="hrline"/>

    <GoogleButton  onClick={signInWithGoogle}/>
  </div>
</div>

  );
};

export default Signup;






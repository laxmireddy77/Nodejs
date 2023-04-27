import axios from 'axios';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
    const nameInputRef=useRef();
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const profilePicInputRef=useRef();
    const createSignUp=async()=>{
const formData=new FormData();
formData.append("name",nameInputRef.current.value);
formData.append("email",emailInputRef.current.value);
formData.append("password",passwordInputRef.current.value);
formData.append("profilepic",profilePicInputRef.current.files[0]);


const response=await axios.post("http://localhost:9999/signUp",formData)

console.log(response.data);
    }
  return (
    <div>
        <form>
            <div>
                <label>Name</label>
                <input ref={nameInputRef}></input>
            </div>
            <div>
                <label>Email</label>
                <input ref={emailInputRef}></input>
            </div>
            <div>
                <label>password</label>
                <input ref={passwordInputRef}></input>
            </div>
            <div>
                <label>ProfilePic</label>
                <input ref={profilePicInputRef} type='file'></input>
            </div>
            <div>
                <button type='button' onClick={()=>{
                   createSignUp();  
                }}>SignUp</button>
            </div>
        </form>
        <Link className="navigation" to="/">Login</Link>
    </div>
  )
}

export default SignUp
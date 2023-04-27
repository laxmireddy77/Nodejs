import axios from 'axios';
import React, { useRef } from 'react'

function UpdateDetails() {
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const profilePicInputRef=useRef();
    const updateDetails=async()=>{
        const formData=new FormData();
        formData.append("email",emailInputRef.current.value);
        formData.append("password",passwordInputRef.current.value);
        formData.append("profilepic",profilePicInputRef.current.files[0]);
        
        const response=await axios.put("http://localhost:9999/updateDetails",formData)
        
        console.log(response.data);
            }
  return (
    <div>
        <form>
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
                     updateDetails();
                }}>Update</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateDetails;
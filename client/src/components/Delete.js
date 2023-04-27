import React,{ useRef } from 'react'
import axios from 'axios';
function Delete() {
  const emailInputRef=useRef();
  const deleteDetails=async()=>{
  
    const response=await axios.get(`http://localhost:9999/deleteDetails?email=${emailInputRef.current.value}`)
    
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
                <button type='button' onClick={()=>{
                     deleteDetails();
                }}>Delete</button>
            </div>
        </form>
       
    </div>
  )
}

export default Delete;
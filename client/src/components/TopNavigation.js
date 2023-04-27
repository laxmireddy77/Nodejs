import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function TopNavigation() {
  const navigate = useNavigate();
  const storeObj = useSelector(store => store);

  useEffect(() => {
    console.log("Use Effect");
    console.log(storeObj);
    if (!isAuthorized()) {
      console.log("user is unauthorized to see this internal page ");
      navigate("/");
    }
  }, []);

  const isAuthorized = () => {
    return storeObj.loginDetails.isLoggedIn === true;
  };

  const navLinkStyle = (obj) => {
    if (obj.isActive) {
      return {
        backgroundColor: "crimson",
        color: "white"
      };
    }
    return null;
  };

  return (
    <nav>
      <NavLink style={navLinkStyle} to="/dashboard">Dashboard</NavLink>
      <NavLink style={navLinkStyle} to="/dsu">Daily Status Update</NavLink>
      <NavLink style={navLinkStyle} to="/tasks">Tasks</NavLink>
      <NavLink style={navLinkStyle} to="/leaves">Leaves</NavLink>
      <NavLink style={navLinkStyle} to="/messages">Messages</NavLink>
    </nav>
  );
}

export default TopNavigation;




















// import React, { useEffect } from 'react'

// import { useSelector } from 'react-redux'
// import { Link, NavLink, useNavigate } from 'react-router-dom'

// function TopNavigation() {
//   const navigate=useNavigate();
//   useEffect(()=>{
//     console.log("Use Effect");
//     console.log(storeObj);
//     if(storeObj.loginDetails.isLoggedIn==true){
//       console.log("user is authorised to see this internal page ");
//     }else{
//       console.log("user is unauthorised to see this internal page ");
//       navigate("/")
//     }
//   },[])
//   const storeObj=useSelector((store)=>{return store})
//   return (
//     <nav>
//         <NavLink style={(obj)=>{if(obj.isActive==true){return {backgroundColor:"crimson",color:"white"}}}} to="/dashboard">Dashboard</NavLink>
//         <NavLink style={(obj)=>{if(obj.isActive==true){return {backgroundColor:"crimson",color:"white"}}}} to="/dsu">Daily Status Update</NavLink>
//         <NavLink style={(obj)=>{if(obj.isActive==true){return {backgroundColor:"crimson",color:"white"}}}} to="/tasks">Tasks</NavLink>
//         <NavLink style={(obj)=>{if(obj.isActive==true){return {backgroundColor:"crimson",color:"white"}}}} to="/leaves">Leaves</NavLink>
//         <NavLink style={(obj)=>{if(obj.isActive==true){return {backgroundColor:"crimson",color:"white"}}}} to="/messages">Messages</NavLink>
//     </nav>
//   )
// }

// export default TopNavigation
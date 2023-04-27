import React from 'react';
import { useLocation } from 'react-router-dom'
import TopNavigation from './TopNavigation';
function Dashboard() {
    const location=useLocation();
    console.log(location);
  return (
    <div>
      <TopNavigation/>
       <h1>Welcome to Dashboard</h1> 
       {/* <img src={"http://localhost:9999/"+location.state.profilepic}></img> */}
    </div>
  )
}

export default Dashboard
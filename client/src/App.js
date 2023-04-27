import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UpdateDetails from './components/UpdateDetails';
import Delete from './components/Delete';
import DSU from './components/DSU';
import Tasks from './components/Tasks';
import Leaves from './components/Leaves';
import Messages from './components/Messages';
import axios from 'axios';
function App() {
  axios.defaults.headers.common["Authorization"]=localStorage.getItem("token");
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/update" element={<UpdateDetails/>}></Route>
      <Route path="/delete" element={<Delete/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/dsu" element={<DSU/>}></Route>
      <Route path="/tasks" element={<Tasks/>}></Route>
      <Route path="/leaves" element={<Leaves/>}></Route>
      <Route path="/messages" element={<Messages/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

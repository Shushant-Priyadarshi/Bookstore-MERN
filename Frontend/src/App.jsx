import Home from "../src/components/Home/Home";
import Course from "./components/Course/Course";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Home/Signup";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/course" element={<Course/>}/>  
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
      </Routes>
    </>
  );
}

export default App;

import Home from "../src/components/Home/Home";
import Course from "./components/Course/Course";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Home/Signup";
import Contact from "./components/Contact/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./components/About/About";

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Course /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

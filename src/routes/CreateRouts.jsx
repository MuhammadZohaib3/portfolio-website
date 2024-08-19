import { Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home";
import Features from "../components/Pages/Features";
import Price from "../components/Pages/Price";
import MyWebsite from "../components/Pages/MyWebsite";
// import Home from "../components/Home";
// import Features from "../components/Features";
// import Price from "../components/Price";
const CreateRouts = () => {
 
  return (
    <Routes>
      <Route path="/" element={<MyWebsite />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Features" element={<Features />} /> 
        <Route path="/Price" element={<Price />} /> 
      </Routes>
  )
}

export default CreateRouts;
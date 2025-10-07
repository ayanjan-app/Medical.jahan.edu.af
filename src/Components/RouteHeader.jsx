import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import VisionAndMission from "./VisionAndMission";
import Ourdoctors from "./OurDoctors";
import Contact from "./Contact";
import Services1 from "./Services1";

function RouteHeader() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visionandmission" element={<VisionAndMission />} />
        <Route path="/Services" element={<Services1 />} />
        <Route path="/DoctorProfile" element={<Ourdoctors />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default RouteHeader;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../componets/Dashboard/Dashboard";
import BlogEditor from "../pages/Blog";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/blog" element={<BlogEditor />} />
    </Routes>
  );
};

export default AllRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import ExploreForHome from "./pages/ExploreForHome";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PostReact from "./pages/posts/PostReact";
import UsernameReact from "./pages/u/UsernameReact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ExploreForHome" element={<ExploreForHome />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/posts/:postID" element={<PostReact/>} />
        <Route path="/u/:username" element={<UsernameReact/>} />
       
      </Routes>
      
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import "./index.css";
import Send from "./pages/Send";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<Send />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

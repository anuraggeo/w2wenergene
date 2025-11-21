import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact.jsx";
import People from "./Components/People.jsx";

import App from "./App.jsx";
import Updates from "./Pages/Updates";
import Step1 from "./Steps/Step1.jsx";
import Step2 from "./Steps/Step2.jsx";
import Step3 from "./Steps/Step3.jsx";
import Step4 from "./Steps/Step4.jsx";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<App />} />

        {/* Updates Page */}
        <Route path="/updates" element={<Updates />} />

         {/* People page */}
        <Route path="/people" element={<People />} />

        {/* Individual Process Step Pages */}
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

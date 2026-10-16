import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import App from "./App.jsx";
import People from "./Components/People.jsx";
import Updates from "./Pages/Updates.jsx";
import Post from "./Pages/Post.jsx";
import Privacy from "./Pages/Privacy.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Step1 from "./Steps/Step1.jsx";
import Step2 from "./Steps/Step2.jsx";
import Step3 from "./Steps/Step3.jsx";
import Step4 from "./Steps/Step4.jsx";

// When moving between pages inside the site, start each page at the top
// (or at the #section in the link, if there is one).
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const last = useRef(pathname + hash);
  useEffect(() => {
    // On the first load the browser already handles scrolling (including #section links).
    if (last.current === pathname + hash) return;
    last.current = pathname + hash;
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

// Every route here is also listed in src/data/site.js so the build can pre-render it.
export default function AppRoutes() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/people" element={<People />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/updates/:id" element={<Post />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/technology/pretreatment" element={<Step1 />} />
        <Route path="/technology/bioleaching" element={<Step2 />} />
        <Route path="/technology/recovery" element={<Step3 />} />
        <Route path="/technology/co2-sequestration" element={<Step4 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

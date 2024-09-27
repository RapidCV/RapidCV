import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import pages from "./pages/pages";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";


const { Home, Templates, Atschecker, ResumeBuilder, Resumereview, About, Faq, Privacyandpolicy } = pages;

function App(): JSX.Element {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/templates" element={<Templates />} /> 
        <Route path="/atschecker" element={<Atschecker />} /> 
        <Route path="/resumebuilder" element={<ResumeBuilder />} /> 
        <Route path="/resumereview" element={<Resumereview />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacyandpolicy" element={<Privacyandpolicy />} />
      </Routes>
      <ScrollToTopButton/>
    </Router>
  );
}

export default App;

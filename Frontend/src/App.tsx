import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import pages from "./pages/pages";
import Footer from "./components/Footer";

const { Home, Templates, Atschecker, ResumeBuilder, Resumereview, About, Pricing  } = pages;

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/templates" element={<Templates />} /> 
        <Route path="/atschecker" element={<Atschecker />} /> 
        <Route path="/resumebuilder" element={<ResumeBuilder />} /> 
        <Route path="/resumereview" element={<Resumereview />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

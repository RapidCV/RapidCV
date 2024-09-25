import { Link, Route, Routes } from "react-router-dom";
import TemplatesPage from "./TemplatesPage";

function Homepage(){
    return <>
    <h1>Home Page</h1>
    <button>
        <Link to="/templates">Create a Resume</Link>
    </button>
      <Routes>
        <Route path='/templates' element={<TemplatesPage />}/>
      </Routes>
    </>
}

export default Homepage;
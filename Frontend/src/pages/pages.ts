import Home from "./Home";
import Templates from "./Templates";
import Atschecker from "./Atschecker";
import ResumeBuilder from "./ResumeBuilder";
import Resumereview from "./Resumereview";
import About from "./About";

const pages: { [key: string]: React.ComponentType } = {
    Home,
    Templates,
    Atschecker,
    ResumeBuilder,
    Resumereview,
    About,
};

export default pages;

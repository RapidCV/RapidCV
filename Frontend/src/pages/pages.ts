import Home from "./Home";
import Templates from "./Templates";
import Atschecker from "./Atschecker";
import ResumeBuilder from "./ResumeBuilder";
import Resumereview from "./Resumereview";
import About from "./About";
import Support from "./Support";

const pages: { [key: string]: React.ComponentType } = {
    Home,
    Templates,
    Atschecker,
    ResumeBuilder,
    Resumereview,
    About,
    Support,
};

export default pages;

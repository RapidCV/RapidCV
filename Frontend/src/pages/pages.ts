import Home from "./Home";
import Templates from "./Templates";
import Atschecker from "./Atschecker";
import ResumeBuilder from "./ResumeBuilder";
import Resumereview from "./Resumereview";
import About from "./About";
import Faq from "./Faq";
import Privacyandpolicy from "./Privacyandpolicy";

const pages: { [key: string]: React.ComponentType } = {
    Home,
    Templates,
    Atschecker,
    ResumeBuilder,
    Resumereview,
    About,
    Faq,
    Privacyandpolicy,
};

export default pages;

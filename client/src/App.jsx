// import Canvas from "./canvas";
// import Customizer from "./pages/Customizer";
// import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  ProjectHeader,
  ProjectList,
  StarsCanvas,
  Hero,
  Navbar,
  Experience,
  Carousel,
  ScrollText,
} from "./components";
import { useRef } from "react";
import { Scroll } from "@react-three/drei";


function App() {
  const aboutSectionRef = useRef(null);

  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      scroll.scrollTo(aboutSectionRef.current.offsetTop);
    }
  };
  return (
    <BrowserRouter>
      <div className="relative z-0 font-nohemi">
        <div className="">
          <Navbar />
        </div>
        <Hero scrollToAboutSection={scrollToAboutSection} />
        <About aboutSectionRef={aboutSectionRef} />
        <ProjectHeader />
        <ProjectList />
        <Experience />
        {/* <Home />
        <Canvas />
        <Customizer /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Carousel />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

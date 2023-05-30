import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Tech,
  Works,
  StarsCanvas,
  Feedbacks,
  Hero,
  Navbar,
  Experience,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary font-nohemi'>
        <div className=''>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        {/* <Home />
        <Canvas />
        <Customizer /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

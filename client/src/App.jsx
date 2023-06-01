// import Canvas from "./canvas";
// import Customizer from "./pages/Customizer";
// import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Works,
  StarsCanvas,
  Hero,
  Navbar,
  Experience,
  Carousel,
  Feedbacks,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 font-nohemi'>
        <div className=''>
          <Navbar />
        </div>
        <Hero />
        <About />
        <Carousel />
        <Experience />
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

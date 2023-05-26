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
      <main className="app transition-all ease-in relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
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
      </main>
    </BrowserRouter>
  );
}

export default App;

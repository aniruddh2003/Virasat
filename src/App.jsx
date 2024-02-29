import "./App.css";
import About from "./components/About";
import Carousels from "./components/Carousel";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Timeline1 from "./components/Timeline1";
import dharmendra from "./images/Dharmendra_chou.png";
import laxmi from "./images/laxmi-ramaswami.jpg";
import rupak from "./images/rupak-kulkarni-flute.jpg";
import sahana from "./images/sahana.png";
import sharmila from "./images/sharmila_dance.png";
import suranjana from "./images/Suranjana_sitar.png";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar />
      <Heading />
      <Carousels
        dharmendra={dharmendra}
        laxmi={laxmi}
        rupak={rupak}
        sahana={sahana}
        sharmila={sharmila}
        suranjana={suranjana}
      />
      <About />
      <Timeline1 />
      <Footer />
    </div>
  );
}

export default App;

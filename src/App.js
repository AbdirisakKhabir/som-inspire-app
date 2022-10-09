import "./App.css";
import About from "./components/about";
import CenterNavbar from "./components/centerNavbar";
import HeroSection from "./components/heroSection";
import Navbar from "./components/Navbar";
import VideoCreators from "./components/creators/videoCreators";
import Body from "./components/Body";
import GetStarted from "./components/getStarted";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Podcasters from "./components/creators/podcasters";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <CenterNavbar />
      <VideoCreators />
      <Podcasters />
      {/* <Body /> */}
      <GetStarted />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

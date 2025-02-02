// src/App.jsx
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Myprofile from "./components/Myprofile";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Heyoo from "./components/Heyoo";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Myprofile />
      <Projects />
      <Testimonial />
      <Contact />
      <Heyoo />
      <Footer />
    </div>
  );
}

export default App;

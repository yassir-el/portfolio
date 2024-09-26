import "./App.css";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MainSection from "./components/MainSection";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div id="home" className="absolute top-0"></div>
      <NavBar />

      <div className="container max-w-[1300px] px-8 m-auto mt-10">
        <MainSection />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;

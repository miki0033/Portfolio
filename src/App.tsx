import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col w-full items-center">
        <Presentation></Presentation>
        <Experience></Experience>
        <Education></Education>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;

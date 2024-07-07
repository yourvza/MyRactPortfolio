import Nav from "./components/Nav";
import Banner from "./components/banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="bg-slate-900">
        <Nav />
        <Banner />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

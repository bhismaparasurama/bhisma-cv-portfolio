import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Footer from "./components/Footer";
import BlogList from "./components/Blogs/BlogPreview";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <BlogList/>
      <Contact/>
      <Footer/>
    </div>
  );
}

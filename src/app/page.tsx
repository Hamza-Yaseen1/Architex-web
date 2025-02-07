import About from "./Components/about";
import Focus from "./Components/focus";
import Hero from "./Components/hero"
import Projects from "./Components/project";
import Seo from "./Components/Seo";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Focus />
      <Projects />
      <Seo 
      title="Best Land Deals in Pakistan | LandHub" 
      description="Explore the best land deals in Karachi, Lahore, Islamabad & all over Pakistan. Secure your future with prime land investments!" 
      />
    </>
  );
}

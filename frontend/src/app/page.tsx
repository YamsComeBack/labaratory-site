import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Team } from "./team/Team";
import { Contact } from "./contact/Contact";
import { Footer } from "./footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

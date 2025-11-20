import { About } from "./components/About"
import { Main } from "./components/Main"
import { Navbar } from "./components/Navbar"
import { Skills } from "./components/Skills"
import { Experience } from "./components/Experience"
import { Projects } from "./components/Projects"
import { Achievements } from "./components/Achievements"
import {Footer} from "./components/Footer"

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-3 pt-24">
        <Main />
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App

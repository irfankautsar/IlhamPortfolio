import MouseSpotlight from './components/MouseSpotlight'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import SkillsPanel from './components/SkillsPanel'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-ink">
      <MouseSpotlight />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <SkillsPanel />
      <Education />
      <Footer />
    </main>
  )
}

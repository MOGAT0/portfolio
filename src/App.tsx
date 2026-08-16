import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VantaBackground from './components/VantaBackground'

function App() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <VantaBackground />
      <Header />
      <main>
        <Hero />
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
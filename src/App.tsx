import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VantaBackground from './components/VantaBackground'

// Main App component with Vanta background and updated layout
function App() {
  return (
    <div className="min-h-screen bg-black">
      <VantaBackground />
      <Header />
      <main>
        <Hero />
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
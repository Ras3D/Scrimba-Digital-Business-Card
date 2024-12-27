import Info from "./components/Info.jsx"
import About from "./components/About.jsx"
import Interests from "./components/Interests.jsx"
import Footer from "./components/Footer.jsx"
import profile from "./assets/fb_profile.jpg"

function App() {
  return (
    <> 
      <main className="main-container">
        <header>
          <img src={profile } />
        </header>
        <Info />
        <About />
        <Interests />
        <Footer />
      </main>
    </>
  )
}

export default App

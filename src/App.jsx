import Header from "./components/Header"
import Hero from "./components/Hero"
import Menu from "./components/Menus"
import Reviews from "./components/Reviews"
import Visits from "./components/Visits"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-stone-100 min-h-screen">
      <Header/>
      <Hero/>
      <Menu/>
      <Reviews/>
      <Visits/>
      <Footer/>
    </div>
  )
}

export default App
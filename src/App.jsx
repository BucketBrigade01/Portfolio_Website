import React from "react"
import Intro from "./components/Into"
import Portfolio from "./components/Portfolio"
import Timeline from "./components/Timeline"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-slate-900">
      <Intro/>
      <Portfolio/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
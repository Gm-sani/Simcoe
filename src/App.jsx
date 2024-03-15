import React from "react"
import Nav from "./Component/Nav"
import Welcome from "./Component/Welcome"
import Whoweare from "./Component/Whoweare"
import Services from "./Component/Services"
import Industries from "./Component/Industries"
import Technologies from "./Component/Technologies"
import Team from "./Component/Team"
import Whywork from "./Component/Whywork"
import Footer from "./Component/Footer"


function App() {

  return (
    <>
    <div className="bg-slate-900 h-screen w-screen relative">
    <Nav/>
    <Welcome/>
    <Whoweare/>
    <Services/>
    <Industries/>
    <Technologies/>
    <Team/>
    <Whywork/>
    <Footer/>
    </div>
    
    </>
  )
}

export default App

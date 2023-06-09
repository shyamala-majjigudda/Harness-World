import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import About from "./pages/About"
import MedicalTransformer from "./pages/MedicalTransformer"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Footer from "./common/footer/Footer"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Pages />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
          <Route path='/medical-isolation-transformer' exact>
            <MedicalTransformer />
          </Route>
          <Route path='/wire-harness' exact>
            <Products />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App

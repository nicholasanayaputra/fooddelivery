/* eslint-disable no-unused-vars */
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HeadlineCards from "./components/HeadlineCards"
import Food from "./components/Food"
import Category from "./components/Category"

import 'animate.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  )
}

export default App

import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"

const Header = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".fix-header")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <Head />
      <Search CartItem={CartItem} />
    </>
  )
}

export default Header

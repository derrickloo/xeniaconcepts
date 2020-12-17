import React from 'react'
import Link from 'gatsby-link'
import "./Header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
    <Link to="/"><img src={require("../images/xenia-concepts-logo-white.png")} width="160" /></Link>
      <Link to="#" className="navigation">About Us</Link>
      <Link to="#" className="navigation">Services</Link>
      <Link to="#" className="navigation">Partners</Link>
      <Link to="#"><button>Contact</button></Link>
    </div>
  </div>
)

export default Header

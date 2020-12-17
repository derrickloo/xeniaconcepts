import React from 'react'
import Link from 'gatsby-link'
import "./Header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
    <Link to="/"><img src={require("../images/xenia-concepts-logo-white.png")} width="160" /></Link>
      <Link to="#" className="navigation">Our Team</Link>
      <Link to="#" className="navigation">Our Services</Link>
      <Link to="#" className="navigation">Our Partners</Link>
      <Link to="#" className="navigation">Contact Us</Link>
    </div>
  </div>
)

export default Header

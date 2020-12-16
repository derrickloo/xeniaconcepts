import React from 'react'
import Link from 'gatsby-link'
import "./Header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="#">Home</Link>
      <Link to="#">About Us</Link>
      <Link to="#">Our Partners</Link>
      <Link to="#">Our Services</Link>
      <Link to="#">Contact Us</Link>
    </div>
  </div>
)

export default Header

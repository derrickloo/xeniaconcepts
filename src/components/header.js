import React from 'react'
import Link from 'gatsby-link'
import "./Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({hasScrolled: false})
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
        <Link to="/"><img src={require("../images/xenia-concepts-logo-white.png")} width="160" /></Link>
          <Link to="#" className="navigation">About Us</Link>
          <Link to="#" className="navigation">Services</Link>
          <Link to="#" className="navigation">Partners</Link>
          <Link to="#"><button>Contact</button></Link>
        </div>
      </div>
    )
  }
}

export default Header

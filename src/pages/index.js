import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <div className="HeroContentGroup">
          <h1>The ancient Greek concept of hospitality</h1>
          <p>Generosity and courtesy shown to those who are far from home and/or associates of the person bestowing guest-friendship.</p>
        </div>
        <a>Learn More</a>
      </div>
    </div>
    <div className="Cards">
      <h2>Xenia provides comprehensive services across hospitality sectors including but not limited to:</h2>
      <div className="CardGroup">
        <Card 
          title="Hotels and Resorts"
          text="• Property Planning/ Hospitality Development • Pre-Opening Planning • Hotel Valuation • Property Investments • Hospitality Crisis Management"
          image={require('../images/icon-hotel-red.png')}
        />
        <Card 
          title="Serviced Apartments"
          text="• Facility Management • Hospitality Consultancy • Concept Development • Business Sustainability • Business Development"
          image={require('../images/icon-sa-red.png')}
        />
        <Card 
          title="Airport Lounges"
          text="• Operational and Systems Set-Up
          • Staff Management and Training
          • Integration of (SMART) Technology and Infrastructure"
          image={require('../images/icon-airports-red.png')}
        />
      </div>
    </div>
  </div>
)

export default IndexPage
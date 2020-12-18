import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Card2 from '../components/Card2';

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
    <div className="About">
      <div className="AboutGroup">
        <h2>About Us</h2>
        <h3>Our core team of industry experts and hospitality professionals are specially brought together to offer the best in class of services and expertise to meet and exceed our clients’ expectations and needs.</h3>
      </div>
    </div>
    <div className="Vision">
      <div className="VisionGroup">
        <h3>We came together with the vision of providing advisory, asset and investment management services to hospitality owners and operators.</h3>
      </div>
    </div>
    <div className="Cards">
      <h2>Xenia provides comprehensive services across hospitality sectors including but not limited to:</h2>
      <div className="CardGroup1">
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
      <div className="CardGroup2">
        <Card2
            title="Wellness and Medical Centers"
            text="• Concept Development • Sustainable Business Operations • Hospitality Consultancy • Facility Management"
            image={require('../images/icon-wellness-red.png')}
          />
          <Card2
            title="Retail businesses / F&B and Commercial Kitchens"
            text="• Business Continuity Management • Operations Audits • Marketing and Branding • Operational and Systems Set-up • Staff Management and Training"
            image={require('../images/icon-retail-business-red.png')}
          />
      </div>
    </div>
  </div>
)

export default IndexPage
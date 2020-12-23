import React from 'react'
import Link from 'gatsby-link'
import Tagline from '../components/Tagline'

const ServicesPage = () => (
    <div>
        <Tagline 
            text="Connecting people, Building businesses"
            image={require('../images/xc-wallpaper-01.jpg')}
        />
        <div className="Services">
            <div className="ServicesGroup">
                <div className="ServicesHeaderGroup">
                    <p className="ServicesTagline">Our team of hospitality professionals came together with the vision of providing professional advisory, asset and investment management services to hospitality owners and operators.</p>
                    <div className="ServicesImage"></div>
                </div>
                <h1>Our Services</h1>
                <p>Our service objective is to provide hospitality consultancy and services to assist hospitality owners and operators to achieve/surpass industry and professional standards and quality through:</p>
                <ol>
                    <li>End-to-end Technical and Project Management</li>
                    <li>Due Diligence</li>
                    <li>Growth Strategy</li>
                    <li>Recruitment and Retention</li>
                    <li>Branding and Creating A New Market</li>
                    <li>Productivity Enhancement</li>
                    <li>Managing Competition</li>
                    <li>Leverage on Innovation and Technology Disruptions and Digital Deployment</li>
                    <li>Cost Control Management</li>
                    <li>Tapping on Government Grants</li>
                </ol>
            </div>
        </div>
    </div>
)

export default ServicesPage
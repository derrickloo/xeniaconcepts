import React from 'react'
import Link from 'gatsby-link'
import Tagline from '../components/Tagline'
import Biocard from '../components/Biocard'

const AboutPage = () => (
  <div>
    <Tagline 
      text="Connecting people, Building businesses"
      image={require('../images/xc-wallpaper-01.jpg')}
    />
    <div className = "Bio">
      <div className = "BioGroup">
        <div className = "BioTitleGroup">
          <h1>About Us page</h1>
          <h3>Our core team of industry experts and hospitality professionals are specially brought together to offer the best in class of services and expertise to meet and exceed our clients’ expectations and needs.</h3>
        </div>
        <h1>Our Team</h1>
          <div className = "BioCardGroup">
            <Biocard 
              name="Wong Kwee Lian"
              title="Chief Executive Officer"
              image={require('../images/icon-airports-red.png')}
              text1="Kwee Lian holds degrees in Computer Science and Financial Management, and Master in International Hospitality Management. Combining her qualification, believe system and practices, she earns the reputation of being a true HR Leader who position HR as a Business Partner for Excellence and Employee Champion."
              text2="She chose her entry into the Hospitality trade by joining Four Seasons Hotels and Resorts, one of only 13 organizations to have distinction every year of being listed  “100 Best Companies to Work For” by Fortune Magazine since inception in 1998. She started as an IT Manager and later Assistant Financial controller. Her enthusiasm and believe in developing her team earned her the Mentor title and promotion as HR Director. There is no turning back for her in the HR profession since then. She was subsequently appointed as Senior HR Director overseeing hotels in Asia Pacific region and opened many Four Seasons Hotels in China. After 25 years with Four Seasons, Kwee Lian then joined COMO Hotels and Resorts as Vice President Human Resources providing strategic leadership and business partnership functions in Asia pacific, Europe and North America region."
              text3="Kwee Lian also played active roles in community development including the role of Chairman of ITE Hospitality and Tourism Academic Council Committee (HTAAC), Certified Trainer of PUB VoW (Volunteer of Water) Adopter and Certified Trainer, Guest Speaker for Cornell-Nanyang University, UNLV Singapore and Temasek Polytechnic."
            />
          </div>
      </div>
    </div>
  </div>
)

export default AboutPage

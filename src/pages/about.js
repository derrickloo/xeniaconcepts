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
          <h1>About Us</h1>
          <p>Our core team of industry experts and hospitality professionals are specially brought together to offer the best in class of services and expertise to meet and exceed our clients’ expectations and needs.</p>
        </div>
        <h1>Our Team</h1>
          <div className = "BioCardGroup">
            <Biocard 
              name="Wong Kwee Lian"
              title="Chief Executive Officer"
              image={require('../images/bio-kwee-lian.jpg')}
              text1="Kwee Lian holds degrees in Computer Science and Financial Management, and Master in International Hospitality Management. Combining her qualification, believe system and practices, she earns the reputation of being a true HR Leader who position HR as a Business Partner for Excellence and Employee Champion."
              text2="She chose her entry into the Hospitality trade by joining Four Seasons Hotels and Resorts, one of only 13 organizations to have distinction every year of being listed  “100 Best Companies to Work For” by Fortune Magazine since inception in 1998. She started as an IT Manager and later Assistant Financial controller. Her enthusiasm and believe in developing her team earned her the Mentor title and promotion as HR Director. There is no turning back for her in the HR profession since then. She was subsequently appointed as Senior HR Director overseeing hotels in Asia Pacific region and opened many Four Seasons Hotels in China. After 25 years with Four Seasons, Kwee Lian then joined COMO Hotels and Resorts as Vice President Human Resources providing strategic leadership and business partnership functions in Asia pacific, Europe and North America region."
              text3="Kwee Lian also played active roles in community development including the role of Chairman of ITE Hospitality and Tourism Academic Council Committee (HTAAC), Certified Trainer of PUB VoW (Volunteer of Water) Adopter and Certified Trainer, Guest Speaker for Cornell-Nanyang University, UNLV Singapore and Temasek Polytechnic."
            />
            <Biocard 
              name="Mark Chan"
              title="Managing Director, Investments & Operations"
              image={require('../images/bio-mark-chan.jpg')}
              text1="Mark has spent over two decades in the industries of Hospitality, Food & Beverage and Manpower Supplies. He is currently appointed as a consultant to SinoAm Capital for Hospitality Investment for Hotel and F&B and Principal Consultant for Backbenches International, specialising in Hotel Investments & F&B Projects."
              text2="He had also held senior level management appointments in associations such as Food & Beverage Management Association (FBMA), MICE & Banquet Association of Singapore (MBAS); and is also the founder of MBAS and advisor to the Asia Pacific Golden Dragon Award (APGDA). He is well experienced with F&B work, including Business Start-ups, Project Management, Business Ownerships and Operations, People Management and Business Planning."
              text3="He also boasts of having successfully won bids and organized numerous VVIP/Mega event like the Singapore Air Shows, Formula 1 SingTel Singapore Grand Prix, government events like MFA State Event, National Day Rally, Istana Events and etc."
            />
            <Biocard 
              name="Isabel Kang"
              title="Managing Director, Marketing & Business Development"
              image={require('../images/bio-isabel-kang.jpeg')}
              text1="Isabel is a dynamic and focused individual who utilizes creativity, leadership, initiative and teamwork to deliver and execute client-based solutions to create valued customer service and relationship, and marketing materials/ products that convey value for both clients and end users."
              text2="She is familiar with working creatively and innovatively under pressure and within tight budgets and deadlines and has over 15 years of extensive marketing, inter-relations, communications, events planning and administrative management experiences in various industries including IT (document imaging and processing and storage servers), Social Services, Education, MICE (NGO, arts and commercial) and Hospitality and the statutory boards. Experienced in a wide variety of job skills, including management, events management and education & training, her specialties are in Events Planning, Marketing, Corporate Communications, Public Relations. She is at her best managing a big group of up to 800 and does best creating events and actions for 200-300 people and thinking out of the box."
              text3="Her bilingualism and language skills not only makes her an excellent and effective teacher but have also allowed her to venture into China and built her network of business contacts across industries there. As such she is most familiar with working and leading people of different backgrounds, capabilities and generations. A meticulous and organised person despite her creative and capricious nature, she is also a resourceful and effective individual at work."
            />
          </div>
      </div>
    </div>
  </div>
)

export default AboutPage

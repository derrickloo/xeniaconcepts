import React from 'react'
import Link from 'gatsby-link'
import Tagline from '../components/Tagline'
import Biocard from '../components/Biocard'

const PartnersPage = () => (
    <div>
        <Tagline 
        text="Connecting people, Building businesses"
        image={require('../images/xc-wallpaper-01.jpg')}
        />
        <div className = "Bio">
      <div className = "BioGroup">
        <div className = "BioTitleGroup">
          <h1>Our Partners</h1>
          <p>We have assembled a dedicated team of hospitality professionals who have brought with them their rich experiences in the hospitality sector, including proven and established credentials in hotel and F&B development and operations.</p>
        </div>
        <h1>Our Team</h1>
          <div className = "BioCardGroup">
            <Biocard 
              name="Jimmy Leong"
              title="Advisor"
              image={require('../images/bio-jimmy.jpg')}
              text1="Jimmy Leong is the Chief Commercial Officer, Asia at IQ-EQ. Working out of the Singapore office, Jimmy is responsible for developing new and existing client relationships to support business expansion and further solidify IQ-EQ’s reputation across its business segments including Funds, Corporate and Private Wealth, in the Asian region. Jimmy has spent more than 25 years in the financial services industry and has assumed senior management positions in Asian and renowned financial institutions."
              text2="Among his senior level appointments, in recent years, Jimmy was the Managing Director of a real estate fund management company based in Singapore, CEO of a Hong Kong based family office as well as CEO for a Hong Kong listed financial services company. His management experience also spans across renown financial institutions including JP Morgan, Standard Chartered Bank, Bank SinoPac, MF Global Ltd and Pilgrim Partners, where he assumed different senior level positions in global and capital markets, treasury, asset management and wealth management divisions across all asset classes. In the late 1990s, he was also instrumental in the setup and management of a family office, investing in global multi-asset classes and products that delivered consistent double-digit growth over a span of 5 years."
              text3="Jimmy is a regular attendee and invited speaker for industry events. Jimmy brings with him an extensive network of global industry contacts and financial products and services experience."
            />
            <Biocard 
              name="Lens Gwee"
              title="Advisor"
              image={require('../images/bio-lens-gwee.jpg')}
              text1="A knowledgeable and highly qualified Food & Beverage veteran with more than 35 years of experience in the hospitality industry, Lens Gwee brings with him a wealth of experience from his stints in renowned international and local hotels, established chain restaurants and 2 local premium golf and country club. Lens was also involved in hotels pre-opening, setting up of new restaurants and have also oversee the daily operation of Lagunita Spa. An ACTA certified trainer, Lens enjoys conducting training and sharing his expertise and experience with his team."
              text2="Lens uses his tenacity and hard work ethic to achieve his career and personal goals. With a pioneering spirit and an eye for details and innovation, Lens has left a legacy of new initiatives wherever he has worked, making him the ideal administrator for the variety of culinary experiences offered in the hospitality industry. With his display of passion, commitment, drive, dedication, hard word, desire to do attitude delivering excellent result topped with a very positive mental and physical attitude. Lens was with the Furama RiverFront for 9 years from 2009 to 2018 holding the position of Executive Assistant Manager and was also concurrently appointed Regional Director of Food & Beverage for Furama Hotels International and oversee the Food & Beverage Department of 11 hotels under the Furama Brand."
              text3="Lens’ portfolio also led him to be one of the Regional Judge/Auditor appointed by Hospitality Asia for the Regional Hospitality Asia Platinum Award to judge Local /Oversea Hotels, Bar/Pubs and Overseas Golf & Country Club to conduct “Mystery Shopper” Audit."
            />
            <Biocard 
              name="Jason Lim"
              title="Consultant"
              image={require('../images/bio-jason-lim.jpg')}
              text1="Ramen Chef Jason Lim is a graduate of the renowned Yamato Ramen School in Japan. Thereafter he started his first Men-Tei Ramen shop in Singapore in 2006 and subsequently ventured into F&B consultancy."
              text2="He has been training aspiring ramen shop owners and professional chefs since 2012 and has also helped many in launching their ramen businesses. His passion in Food Science since 2004 have also led him to pursue the finesse of recreating a recipe that requires years of training into something that is easily duplicable by junior chefs and commercial kitchens, while retaining its authenticity and secrets. Ramen Chef Jason incorporates culinary science into his teaching and aims to answer not just the ‘how’ but also the ‘why’. He has served many F&B clients in and from Europe, United States and different parts of Asia, including Singapore, Indonesia, Philippines, Hong Kong, Mongolia, Russia and Finland. Coming from a digital background in his previous work life, he is able to integrate both digital marketing expertise with F&B business consulting services for his clients. His services include conceptualizing a F&B business concept, menu development, manpower acquisition, establishing work processes, branding and executing through-the-line marketing campaigns."
              text3="Having travelled extensively across the world, Ramen Chef Jason is familiar with the food culture and culinary demands of different continents. Ramen Chef Jason sees the kitchen from an engineering perspective and aims to help his clients implement a kitchen that is less chef-dependent and is always excited to work with an enterprising owner to set up a viable kitchen and business."
            />
          </div>
      </div>
    </div>
        
    </div>
)

export default PartnersPage

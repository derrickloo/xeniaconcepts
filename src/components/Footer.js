import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div `
    background-color: #222222;
    padding: 40px 40px;
    color: white;
    p { font-size: 12px; }
`
const FooterSectionGroup = styled.div `
    max-width: 900px;
    padding: 10px 0 40px;
    margin: 0 auto;
    border-top: 1px solid #DDDDDD;
    border-bottom: 1px solid #DDDDDD;
    a {text-decoration: none;}
    a:hover {color: #ef413d;} 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat (2, auto);

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
`
const FooterColumnGroup = styled.div `
    display: grid;
    grid-template-rows: 48px auto;
    h4 {font-size: 16px; font-weight: 400;}
    p {font-size: 14px; line-height: 28px; font-weight: 300;}
`

const CategoryLinkGroup = styled.div `
    font-size: 14px;
`
const ContactGroup = styled.div `
    font-size: 14px;
`
const CopyrightGroup =styled.div `
    font-size: 12px;
    max-width: 900px;
    margin: 0 auto;
    color: #999999;
`

const Footer = () => (
    <FooterGroup>
        <FooterSectionGroup>
            <FooterColumnGroup><h4>By Category</h4>
                <p><a href="/about" >About Us</a><br />
                <a href="#" >Services</a><br />
                <a href="#" >Partners</a></p>
            </FooterColumnGroup>
            <FooterColumnGroup><h4>Contact Us</h4>
                <p>Goldhill Plaza, #03-39<br />Singapore 308899<br />
                <a href="mailto:derrickloo@hey.com" >derrickloo@hey.com</a><br />
                Xenia Concepts Pte Ltd</p>
            </FooterColumnGroup>
            <FooterColumnGroup><h4>Connect with Us</h4>
                <p><a href="/about" >Facebook</a><br />
                <a href="#" >LinkedIn</a><br />
                <a href="#" >Twitter</a></p>
            </FooterColumnGroup>
        </FooterSectionGroup>
        <CopyrightGroup>
            <p>Copyright © 2020 Xenia Concepts Pte Ltd. All Rights Reserved.</p>
        </CopyrightGroup>
    </FooterGroup>
)

export default Footer
import React from 'react'
import styled from 'styled-components'

const TaglineGroup = styled.div `
    background-image: url(${props => props.image});
    overflow: hidden;
    background-size: cover;
    background-position: center;
    height: 400px;
    padding: 0 40px;
    z-index: -1;
    @media (max-width: 720px) {
        height: 240px;
    }
`
const TaglineContentGroup = styled.div `
    max-width: 900px;
    margin: 0 auto;
    padding-top: 320px;
    @media (max-width: 720px) {
        padding-top: 180px
    }
`

const TaglineTitle = styled.p `
    color: white;
    font-weight: 300;
    opacity: 0%;
    animation: TaglineAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width: 720px) {
        font-size: 18px;
    }

    @keyframes TaglineAnimation {
    0% {
      opacity: 0%;
      transform: translateY(20px);
    }
    100% {
      opacity: 100%;
      transform: translateY(0px);
    }
  }
`
const Tagline = props => (
    <TaglineGroup image={props.image}>
        <TaglineContentGroup>
            <TaglineTitle>{props.text}</TaglineTitle>
        </TaglineContentGroup>
    </TaglineGroup>
)

export default Tagline
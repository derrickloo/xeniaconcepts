import React from 'react'
import styled from 'styled-components'

const BioGroup = styled.div `
    display: grid;
    grid-template-columns: 200px auto;
    padding: 24px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);

    @media (max-width: 720px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const BioTextGroup = styled.div `
`
const BioName = styled.h2 `
    color: #ef413d;
    font-size: 32px;
    line-height: 1.2;
    padding-bottom: 4px;
    margin: 0 0;
    @media (max-width: 720px) {
        font-size: 28px;
    }
`
const BioTitle = styled.h3 `
    color: #ef413d !important;
    font-size: 28px;
    margin: 0 0;
    padding-bottom: 12px;

    @media (max-width: 720px) {
        font-size: 24px !important;
    }
`
const BioText = styled.p `
    line-height: 1.4;
`
const Biocard = props => (
    <BioGroup>
        <img src={props.image} />
        <BioTextGroup>
            <BioName>{props.name}</BioName>
            <BioTitle>{props.title}</BioTitle>
            <BioText>{props.text1}</BioText>
            <BioText>{props.text2}</BioText>
            <BioText>{props.text3}</BioText>
        </BioTextGroup>
    </BioGroup>
)

export default Biocard
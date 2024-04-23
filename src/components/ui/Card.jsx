import React from 'react'
import styled from 'styled-components'

const Card = ({className, children}) => {
  return (
    <StyleDiv className={className}>
        {children}
    </StyleDiv>
  )
}

const StyleDiv = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    margin: 60px auto 60px;
    box-shadow: 0px 0px 8px  black;
`

export default Card
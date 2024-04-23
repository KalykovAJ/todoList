import React from 'react'
import styled from 'styled-components'

const Text = ({children}) => {
  return (
    <H1Style>{children}</H1Style>
  )
}

const H1Style = styled.h1`
    color: black;
    text-shadow: 4px 2px 6px;
    opacity: 0.8;
    letter-spacing: 3px;
    margin-bottom: 1.5rem;
    text-align: center;
`

export default Text
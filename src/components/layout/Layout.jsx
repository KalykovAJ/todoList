import React, {Fragment} from 'react'
import styled from 'styled-components'
import Header from './Header'

const Layout = (props) => {
  return (
    <Fragment>
        <Header/>
        <MainStyle>{props.children}</MainStyle>
    </Fragment>
  )
}

const MainStyle = styled.main`
    margin: 3rem auto;
    width: 90%;
    max-width: 50rem;
`

export default Layout
import React, {Fragment} from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <Fragment>
        <HeaderStyle>
            <div><Link className='logo' to='/'>Todo List</Link></div>
            <nav>
                <ul>
                    <li><NavLink to='/all-todos'>All Todos</NavLink></li>
                    <li><NavLink to='/new-todos'>New Todos</NavLink></li>
                </ul>
            </nav>
        </HeaderStyle>
    </Fragment>
  )
}

const HeaderStyle = styled.header`
    position: sticky;
    z-index: 1;
    top: 0px;
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    background-color: black;
    box-shadow: 0px 0px 8px black;

    & div {
        font-size: 2rem;
        font-weight: 700;
    }

    & ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    & li {
        font-size: 1.2rem;
    }

    & a {
        color: white;
        text-decoration: none;
    }

    & .logo {
        color: #ff000094;
    }

    & .active {
        color: #ff000094;
    }

    & a:hover {
       font-weight: 600;
       transition: 300ms;
    }
`

export default Header
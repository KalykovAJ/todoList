import React from 'react'
import styled from 'styled-components'

const Button = ({ children, type, onClick, id, className }) => {
	return (
		<ButtonStyle className={className} id={id} type={type} onClick={onClick}>
			{children}
		</ButtonStyle>
	)
}

const ButtonStyle = styled.button`
	color: black;
	background-color: white;
	padding: 10px 30px;
	border: none;
	font-weight: 600;
	border-radius: 5px;
	box-shadow: 0px 0px 4px black;
`

export default Button

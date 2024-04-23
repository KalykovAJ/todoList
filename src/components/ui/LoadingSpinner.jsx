import React from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingSpinner = () => {
	return (
		<StyleSpinner>
			<div></div>
		</StyleSpinner>
	)
}

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const StyleSpinner = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
  top: 0;
  left: 0;
	z-index: 5;
  background-color: white;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
	&& div {
		width: 60px;
		height: 60px;

		&:after {
			content: '';
			display: block;
			width: 50px;
			height: 50px;
			margin: 8px;
			border-radius: 50%;
			border: 5px solid black;
			border-color: black transparent black transparent;
			animation: ${spinner} 1s linear infinite;
		}
	}
`

export default LoadingSpinner

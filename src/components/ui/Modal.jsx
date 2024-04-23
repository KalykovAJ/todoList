import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import Button from './Button'
import styled from 'styled-components'

const Modal = ({ window, onConfrim, onClick }) => {
	return (
		<Fragment>
			{createPortal(
				<ModalStyle>
					<div className='content'>
						<div className='title'>{window.title}</div>
						<div className='btnBox'>
							<Button onClick={onConfrim} className='modalBtn'>
								No
							</Button>
							<Button onClick={onClick} className='modalBtn'>
								Yes
							</Button>
						</div>
					</div>
				</ModalStyle>,
				document.getElementById('modal-root')
			)}
		</Fragment>
	)
}

const ModalStyle = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 2s;
	background-color: rgba(0, 0, 0, 0.7);

	& .content {
		display: flex;
		flex-direction: column;
		gap: 30px;
		background-color: white;
		border-radius: 10px;
		transition: 2s;
		margin: 0 10px;
	}

	& .title {
		background-color: black;
		color: #ff000094;
		font-size: 1.2rem;
		text-align: center;
		padding: 20px;
		border-radius: 10px 10px 0 0;
	}

	& .btnBox {
		padding: 20px;
		display: flex;
		justify-content: space-around;
	}

	& .modalBtn {
		color: #ff000094;
		background-color: black;
	}
`

export default Modal

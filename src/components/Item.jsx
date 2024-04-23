import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import Modal from './ui/Modal'
import styled from 'styled-components'
import { checkedTodo, deleteTodo } from '../store/todoSlice'

const Item = props => {
	const dispatch = useDispatch()
	const { id, text, date, checked } = props.todo
	const [window, setWindow] = useState(null)

	const openModalHandler = () => {
		setWindow({
			title: 'Вы точно хотите удалить?!',
		})
	}

	const closeModalHandler = () => {
		setWindow(false)
	}

	const removeTodoHandler = () => {
		dispatch(deleteTodo(id))
	}

	const completedTodoHandler = () => {
		dispatch(checkedTodo(id))
	}

	return (
		<Fragment>
			{window && (
				<Modal
					id={id}
					window={window}
					onConfrim={closeModalHandler}
					onClick={removeTodoHandler}
				/>
			)}
			<LiStyle checked={checked}>
				<p>{text}</p>

				<div className='box'>
					<span>{date}</span>
					<div id='btnBox'>
						<button id='checkedBtn' onClick={completedTodoHandler}>
							Checked
						</button>
						<button onClick={openModalHandler}>Delete</button>
					</div>
				</div>
			</LiStyle>
		</Fragment>
	)
}

const LiStyle = styled.li`
	display: flex;
	gap: 10px 20px;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	color: ${({ checked }) => (checked ? '#02ff02' : 'black')};
	list-style: none;
	width: 85%;
	box-shadow: 1px 1px 4px ${({ checked }) => (checked ? '#02ff02' : 'black')};
	padding: 5px 10px;
	border-radius: 5px;

	@media (max-width: 500px) {
		flex-wrap: wrap;
	}

	& .box {
		display: flex;
		align-items: center;
		gap: 5px 20px;
	}

	&:not(:hover) {
		transform: scale(1, 1);
		transition: 200ms;
	}

	&:hover {
		box-shadow: 1px 1px 6px ${({ checked }) => (checked ? '#02ff02' : 'black')};
		transition: 200ms;
		transform: scale(1.1, 1.2);
	}

	& p {
		max-width: 400px;
		word-break: break-all;
	}

	& span {
		white-space: nowrap;
	}

	& #btnBox {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px 10px;
	}

	& button {
		color: ${({ checked }) => (checked ? '#803d3d' : 'black')};
		background-color: white;
		border: none;
		text-shadow: 1px 1px 2px ${({ checked }) => (checked ? '#803d3d' : 'black')};
		font-weight: 500;
	}

	& button:hover {
		color: #803d3d;
		background-color: white;
		text-shadow: 1px 1px 4px red;
		font-weight: 600;
		cursor: pointer;
	}

	& button:active {
		color: #803d3d;
		background-color: white;
		text-shadow: 1px 1px 4px red;
		font-weight: 600;
		cursor: pointer;
	}

	& #checkedBtn {
		color: ${({ checked }) => (checked ? 'green' : 'black')};
		text-shadow: 1px 1px 2px ${({ checked }) => (checked ? 'green' : 'black')};
	}

	& #checkedBtn:hover {
		color: green;
		text-shadow: 1px 1px 4px green;
	}

	& #checkedBtn:active {
		color: green;
		text-shadow: 1px 1px 4px green;
	}

	@media (max-width: 700px) and (min-width: 500px) {
		& .box {
			flex-wrap: wrap;
		}
	}
`
export default Item

import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { postTodo } from '../store/todoSlice'
import Button from './ui/Button'
import LoadingSpinner from './ui/LoadingSpinner'

const Form = ({ isLoading }) => {
	const dispatch = useDispatch()

	const [input, setInput] = useState('')
	const [date, setDate] = useState('')

	const item = {
		text: input,
		date: date,
		checked: false,
		id: Math.random().toString(36),
	}

	const inputChangeHandler = event => {
		setInput(event.target.value)
	}

	const dateChangeHandler = event => {
		setDate(event.target.value)
	}

	const submitHandler = event => {
		event.preventDefault()
		if (input.trim().length === 0) {
			return
		} else {
			dispatch(postTodo(item))
		}
		setInput('')
		setDate('')
	}

	return (
		<Fragment>
			<StyleDiv>
				<form onSubmit={submitHandler}>
					{isLoading && (
						<div className='loading'>
							<LoadingSpinner />
						</div>
					)}
					<input
						value={input}
						onChange={inputChangeHandler}
						type='text'
						placeholder='Text'
					/>
					<input
						value={date}
						onChange={dateChangeHandler}
						type='date'
					/>
					<Button id="formBtn">Add Todo</Button>
				</form>
			</StyleDiv>
		</Fragment>
	)
}

const StyleDiv = styled.div`
	padding: 20px;

	& form {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}

	&& input {
		background-color: white;
		border: none;
		outline: none;
		width: 100%;
		color: black;
		border-radius: 5px;
		padding: 10px 10px;
		box-shadow: 0 0 3px black;
	}

	&& input:hover {
		box-shadow: 0px 0px 8px black;
		transition: 300ms;
	}

	&& input:not(:hover) {
		transition: 300ms;
	}

	&& input::placeholder {
		letter-spacing: 5px;
	}

	&& #formBtn {
		padding: 10px 100px;
	}

	&& #formBtn:hover {
		background-color: black;
		color: white;
		transition: 500ms;
	}

	&& #formBtn:not(:hover) {
		transition: 500ms;
	}
`

export default Form

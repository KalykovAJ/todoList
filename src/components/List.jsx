import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import Text from './ui/Text'
import { useSelector } from 'react-redux'
import { PEND } from '../utils/constants'
import LoadingSpinner from './ui/LoadingSpinner'

const List = () => {
	const { todos, status } = useSelector(state => state.todo)
	return (
		<>
			{status === PEND && <LoadingSpinner />}
			<UlStyle>
				<Text>Let's do it!</Text>
				{todos.map(todo => (
					<Item key={todo.id} todo={todo} />
				))}
			</UlStyle>
		</>
	)
}

const UlStyle = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
`

export default List

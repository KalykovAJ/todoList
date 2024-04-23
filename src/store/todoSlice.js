import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
	BASE_URL,
	ERR,
	FULFILLED,
	LOAD,
	PEND,
	RESOLVED,
} from '../utils/constants'

export const postTodo = createAsyncThunk(
	'todo/postTodo',
	async function (todo, { rejectWithValue }) {
		try {
			const response = await fetch(`${BASE_URL}/todos.json`, {
				method: 'POST',
				headers: {
					'Content-Type': 'Application/json',
				},
				body: JSON.stringify(todo),
			})
			if (!response.ok) {
				throw new Error('Server not found')
			}
			const data = await response.json()
			console.log(data.name)
			return data.name
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const getTodo = createAsyncThunk(
	'todo/getTodo',
	async function (_, { rejectWithValue, dispatch }) {
		const transformedData = []
		try {
			const response = await fetch(`${BASE_URL}/todos.json`)
			const data = await response.json()
			for (const key in data) {
				transformedData.unshift({
					id: key,
					text: data[key].text,
					date: data[key].date,
					checked: data[key].checked,
				})
			}

			if (!response.ok) {
				throw new Error('Server error')
			}
		} catch (error) {
			return rejectWithValue(error.message)
		}
		dispatch(addTodo(transformedData))
		return transformedData
	}
)

export const deleteTodo = createAsyncThunk(
	'todo/deleteTodo',
	async function (id, { rejectWithValue, dispatch }) {
		try {
			const response = await fetch(`${BASE_URL}/todos/${id}.json`, {
				method: 'DELETE',
			})
			dispatch(removeTodo(id))
			if (!response.ok) {
				throw new Error('The server is not responding')
			}
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const checkedTodo = createAsyncThunk(
	'todo/checkedTodo',
	async function (id, { rejectWithValue, dispatch, getState }) {
		try {
			const state = getState()
			const todo = state.todo.todos.find(todo => todo.id === id)
			const response = await fetch(`${BASE_URL}/todos/${id}.json`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'Application/json',
				},
				body: JSON.stringify({
					checked: !todo.checked,
				}),
			})
			if (!response.ok) {
				throw new Error('The server is not responding')
			}
			dispatch(completedTodo(id))
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const initialState = {
	todos: [],
	status: null,
	error: null,
	todoId: [],
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo(state, action) {
			state.todos = action.payload
		},

		removeTodo(state, action) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload)
		},

		completedTodo(state, action) {
			const checkedItem = state.todos.find(todo => todo.id === action.payload)
			checkedItem.checked = !checkedItem.checked
		},
	},

	extraReducers: builder => {
		builder.addCase(postTodo.pending, state => {
			state.status = LOAD
		})
		builder.addCase(postTodo.fulfilled, (state, action) => {
			state.status = FULFILLED
			state.todoId.push(action.payload)
		})
		builder.addCase(postTodo.rejected, (state, action) => {
			state.status = ERR
			state.error = action.payload
		})
		//////////////////////////////
		builder.addCase(getTodo.pending, state => {
			state.status = LOAD
		})
		builder.addCase(getTodo.fulfilled, state => {
			state.status = FULFILLED
		})
		builder.addCase(getTodo.rejected, (state, action) => {
			state.status = ERR
			state.error = action.payload
		})
		//////////////////////////////
		builder.addCase(deleteTodo.pending, state => {
			state.status = PEND
		})
		builder.addCase(deleteTodo.fulfilled, state => {
			state.status = RESOLVED
		})
		builder.addCase(deleteTodo.rejected, (state, action) => {
			state.status = ERR
			state.error = action.payload
		})
		//////////////////////////////
		builder.addCase(checkedTodo.pending, state => {
			state.status = PEND
		})
		builder.addCase(checkedTodo.fulfilled, state => {
			state.status = RESOLVED
		})
		builder.addCase(checkedTodo.rejected, (state, action) => {
			state.status = ERR
			state.error = action.payload
		})
	},
})

export const { addTodo, removeTodo, completedTodo } = todoSlice.actions

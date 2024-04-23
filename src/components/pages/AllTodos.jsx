import React, {Fragment, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from '../../store/todoSlice';
import List from '../List'
import { LOAD } from '../../utils/constants';
import Text from '../ui/Text';
import LoadingSpinner from '../ui/LoadingSpinner';

const AllTodos = () => {
  const dispatch = useDispatch()
  const {todos, status, error} = useSelector((state) => state.todo)
    
  useEffect(() => {
      dispatch(getTodo()) 
  }, [dispatch])

  if (status === LOAD) {
    return <LoadingSpinner/>
  }
  if (error) {
    return <Text>{error}</Text>
  }
  if (!todos || todos.length === 0) {
    return <Text>No Todos Found</Text>
  }

  return (
    <Fragment>
        <List/>
    </Fragment>
  )
}

export default AllTodos
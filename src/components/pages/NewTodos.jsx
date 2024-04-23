import React, {Fragment} from 'react'
import Form from '../Form'
import { useSelector } from 'react-redux'
import { LOAD } from '../../utils/constants'
import Text from '../ui/Text'
import Card from '../ui/Card'

const NewTodos = () => {
  const {status, error} = useSelector(state => state.todo)



  return (
    <Fragment>
        {error && <Text>{error}</Text>}
        <Card className='centered'>
            <Form isLoading={status === LOAD}/>
        </Card>
    </Fragment>
  )
}

export default NewTodos
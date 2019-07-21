import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { StoreState } from '../../reducers/types'
import { deleteTodo, fetchTodos, Todo } from '../../actions'

const App: React.FC = (): JSX.Element => {

  const [ fetching, setFetching ] = useState<boolean>(false)

  const todos: Todo[] = useSelector(({ todos }: StoreState) => todos)

  const dispatch = useDispatch()

  const onButtonClick = (): void => {
    dispatch(fetchTodos())
    setFetching(true)
  }

  useEffect((): void => {
    if (todos.length > 0) {
      setFetching(false)
    }
  }, [ todos ])

  return (
    <div>
      { fetching ? <h2>Loading...</h2> : '' }
      <button onClick={ onButtonClick }>
        Fetch
      </button>
      { todos.map(({ id, title }: Todo) =>
        <div key={ id }
             onClick={ () => dispatch(deleteTodo(id)) }
        >{ title }</div>
      ) }
    </div>
  )
}

export default App

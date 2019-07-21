import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { StoreState } from '../../reducers/types'
import { fetchTodos } from '../../actions'
import { Todo } from '../../actions/types'

const App: React.FC = (): JSX.Element => {

  const todos: Todo[] = useSelector(({ todos }: StoreState) => todos)

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={ () => dispatch(fetchTodos()) }>Fetch
        Todos
      </button>
      { todos.map(todo => <div key={ todo.id }>{ todo.title }</div>) }
    </div>
  )
}

export default App

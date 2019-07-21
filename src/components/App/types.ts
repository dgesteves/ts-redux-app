import { Todo } from '../../actions/types'

export interface AppProps {
  todos: Todo[]

  fetchTodos (): any
}

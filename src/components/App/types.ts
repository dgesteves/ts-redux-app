import { Todo } from '../../actions'

export interface AppProps {
  todos: Todo[]

  fetchTodos (): any
}

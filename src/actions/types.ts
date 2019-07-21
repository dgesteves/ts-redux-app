export enum ActionTypes {
  fetchTodos
}

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos
  payload: Todo[]
}

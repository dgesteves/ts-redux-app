export enum ActionTypes {
  fetchTodos,
  deleteTodo
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

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo
  payload: number
}

export type Action = FetchTodosAction | DeleteTodoAction

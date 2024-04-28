export interface ITodoDataResponse {
  completed: boolean
  id: number
  title: string
  userId: number
}

export interface IGetTodoParams {
  id: number
}

export interface IUpdateTodosParams {
  id: number
  title: string
}

export interface ICreateTodoParams {
  title: string
}

export interface IDeleteTodoParams {
  id: number
}

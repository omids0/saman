export interface ITodoData {
  completed: boolean
  id: number
  title: string
  userId: number
}

export interface IGetTodo {
  id: number
}

export interface IUpdateTodos {
  id: number
  title: string
}

export interface ICreateTodo {
  title: string
}

export interface IDeleteTodo {
  id: number
}

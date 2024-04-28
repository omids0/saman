import type { ITodoDataResponse } from '../../api/todos/interfaces'

export type TProps = {
  todo?: ITodoDataResponse
  onSubmit: (data: ITodoDataResponse) => void
}

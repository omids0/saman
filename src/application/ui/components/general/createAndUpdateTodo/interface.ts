import type { ITodoDataResponse } from '../../../../entities/todo'

export type TProps = {
  todo?: ITodoDataResponse
  onSubmit: (data: ITodoDataResponse) => void
}

import type { ITodoDataResponse } from '../../../../domain/entities/todo'

export type TProps = {
  todo?: ITodoDataResponse
  onSubmit: (data: ITodoDataResponse) => void
}

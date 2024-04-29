import { useQuery } from 'react-query'

import { getTodoUseCase } from '../../useCases/getTodoUseCase'

export const useFetchTodo = ({ id }) => {
  const { data, isLoading, error, refetch } = useQuery('todo', () => getTodoUseCase({ id }))

  return { data, isLoading, error, refetch }
}

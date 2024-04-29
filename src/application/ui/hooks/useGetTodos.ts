import { useQuery } from 'react-query'

import { getTodosUseCase } from '../../useCases/getTodosUseCase'

export const useFetchTodos = () => {
  const { data, isLoading, error, refetch } = useQuery('todos', getTodosUseCase)

  return { data, isLoading, error, refetch }
}

import { useQuery } from 'react-query'

import { getTodos } from '../api/todos'

export const useFetchTodos = () => {
  const { data, isLoading, error, refetch } = useQuery('todos', getTodos)

  return { data, isLoading, error, refetch }
}

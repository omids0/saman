import { useQuery } from 'react-query'

import { getTodo } from '../api/todos'

export const useFetchTodo = ({ id }) => {
  const { data, isLoading, error, refetch } = useQuery('todo', () => getTodo({ id }))

  return { data, isLoading, error, refetch }
}

import { useQuery } from 'react-query'

import { getTodo } from '../../infrastructure/services/getTodo'

export const useGetTodo = ({ id }) => {
  const { data, isLoading, error, refetch } = useQuery('todo', () => getTodo({ id }))

  return { data, isLoading, error, refetch }
}

import type { FC } from 'react'

import { useFetchTodos } from '../hooks/useGetTodos'

const TodosList: FC = () => {
  const { data, isLoading, error } = useFetchTodos()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong!</div>
  }

  return <div>{data?.length}</div>
}

export default TodosList

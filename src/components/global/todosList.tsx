import type { FC } from 'react'

import Loading from './loading'
import SomeThingWrong from './someThingWrong'
import Todo from './todo'
import { useFetchTodos } from '../../hooks/useGetTodos'

const TodosList: FC = () => {
  const { data, isLoading, error } = useFetchTodos()

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <SomeThingWrong />
  }

  return (
    <div>
      {data?.map(item => (
        <Todo key={item.id} id={item.id} title={item.title} />
      ))}
    </div>
  )
}

export default TodosList

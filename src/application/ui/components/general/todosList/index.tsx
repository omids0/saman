import type { FC } from 'react'

import { useFetchTodos } from '../../../hooks/useGetTodos'
import Loading from '../loading'
import SomeThingWrong from '../someThingWentWrong'
import Todo from '../todoItem'

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
      {data &&
        data.map(item => (
          <Todo key={item.id} id={item.id} title={item.title} completed={item.completed} />
        ))}
    </div>
  )
}

export default TodosList

import type { FC } from 'react'

import { useNavigate } from 'react-router-dom'
import { useFetchTodos } from '../hooks/useGetTodos'

const TodosList: FC = () => {
  const { data, isLoading, error } = useFetchTodos()

  const navigate = useNavigate()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong!</div>
  }

  return (
    <div>
      {data?.map(item => (
        <div
          className="mb-2 border p-2 shadow-md rounded-md min-h-[8rem] flex flex-col justify-between"
          key={item.id}
        >
          <p>{item.title}</p>
          <div className="flex justify-end gap-2">
            <button
              className="border rounded px-1 border-blue-500 text-blue-500"
              onClick={() => navigate('/edit')}
            >
              Edit
            </button>
            <button className=" rounded px-1 bg-red-500 text-white">Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodosList

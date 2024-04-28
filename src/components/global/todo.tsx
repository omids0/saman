import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import type { TProps } from '../../types/components/global/todo'

const Todo: FC<TProps> = ({ id, title, completed }) => {
  const navigate = useNavigate()

  return (
    <div
      className="mb-2 border p-2 shadow-md rounded-md min-h-[8rem] flex flex-col justify-between"
      key={id}
    >
      <div className="flex gap-2">
        <input type="checkbox" checked={completed} />
        <p className="font-semibold text-md text-gray-800">{title}</p>
      </div>
      <div className="flex justify-end gap-2">
        <button
          className="border rounded px-1 border-blue-500 text-blue-500"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit
        </button>
        <button className=" rounded px-1 bg-red-500 text-white">Delete</button>
      </div>
    </div>
  )
}

export default Todo

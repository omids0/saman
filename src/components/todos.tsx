import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import TodosList from './todosList'

const Todos: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col mx-auto md:w-[50rem] p-2">
      <div className="md:max-h-[92vh] overflow-scroll overflow-x-hidden p-4 customScroll">
        <TodosList />
      </div>
      <button
        className="bg-orange-500 p-2 rounded-md my-2 sticky bottom-1"
        onClick={() => navigate('/create')}
      >
        Add New Todo
      </button>
    </div>
  )
}

export default Todos

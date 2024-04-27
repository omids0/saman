import type { FC } from 'react'

import TodosList from './todosList'

const Todos: FC = () => {
  return (
    <div className="flex flex-col mx-auto md:w-[50rem]">
      <div className="md:h-[90vh] overflow-scroll overflow-x-hidden p-4">
        <TodosList />
      </div>
      <button className="bg-orange-500 fixed bottom-3 right-2 left-2 p-2 rounded-md">
        Add New Todo
      </button>
    </div>
  )
}

export default Todos

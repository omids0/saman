import { useEffect, type FC } from 'react'
import { useForm } from 'react-hook-form'

import type { ITodoDataResponse } from '../../types/api/todos/interfaces'
import type { TProps } from '../../types/components/global/createAndUpdateTodo'

const CreateAndUpdateTodo: FC<TProps> = ({ todo, onSubmit }) => {
  const { handleSubmit, register, watch, reset, setValue } = useForm<ITodoDataResponse>({
    defaultValues: {
      title: '',
      completed: false
    }
  })

  useEffect(() => {
    reset({
      ...todo
    })
  }, [todo])

  const handleCompletedTodo = () => setValue('completed', !watch('completed'))

  const handlerSubmit = data => onSubmit(data)

  return (
    <form
      onSubmit={handleSubmit(handlerSubmit)}
      className="border flex flex-col w-[20rem] h-[20rem] p-4 items-center justify-center gap-[5rem] rounded-md"
    >
      <input
        {...register('title')}
        placeholder="Write your ToDo here in brief..."
        className="bg-gray-100 p-2 w-full rounded-md"
      />
      {todo && (
        <div className="flex gap-2">
          <p>Did you completed this ToDo?</p>
          <input type="checkbox" checked={watch('completed')} onChange={handleCompletedTodo} />
        </div>
      )}
      {todo ? (
        <button
          type="submit"
          className="border w-full p-2 border-yellow-500 rounded-md text-yellow-500 font-semibold"
        >
          Edit ToDo
        </button>
      ) : (
        <button
          type="submit"
          className="border w-full p-2 border-blue-500 rounded-md text-blue-500 font-semibold"
        >
          Add ToDo
        </button>
      )}
    </form>
  )
}

export default CreateAndUpdateTodo

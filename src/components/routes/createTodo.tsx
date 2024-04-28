import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCreateTodo } from '../../hooks/useCreateTodo'
import CreateAndUpdateTodo from '../global/createAndEditTodo'
import Loading from '../global/loading'
import SomeThingWrong from '../global/someThingWrong'

const CreateTodo: FC = () => {
  const navigate = useNavigate()

  const { mutate, isLoading, error } = useCreateTodo()

  const handleSubmit = data =>
    mutate(
      { ...data },
      {
        onSuccess: () => navigate('/')
      }
    )

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <SomeThingWrong />
  }

  return (
    <div className="flex flex-col min-h-[90vh] w-full items-center justify-center">
      <CreateAndUpdateTodo onSubmit={handleSubmit} />
    </div>
  )
}

export default CreateTodo

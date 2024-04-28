import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCreateTodo } from '../../hooks/useCreateTodo'
import CreateAndUpdateTodo from '../general/createAndUpdateTodo'
import Loading from '../general/loading'
import SomeThingWrong from '../general/someThingWrong'

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

import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCreateTodo } from '../../hooks/useCreateTodo'
import CreateAndUpdateTodo from '../global/createAndEditTodo'
import Loading from '../global/loading'

const CreateTodo: FC = () => {
  const navigate = useNavigate()

  const { mutate, isLoading, isSuccess } = useCreateTodo()

  const handleSubmit = data => mutate({ title: data.title })

  if (isLoading) {
    return <Loading />
  }

  if (isSuccess) {
    navigate('/')
  }

  return (
    <div className="flex flex-col min-h-[90vh] w-full items-center justify-center">
      <CreateAndUpdateTodo onSubmit={handleSubmit} />
    </div>
  )
}

export default CreateTodo

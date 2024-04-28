import type { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useFetchTodo } from '../../hooks/useGetTodo'
import { useUpdateTodo } from '../../hooks/useUpdateTodo'
import CreateAndUpdateTodo from '../global/createAndEditTodo'
import Loading from '../global/loading'
import SomeThingWrong from '../global/someThingWrong'

const EditTodo: FC = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const { data, isLoading, error } = useFetchTodo({ id })

  const { isLoading: isLoadingUpdate, error: errorUpdate, isSuccess, mutate } = useUpdateTodo()

  const handleSubmit = data => mutate({ title: data.title, id: data.id })

  if (isLoading || isLoadingUpdate) {
    return <Loading />
  }

  if (error || errorUpdate) {
    return <SomeThingWrong />
  }

  if (isSuccess) {
    navigate('/')
  }

  return (
    <div className="flex flex-col min-h-[90vh] w-full items-center justify-center">
      {data && <CreateAndUpdateTodo todo={data} onSubmit={handleSubmit} />}
    </div>
  )
}

export default EditTodo

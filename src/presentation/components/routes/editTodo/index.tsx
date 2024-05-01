import type { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetTodo } from '../../../../infrastructure/hooks/useGetTodo'
import { useUpdateTodo } from '../../../../infrastructure/hooks/useUpdateTodo'
import CreateAndUpdateTodo from '../../general/createAndUpdateTodo'
import Loading from '../../general/loading'
import SomeThingWrong from '../../general/someThingWentWrong'

const EditTodo: FC = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const { data, isLoading, error } = useGetTodo({ id })

  const { isLoading: isLoadingUpdate, error: errorUpdate, mutate } = useUpdateTodo()

  const handleSubmit = data =>
    mutate(
      { ...data },
      {
        onSuccess: () => navigate('/')
      }
    )

  if (isLoading || isLoadingUpdate) {
    return <Loading />
  }

  if (error || errorUpdate) {
    return <SomeThingWrong />
  }

  return (
    <div className="flex flex-col min-h-[90vh] w-full items-center justify-center">
      {data && <CreateAndUpdateTodo todo={data} onSubmit={handleSubmit} />}
    </div>
  )
}

export default EditTodo

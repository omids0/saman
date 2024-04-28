import { useState, type FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Modal from './modal'
import { useDeleteTodo } from '../../hooks/useDeleteTodo'
import type { TProps } from '../../types/components/global/todo'

const Todo: FC<TProps> = ({ id, title, completed }) => {
  const navigate = useNavigate()

  const [openModal, setOpenModal] = useState(false)

  const { mutate } = useDeleteTodo()

  const handleCloseModal = () => setOpenModal(false)

  const handleDeleteTodo = () =>
    mutate(
      { id },
      {
        onSuccess: handleCloseModal
      }
    )

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
        <button className=" rounded px-1 bg-red-500 text-white" onClick={() => setOpenModal(true)}>
          Delete
        </button>
      </div>

      <Modal visible={!!openModal} closeModal={handleCloseModal} hasCloseButton>
        <div className="flex flex-col items-center w-[19rem] justify-center">
          <span className="font-bold">Are you sure about deleting this ToDo?!</span>
          <span>{`"${title}"`}</span>
        </div>
        <div className="flex justify-center gap-2">
          <button
            className="border border-red-500 text-red-500 px-2 rounded-md"
            onClick={handleDeleteTodo}
          >
            Confirm
          </button>
          <button className="text-white px-2 rounded-md bg-red-500" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Todo

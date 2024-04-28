import type { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CreateTodo from '../components/createTodo'
import EditTodo from '../components/editTodo'
import Todos from '../components/todos'

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/edit" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

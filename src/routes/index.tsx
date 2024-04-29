import type { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CreateTodo from '../application/ui/components/routes/createTodo'
import EditTodo from '../application/ui/components/routes/editTodo'
import Todos from '../application/ui/components/routes/todos'

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

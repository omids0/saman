import { QueryClient, QueryClientProvider } from 'react-query'

import TodosList from './components/todosList'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <TodosList />
    </QueryClientProvider>
  )
}

export default App

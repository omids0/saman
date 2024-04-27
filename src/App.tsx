import { QueryClient, QueryClientProvider } from 'react-query'

import Todos from './components/todos'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

export default App

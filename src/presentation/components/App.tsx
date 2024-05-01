import { QueryClient, QueryClientProvider } from 'react-query'

import AppRouter from '../appRoutes'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}

export default App

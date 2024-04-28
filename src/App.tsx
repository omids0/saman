import { QueryClient, QueryClientProvider } from 'react-query'

import AppRouter from './routing/appRouter'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}

export default App

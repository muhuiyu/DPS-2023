import { QueryClient, QueryClientProvider } from 'react-query'
import PasswordPage from './screens/PasswordPage'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PasswordPage />
    </QueryClientProvider>
  )
}

export default App

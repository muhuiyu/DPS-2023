import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import PasswordPage from "./PasswordPage";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PasswordPage />
    </QueryClientProvider>
  );
}

export default App;

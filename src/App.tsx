import { Routes } from './app/Routes';
import { QueryProvider } from './app/queryProvider';

function App() {
  return (
    <QueryProvider>
      <Routes />
    </QueryProvider>
  );
}

export default App;

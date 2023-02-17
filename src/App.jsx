import TopButtons from './components/TopButtons';
import MainUI from './components/MainUI';
import { PassProvider } from './components/contexts/PassContext';

function App() {
  return (
    <PassProvider>
      <header>
        <TopButtons />
        <br />
      </header>
      <MainUI />
    </PassProvider>
  )
}

export default App

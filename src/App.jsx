import Logo from './components/Logo';
import TopButtons from './components/TopButtons';
import MainUI from './components/MainUI';
import { PassProvider } from './components/contexts/PassContext';

function App() {
  return (
    <PassProvider>
      <header>
        <Logo />
        <TopButtons />
      </header>
      <MainUI />
    </PassProvider>
  )
}

export default App

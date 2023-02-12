import Logo from './components/Logo';
import TopButtons from './components/TopButtons';
import MainUI from './components/MainUI';
import { PassProvider } from './components/contexts/PassContext';

function App() {
  return (
    <main className="Interface">
      <Logo />
      <PassProvider>
        <TopButtons />
        <MainUI />
      </PassProvider>
    </main>
  )
}

export default App

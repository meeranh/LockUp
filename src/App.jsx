import TopButtons from './components/TopButtons';
import MainUI from './components/MainUI';
import RequestMasterPasswordUI from './components/dataInputUI/RequestMasterPasswordUI';
import { PassProvider } from './components/contexts/PassContext';

function App() {
  return (
    <PassProvider>
      <RequestMasterPasswordUI />
      <header>
        <TopButtons />
        <br />
      </header>
      <MainUI />
    </PassProvider>
  )
}

export default App

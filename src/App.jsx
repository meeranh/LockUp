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
      <div className="md:hidden">
        <p className="warning text-center font-bold text-white text-sm bg-gray-800 shadow-md rounded pt-3 pb-4 mb-4">
          Use a laptop or a desktop for a better experience
        </p>
      </div>
      <MainUI />
    </PassProvider >
  )
}

export default App

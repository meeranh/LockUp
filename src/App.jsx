import Logo from './components/Logo';
import ImportExportBtn from './components/ImportExportBtn';
import MainUI from './components/MainUI';
import { PassProvider } from './components/contexts/PassContext';

function App() {
  return (
    <main className="Interface">
      <Logo />
      <PassProvider>
        <ImportExportBtn />
        <MainUI />
      </PassProvider>
    </main>
  )
}

export default App

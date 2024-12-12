
import './App.css';
import PersonaList from './Pages/PersonaList'; 
import { Route, Routes,HashRouter } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
    <Routes>
      <Route exact path="/" element={<PersonaList/>} />
    </Routes>
  </HashRouter>
  );
}

export default App;

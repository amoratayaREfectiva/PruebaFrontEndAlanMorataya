import logo from './logo.svg';
import './App.css';
import UserList from './Pages/UserList'; 
import { BrowserRouter as Router, Route, Routes,HashRouter } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
    <Routes>
      <Route exact path="/" element={<UserList/>} />
    </Routes>
  </HashRouter>
  );
}

export default App;

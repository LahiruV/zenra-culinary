import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Chat from './Pages/Main/Chat';

function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/cookHelper" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;

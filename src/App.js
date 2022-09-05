
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Pages/Navbar';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { HomePage } from './Components/Pages/HomePage';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={< HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

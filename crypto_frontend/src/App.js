import './App.css';
import SideBar from './components/SideBar'
import Header from './components/Header'
import Home from './pages/Home'
import Bnb from './pages/Bnb'
import Matic from './pages/Matic'
import Atom from './pages/Atom'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <SideBar />
       <Header />
       <div className="app-wrapper  flex-column flex-row-fluid " id="kt_app_wrapper">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Bnb' element={<Bnb />} />
          <Route path='/Matic' element={<Matic />} />
          <Route path='/Atom' element={<Atom />} />
        </Routes>
       </div>
    </div>
  );
}

export default App;

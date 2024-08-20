import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PHome from './pages/pageHome';
import PLogin from './pages/pageLogin';
import PShopCar from './components/compShopCar';

function App() {
  return (
    <div className="container">
      <header className='lojaHead'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PLogin/>}></Route>
            <Route path='/home' element={<PHome/>}></Route>
            <Route path='/shopcar' element={<PShopCar/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

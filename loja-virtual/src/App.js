import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/compHeader';
import Login from './components/compLogin';
import ShopCar from './components/compShopCar';

function App() {
  return (
    <div className="container">
      <header className='lojaHead'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/shopcar' element={<ShopCar/>}></Route>
          </Routes>
        </BrowserRouter>
        <div className="container paineis">
          <section>
            
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;

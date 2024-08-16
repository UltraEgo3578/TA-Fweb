import './App.css';
import Header from './components/compHeader';
import Login from './components/compLogin';
import ShopCar from './components/compShopCar';

function App() {
  return (
    <div className="container">
      <header className='lojaHead'>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/shopcar' element={<ShopCar/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

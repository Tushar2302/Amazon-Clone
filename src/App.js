
import {BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import CartContextProvider from './Component/CartContext';
import Checkout from './Component/Checkout/Checkout';
import DisplayContent from './Component/DisplayContent/DisplayContent';
import PlaceOrder from './Component/HomePage/PlaceOrder/PlaceOrder';
import NavBar from './Component/NavBar/Navigation';
import MainPage from './Component/HomePage/MainPage';
import Payments from './Component/paymentPage/payment'
function App() {
  return (
    <Router>
    <div className='App'>   
      <CartContextProvider>
      <NavBar/>
      <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route exact path='/display' element={<DisplayContent/>} />
      <Route exact path='/order/:id' element={<PlaceOrder/>} />
      <Route exact path='/checkout' element={<Checkout/>} />
      <Route exact path='/payment' element={<Payments/>} />
      </Routes>
      </CartContextProvider>
      
    </div>
    </Router>
  );
}

export default App;

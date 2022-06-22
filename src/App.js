
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './Component/Menu';
import NewArrival from './Component/NewArrival/NewArrival';
// import Carousol from './Component/Carousel/Carousol';
import FeactureProduct from './Component/Feature/FeactureProduct';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';

import Footer from './Component/Footer/Footer'

// import Slidder from './Component/Slidder/Slidder';

import './style.css';
import './responsive.css'
import {Route,Routes,BrowserRouter }from 'react-router-dom'
import Home from './pages/home';
import Cart from './Component/Cart/Cart';
function App() {
  return<>
  <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/FeactureProduct' element={<FeactureProduct/>}/>
      <Route path='/NewArrival' element={<NewArrival/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Cart' element={<Cart/>}/>
       
    </Routes>
    <Footer />
  </BrowserRouter>
    {/* <Carousol /> */}
  
  </>


}

export default App;

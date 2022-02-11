import Header from './component/Header';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart'
import AddProduct from './component/AddProduct';
import ViewProduct from './component/ViewProduct';
import AddCategory from './component/AddCategory';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
      <Routes>
         <Route path="/home" element={<Home/>} exact></Route>
        <Route path="/cart" element={<Cart/>} exact></Route>
        <Route path="/addProduct" element={<AddProduct/>} exact></Route>
        <Route path="/viewProduct" element={<ViewProduct/>} exact></Route>
        <Route path="/AddCategory" element={<AddCategory/>} exact></Route>
      </Routes>
          
       
       
            
        
      </div>
   
    </BrowserRouter>
      
   
  );
}

export default App;

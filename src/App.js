import  "./App.css";
import { Navbar } from "./components/Navbar";
/* import { ItemListContainer } from "./components/ItemListContainer" */
 import {ShopItems} from "./components/ShopItems" ;
import { BrowserRouter, Route,Routes} from "react-router-dom"; 
import  ItemDetailContainer  from "./components/ItemDetailContainer";
import { Nosotros } from "./components/Nosotros";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Carrito } from "./components/carrito";
import { CartProvider } from "./context/CartContext";


function App() { 
 
 

  return (
    <div style={{backgroundColor: '#ede6d3'}}>

    
<CartProvider>


 <BrowserRouter>
          <Navbar/> 
          <Routes>
          <Route path= "/" element={<Home/>}/> 
          <Route path= "/tienda" element={<ShopItems/>}/>
          <Route path= "/carrito" element={<Carrito/>}/>
          <Route path= "/item/:id" element={<ItemDetailContainer/>}/> 
          <Route path= "/tienda/:categoria" element={<ShopItems/>}/> 
          <Route path= "/nosotros" element={<Nosotros/>}/> 
          </Routes>
         <Footer/>
    </BrowserRouter>

</CartProvider>
   

      </div>
  );
}  

export default App;

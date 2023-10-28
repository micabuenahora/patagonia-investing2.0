import  "./App.css";
import { Navbar } from "./components/Navbar";
/* import { ItemListContainer } from "./components/ItemListContainer" */
 import {ShopItems} from "./components/ShopItems" ;
import { BrowserRouter, Route,Routes} from "react-router-dom"; 
import  ItemDetailContainer  from "./components/ItemDetailContainer";
import { Nosotros } from "./components/Nosotros";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";


function header() {


  return (
    <div>

      
    <BrowserRouter>
          <Navbar/> 
          <Routes>
          <Route path= "/" element={<Home/>}/> 
          <Route path= "/ofertaacademica" element={<ShopItems/>}/>
          <Route path= "/item/:id" element={<ItemDetailContainer/>}/> 
          <Route path= "/ofertaacademica/:categoria" element={<ShopItems/>}/> 
          <Route path= "/nosotros" element={<Nosotros/>}/> 
          </Routes>

          {/* <ItemListContainer greeting = {"BIENVENIDOS A PATAGONIA INVESTING!"}>  */}
        {/*  <ShopItems/>   */}
         {/*  <ItemDetailContainer itemId={2}/>  */}
         <Footer/>
             </BrowserRouter>
           
      </div>
   
        
        
       
        
  
          
    
     
  );


}  



  

export default header;

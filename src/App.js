import  "./App.css";
import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer"

function header() {


  return (
    <body>
        <div>
            <Navbar/> 
              <ItemListContainer greeting = {"BIENVENIDOS A PATAGONIA INVESTING!"}/>


        </div>
       

    </body>
          
    
     
  );


}  



  

export default header;

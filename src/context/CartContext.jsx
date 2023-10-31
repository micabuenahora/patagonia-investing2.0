import {createContext} from "react"
import { useState } from "react";
 

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState ([])


    const agregarCarrito =(item, cantidad) => {
      const agregarItem = {...item, cantidad};
      const nuevoCarrito = [...carrito];
      const estaEnCarrito = nuevoCarrito.find((producto) => producto.id === agregarItem.id)
       
  
      if(estaEnCarrito){
          estaEnCarrito.cantidad += cantidad;
         
      }else{
          nuevoCarrito.push(agregarItem); 
      }
       setCarrito(nuevoCarrito);
      console.log(nuevoCarrito)
      }
  
    const cantidadAtCarrito = () => {
      return carrito.reduce((acc, prod ) => acc + prod.cantidad, 0)
    }
  
  
  const precioTotal =() => {
    return carrito.reduce((acc, prod) =>acc + prod.precio * prod.cantidad, 0)
  }
   const vaciarCarrito =() => {
     setCarrito([])
   }
   return (
    <CartContext.Provider value={{carrito, agregarCarrito, cantidadAtCarrito, precioTotal,vaciarCarrito}}>
        {children}
    </CartContext.Provider>
   )
}
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";


export const Carrito =() => {

const {carrito, precioTotal,  vaciarCarrito} = useContext(CartContext);

 const handleVaciar = () => {
 vaciarCarrito();
}

let flechaCarrito ={
    cursor: 'pointer',
    textDecoration : 'none',
    color:'#984CAD',
    fontSize: '40px'
}
 let imgCart ={
    width: '25%',
        padding: '15px',
        borderRadius: '50px',

 }
 let descriptionCart ={
   color: '#823797',
   margin: '50px',
 }
 let estaVacio={
    color: '#823797',
 }
    return(
        <div className="container-carrito"> 
                <Link style={flechaCarrito} to="/ofertaacademica"> ← </Link>
                <h1 className="titulo-principal"> carrito </h1>
                {
                    carrito.map((prod) => (
                        <div className="container-cart" key={prod.id}>
                           
                            <img style={imgCart}src={prod.imagen} alt={prod.titulo}/>
                            <div style={descriptionCart}>
                                <h3>{prod.titulo}</h3>
                                <p> precio unidad: US${prod.precio}</p>
                                <p> precio total: US${prod.precio * prod.cantidad}</p>
                                <p> cantidad: {prod.cantidad}</p>
                                </div>
                        </div>
                       
                    ))
                }
                { carrito.length > 0  ? 
                <>
                     <h2  className="titulo-principal"> total: US${precioTotal()}</h2>
                     <button onClick={handleVaciar}> 🗑️ </button> 
                </> :
                <h2 style={estaVacio}> el carrito esta vacio</h2>
                 
                }
            
           
         </div>
    )
   
}
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"


export function Carritoicon() {
 const {cantidadAtCarrito} = useContext(CartContext)
    let stylesCarrito = {
        display: 'flex',
        alignItems: 'center',
        marginRight: '35px'
        
    }
    let stylesCarritoIcon = {
        cursor: 'pointer',
        boxShadow: 'black',
        textDecoration:'none',
    }
    let stylesCarritoIconSpan = {
       backgroundColor: '#984CAD',
       borderRadius: '100px',
       padding: '3px'
    }
    return(
    
            <div style = {stylesCarrito}>
                 <Link style ={ stylesCarritoIcon} to="/carrito">🛒
                
                  
                    <span  style = { stylesCarritoIconSpan}  >{cantidadAtCarrito()}</span>
                    </Link>
    
            </div>
    
    )
    
    }
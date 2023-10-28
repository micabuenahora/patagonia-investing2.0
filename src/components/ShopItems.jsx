import { useState , useEffect } from "react"
import { ItemList } from "./ItemList";
import { pedirProducto } from "./pedirProducto";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";





export const ShopItems= () => {
    /* guardar datos */
     const [productos, setProductos] = useState([]);
     const [titulo,setTitulo] = useState ("oferta academica")
     const categoria = useParams().categoria;
      
    useEffect(() => { 
        pedirProducto()
            .then((respuesta) => {
                if(categoria) {
                    setProductos(respuesta.filter((prod) => prod.categoria === categoria))
                    setTitulo(categoria);
                }else{
                     setProductos(respuesta);
                }
                   
                })
    }, [categoria])

    /// nav styles
    let stylesNav = {
        backgroundColor: '#ede6d3',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '60px',

    }

    let stylesList = {
        cursor: 'pointer',
        marginLeft: '50px',
        
        textDecoration: 'none',
        color: '#ede6d3',
        filter: 'brightness(1.2)',
        mixBlendMode: 'multiply',
        fontWeight: 'bold',
        backgroundColor: '#984CAD',
        borderRadius: '100px',
        padding: '15px',
        margin:'70px' ,
        
       
        

    }
  
  
return (
    <div>
        
        <nav>
                
                <ul style ={stylesNav}> {/* menu */}
                    <li > <Link style ={stylesList} to="/ofertaacademica/cursos">cursos</Link> </li>      {/*  links en menu */}
                    <li > <Link style ={stylesList} to="/ofertaacademica/clases">clases</Link></li>
                    <li ><Link style ={stylesList} to="/ofertaacademica/tradingroom">trading room</Link></li>
                    <li ><Link style ={stylesList} to="/ofertaacademica/regalos">regalos</Link></li>
            </ul> 
        </nav> 
      <ItemList producto = {productos}  titulo={titulo} />

    </div>
)
}


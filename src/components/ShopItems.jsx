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
       
    }

    let stylesList = {
        cursor: 'pointer',
        padding: '50px',
        marginLeft: '50px',
        

    }
  
  
return (
    <div>
        <nav>
                
                <ul style ={stylesNav}> {/* menu */}
                    <li style ={stylesList}> <Link to="/ofertaacademica/cursos">cursos</Link> </li>      {/*  links en menu */}
                    <li style ={stylesList}> <Link to="/ofertaacademica/clases">clases</Link></li>
                    <li style ={stylesList}><Link to="/ofertaacademica/tradingroom">trading room</Link></li>
                    <li style ={stylesList}><Link to="/ofertaacademica/regalos">regalos</Link></li>
            </ul> 
        </nav> 
      <ItemList producto = {productos}  titulo={titulo} />

    </div>
)
}


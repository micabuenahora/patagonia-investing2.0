import { useState , useEffect } from "react"
import { ItemList } from "./ItemList";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { collection } from "firebase/firestore";
import {database} from "../firebase/data"
import { getDocs } from "firebase/firestore";
import {query, where} from "firebase/firestore"

export const ShopItems= () => {
    /* guardar datos */
     const [productos, setProductos] = useState([]);
     /* const [titulo,setTitulo] = useState ("oferta academica") */
     const categorias = useParams().categoria;
      
    useEffect(() => { 
        const productosRef = collection(database, "productos")
        const que = query(productosRef, where("categoria", "==", categorias))

        getDocs(que)

        .then((resp) => {
            
            setProductos(

                resp.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })
            )
        })
    }, [categorias])

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
                    <li > <Link style ={stylesList} to="/tienda/cursos">cursos</Link> </li>      {/*  links en menu */}
                    <li > <Link style ={stylesList} to="/tienda/clases">clases</Link></li>
                    <li ><Link style ={stylesList} to="/tienda/tradingroom">trading room</Link></li>
                    <li ><Link style ={stylesList} to="/tienda/regalos">regalos</Link></li>
            </ul> 
        </nav> 
      <ItemList producto = {productos}  /* titulo={titulo}  *//>

    </div>
)
}


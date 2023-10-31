import { Link } from "react-router-dom"

export   const ItemList = ({producto, titulo }) => {

    let stylesContainer={
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
    }

        let stylesProducto={
            margin:"100px",
            backgroundColor: '#e0d2bf',
            borderRadius: '15% 15% 50px 50px',
            padding: '15px',
        }
        let stylesImg={
            borderRadius: '30%',
            maxWidth: '25rem'
            

        }

         let stylesTitulo ={
            backgroundColor: '#e0d2bf',
            textAlign: 'center',
           
            
            
           
         }
        let stylesPrecio={
            backgroundColor: '#e0d2bf',
            textAlign: 'center',
            fontWeight: '600',
            fontFamily: 'arial',

        }

        let stylestituloPrincipal={
            textAlign: 'center',
            color: '#984CAD',
            margin: '120px'

        }

        let stylesVerMas={
            textDecoration: 'none',
            color: '#e0d2bf',
            fontFamily: 'arial',
            backgroundColor: '#984CAD',
            padding: '5%', 
            fontSize: '1.2rem',
            
    
        }
        
        let stylesButton ={
            fontFamily: 'arial',
            backgroundColor: '#984CAD',
            borderRadius: '30px',
            cursor: 'pointer',
            height: '3rem',
            width: '30%',
   

        }
        let stylesContainerButton ={
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           
       

        }
    return (
        <div >
             <h1 style ={stylestituloPrincipal}> oferta academica </h1>
             <h1 style ={stylestituloPrincipal}> {titulo} </h1>

            <div style ={stylesContainer}> 
                {
                       producto.map((prod) => {
                        return(
                            <div style={stylesProducto} key={prod.id} > 
                                <img style={stylesImg} src={prod.imagen} alt={prod.titulo}/>
                                 <h1 style={stylesTitulo}> {prod.titulo}</h1>
                               <p style={stylesPrecio}>  US$ {prod.precio}</p>
                               <div style={stylesContainerButton} >  <button style={stylesButton}><Link style={stylesVerMas} to={`/item/${prod.id}`}>ver mas</Link></button></div> 
                            </div>
                        )


                       }) 
                }
            </div>
           
                   
         </div>
  ) 
}


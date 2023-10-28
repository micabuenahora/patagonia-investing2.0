import { Carritoicon } from "./Cartwidget"
import {Link} from 'react-router-dom'
import {Banner} from "./Banner"

export function Navbar () {

        
    /// nav styles
    let stylesNav = {
        backgroundColor: '#ede6d3',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'flex-end',
        height: '550px',
        position: 'relative',
        
        
        
        
       fontSize: 'Poppins, sans-serif'
    }

    let stylesList = {
        cursor: 'pointer',
        margin:'70px' ,
        textDecoration: 'none',
        color: '#ede6d3',
        filter: 'brightness(1.2)',
        mixBlendMode: 'multiply',
        fontWeight: 'bold',
        backgroundColor: '#984CAD',
        borderRadius: '100px',
        padding: '15px',
        
        
   
       
        
       

    }
/*     let stylesLogo={
        zIndex: '1', 
        position: 'absolute',
        left: '0',
        top: '200px',
        filter: 'brightness(1.1)',
        mixBlendMode: 'multiply',
    }
 */
/////lista
    return(
        <header>
                <Banner/>
            <nav>
                    <ul style ={stylesNav}> {/* menu */}
                        <li> <Link style ={stylesList}to="/">home</Link> </li>      {/*  links en menu */}
                        <li> <Link  style ={stylesList} to="/ofertaacademica">oferta academica</Link></li>
                        <li ><Link style ={stylesList} to="/nosotros">nosotros</Link></li>
                        <Carritoicon/>
                </ul> 
            </nav> 

        </header>
        
     )    
        
      
       
       
}


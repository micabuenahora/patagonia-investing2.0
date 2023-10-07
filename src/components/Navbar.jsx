import { Carritoicon } from "./Cartwidget"
import {Link} from 'react-router-dom'

export function Navbar () {

        
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
    let stylesLogo={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

/////lista
    return(
        <header>

            <nav>
                    <Link Link to="/" style ={stylesLogo}> <img src="https://i.postimg.cc/Jz1Tz3dr/Logo-retro-monta-a-turismo-viaje-excursiones-ciclismo-verde-marr-n-2.png" alt="logo patagonia investing"/></Link>
                    <ul style ={stylesNav}> {/* menu */}
                        <li style ={stylesList}> <Link to="/">home</Link> </li>      {/*  links en menu */}
                        <li style ={stylesList}> <Link to="/">oferta academica</Link></li>
                        <li style ={stylesList}><Link to="/nosotros">nosotros</Link></li>
                        <Carritoicon/>
                </ul> 
            </nav> 

        </header>
        
     )    
        
      
       
       
}


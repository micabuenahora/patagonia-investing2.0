import { Carritoicon } from "./Cartwidget"
import {Link} from 'react-router-dom'


export function Navbar () {

        
    /// nav styles
    let stylesNav = {
      
       width: '80%',
       textAlign: 'center',
       display: 'flex',
        justifyContent: 'space-around', 
        flexDirection: 'row',
        alignItems: 'center',
        listStyle: 'none',
        
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

/////lista
    return(
        <header>
               {/*  <div">
               
                </div> */}
            <nav  className="navheader">
                <Link   to="/"><img className="logo-nav"src="https://i.postimg.cc/3N5X2Khg/Dise-o-sin-t-tulo-12-removebg-preview.png" alt="logo"/></Link>       
                    <ul style ={stylesNav}> {/* menu */}
                        <li style={{backgroundColor: 'transparent',}}> <Link style ={stylesList}to="/">home</Link> </li>      {/*  links en menu */}
                        <li style={{backgroundColor: 'transparent',}}> <Link  style ={stylesList} to="/tienda">tienda</Link></li>
                        <li style={{backgroundColor: 'transparent',}}><Link style ={stylesList} to="/nosotros">nosotros</Link></li>
                        <Carritoicon/>
                </ul> 
            </nav> 

        </header>
        
     )    
        
      
       
       
}


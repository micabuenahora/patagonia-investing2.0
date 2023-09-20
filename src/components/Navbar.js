import { Carritoicon } from "./Cartwidget"
export function Navbar () {

    let styleNombre ={
        fontFamily: 'arial',
        display: 'flex',
       justifyContent: ' center',
       backgroundColor: '#74C29A'
      }
        const nombre = <h1>
                           Patagonia
                           investing
                      </h1>

    /// nav styles
    let stylesNav = {
        backgroundColor: '#74C29A',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
    }

    let stylesList = {
        cursor: 'pointer',
        padding: '50px',
        marginLeft: '50px',

    }

/////lista
    return(
        <nav>
            <div style = {styleNombre}> {nombre} </div>
             <ul style ={stylesNav}>
                    <li style ={stylesList}> home</li>
                    <li style ={stylesList}> cursos</li>
                    <li style ={stylesList}>nosotros</li>
                    <Carritoicon/>
            </ul> 

            
         </nav> 
    )
       
       
}


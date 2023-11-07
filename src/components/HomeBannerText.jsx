import { Link } from "react-router-dom"

export const HomeBannerText = () => {

  
   let styleTextoCaja ={
    width: '50%',
    textAlign: 'center',
   
   }
let stylesTitulo={
   color: '#984CAD',
    fontSize: '70px',
    fontWeight: 'bold',
    fontFamily: 'Josefin Sans, sans-serif',
    filter: 'brightness(1.2)',
    mixBlendMode: 'multiply',
    
}
let stylesSubTitulo={
   color: '#984CAD',
    fontSize: '30px',
    fontFamily: 'Poppins, sans-serif',
    filter: 'brightness(1.2)',
    mixBlendMode: 'multiply',
    
}
let stylesButton= {
    width:'30%',
    textAlign: 'center',
    cursor: 'pointer',
    marginLeft:'35%' ,
    marginTop:'20px' ,
   
    textDecoration: 'none',
    filter: 'brightness(1.2)',
    mixBlendMode: 'multiply',
    fontWeight: 'bold',
    backgroundColor: '#984CAD',
    borderRadius: '100px',
    padding: '15px',
   
}

return(
    <div className="styleTextoContainer" >
        <div styles={styleTextoCaja}>
            <h1 style={stylesTitulo}> convertite en un trader rentable </h1>
            <h2 style={stylesSubTitulo}> aprende a invertir en el mercado de futuros americanos aca!</h2>
            <div style ={stylesButton}> <Link  style={{backgroundColor: 'transparent',color: '#ede6d3', textDecoration: 'none'}} to="/tienda">ver cursos</Link></div>
        </div>
             
        </div>
)




}
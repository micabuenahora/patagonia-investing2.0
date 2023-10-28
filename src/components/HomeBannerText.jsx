

export const HomeBannerText = () => {

   /*  let  styleTextoContainer ={
        width: '100vw',
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        jsutifyContent: 'center',
        backgroundImage: 'url("https://i.postimg.cc/T1LgbHfr/Dise-o-sin-t-tulo-5.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    } */
   let styleTextoCaja ={
    
   
    width: '50%',
    textAlign: 'canter'
    
   }
let stylesTitulo={
   color: '#984CAD',
    fontSize: '70px',
    fontWeight: 'bold',
    fontFamily: 'Josefin Sans, sans-serif',
   
}
let stylesSubTitulo={
   color: '#984CAD',
    fontSize: '30px',
    fontFamily: 'Poppins, sans-serif',
    
}
return(
    <div className="styleTextoContainer" >
        <div styles={styleTextoCaja}>
            <h1 style={stylesTitulo}> convertite en un trader rentable </h1>
            <h2 style={stylesSubTitulo}> aprende a invertir en el mercado de futuros americanos aca!</h2>
        </div>
             
        </div>
)




}
export const ItemDetail = ({item}) => {

   /*  estilos del container */
    let stylesContainer = {
        maxWidth: '500px',
        paddingInline: '1.5rem',
        margin: '400px',
        
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#e0d2bf',
        borderRadius: '15% 15% 50px 50px',
        padding: '15px',
    }

     /*  estilos del container */
    let stylesDetalleProducto = {
        paddingBlock: '2rem',
        gap: '2rem',
        
        
    }
    let stylesDetalleFoto = {
        borderRadius: '30%',
        width: '60%',
       
    }
    let stylesTituloDetail={
        fontSize: '2rem',
        backgroundColor: '#e0d2bf',
        fontFamily: 'Poppins, sans-serif',
    }

    let stylesPrecio={
        fontSize: '2rem',
        marginTop: '2rem',
        fontWeight: '600',
        backgroundColor: '#e0d2bf',
        fontFamily: 'Poppins, sans-serif',
    }
    let stylesDescripcion={
        fontSize: '1rem',
        marginTop: '2rem',
        fontWeight: '600',
        backgroundColor: '#e0d2bf',
        textAlign: 'center',
        fontFamily: 'Poppins, sans-serif',
    }
    let stylesButton={
        fontSize: '1rem',
        fontFamily: 'arial',
        fontWeight: '600',
        backgroundColor: '#984CAD',
        borderRadius: '30px',
        textAlign: 'center',
        cursor: 'pointer',
        padding: '10px'
    }



 return (
<div style={stylesContainer}> 
    <div style={stylesDetalleProducto}> </div>
    < img  style={stylesDetalleFoto} src={item.imagen} alt={item.titulo}/>
    <h3 style={stylesTituloDetail}> {item.titulo} </h3>
    <p style={stylesDescripcion}> {item.descripcion} </p>
    <p style={stylesPrecio}>us$ {item.precio} </p>
    <button style={stylesButton}> comprar </button>
</div>
 )
   
 
}
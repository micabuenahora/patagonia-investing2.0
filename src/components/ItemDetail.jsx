export const ItemDetail = ({item}) => {

    let stylesContainer = {
        maxWidth: '1140px',
        paddingInline: '1.5rem',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#e0d2bf',
        borderRadius: '15% 15% 50px 50px',
        padding: '15px',
    }
    let stylesDetalleProducto = {
        paddingBlock: '2rem',
        gap: '2rem',
        
        
    }
    let stylesDetalleFoto = {
        borderRadius: '50%',
        width: '60%',
       
    }
    let stylesTituloDetail={
        fontSize: '2rem',
        backgroundColor: '#e0d2bf',
    }

    let stylesCategoria = {
        fontSize: '2rem',
        marginTop: '1rem',
        backgroundColor: '#e0d2bf',
        fontWeight: '600',
    }

    let stylesPrecio={
        fontSize: '2rem',
        marginTop: '2rem',
        fontWeight: '600',
        backgroundColor: '#e0d2bf',
    }
    let stylesDescripcion={
        fontSize: '1rem',
        marginTop: '2rem',
        fontWeight: '600',
        backgroundColor: '#e0d2bf',
        textAlign: 'center',
    }
    let stylesButton={
        fontSize: '1rem',
        fontFamily: 'arial',
        fontWeight: '600',
        backgroundColor: '#c0c7c2',
        borderRadius: '30px',
        textAlign: 'center',
        cursor: 'pointer',
    }



 return (
<div style={stylesContainer}> 
    <div style={stylesDetalleProducto}> </div>
    < img  style={stylesDetalleFoto} src={item.imagen} alt={item.titulo}/>
    <h3 style={stylesTituloDetail}> {item.titulo} </h3>
    <p style={stylesDescripcion}> {item.descripcion} </p>
    <p style={stylesCategoria}> categoria: {item.categoria}</p>
    <p style={stylesPrecio}>us$ {item.precio} </p>
    <button style={stylesButton}> comprar </button>
</div>
 )
   
 
}
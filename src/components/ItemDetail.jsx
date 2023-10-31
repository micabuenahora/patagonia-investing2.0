/* import { useContext } from "react"
import { CartCotext } from "../context/CartContext" */
import { CartContext } from "../context/CartContext";
import { ItemCount } from "./ItemCount";
import  { useState } from 'react'
import { useContext } from "react";
import { Link } from "react-router-dom";


export const ItemDetail = ({item}) => {
 
    const { agregarCarrito} = useContext(CartContext);

    /* itemcount */
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
       cantidad < item.stock && setCantidad(cantidad + 1)
    }

   
   /*  estilos del container */
    let stylesContainer = {
        maxWidth: '500px',
        paddingInline: '1.5rem',
        margin: '200px 400px 100px 400px',
        
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

    let flechaCarrito ={
        fontWeight: '60px',
        cursor: 'pointer',
        textDecoration : 'none',
        color:'#984CAD',
        fontSize: '40px'
    }
     
    


 return (

<div style={stylesContainer}> 

    <Link style={flechaCarrito} to="/ofertaacademica"> ← </Link>
    <h1 style={stylesTituloDetail}> {item.titulo} </h1>
    <div style={stylesDetalleProducto}> </div>
    < img  style={stylesDetalleFoto} src={item.imagen} alt={item.titulo}/>
    <h3 style={stylesTituloDetail}> {item.titulo} </h3>
    <p style={stylesDescripcion}> {item.descripcion} </p>
    <p style={stylesPrecio}>us$ {item.precio} </p>
    <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={() => {agregarCarrito(item, cantidad)}} />
    
</div>
 )
   
 
}
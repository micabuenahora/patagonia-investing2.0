export function Carritoicon() {

    let stylesCarrito = {
        display: 'flex',
        alignItems: 'center',
        
    }
    let stylesCarritoIcon = {
        cursor: 'pointer',
        boxShadow: 'black'
    }
    let stylesCarritoIconSpan = {
       backgroundColor: '#c0c7c2',
       borderRadius: '100px',
       padding: '3px'
    }
    return(
    
            <div style = {stylesCarrito}>
    
                    <p style = { stylesCarritoIcon} > 🛒 </p>
    
                    <span  style = { stylesCarritoIconSpan}  > 0 </span>
    
    
            </div>
    
    )
    
    }
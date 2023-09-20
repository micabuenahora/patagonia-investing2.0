export const ItemListContainer = (props) => {
    let stylesTitulo ={
        display: 'flex',
        justifyContent:'center',
    }
    return (


        <h1 style={stylesTitulo}> {props.greeting} </h1>

    )
     
    
}


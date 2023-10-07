import data from "../data/productos.json"

export const pedirProducto = () => { 
    return new Promise ((resolve, reject) => {
       setTimeout (() =>{
        resolve(data)
       },500) 
        
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve,reject) => {

        const item = data.find((resp) => resp.id === id)
        if(item) {
            resolve(item)

        }else{
            reject({
                error: "no se encontro el item solicitado"
            })
        }

    }
    )
}
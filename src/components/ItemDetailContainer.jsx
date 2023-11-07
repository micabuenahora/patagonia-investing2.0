import{useEffect,useState} from 'react'
/* import { pedirItemPorId } from './pedirProducto'; */
import {ItemDetail} from './ItemDetail'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../firebase/data';

const ItemDetailContainer = () => {

  const [item,setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    /* pedirItemPorId(Number(id))
    .then((respuesta) => {
     setItem(respuesta);

    }) */
    const docRef = doc(database, "productos", id);
    getDoc(docRef)
    .then((resp) => {
     setItem(
        {...resp.data(), id: resp.id}
        )
    })
  }, [id])
  
      return (

        <div>
           {item &&  <ItemDetail item ={item} />}
        </div>
      )

}


export default ItemDetailContainer;
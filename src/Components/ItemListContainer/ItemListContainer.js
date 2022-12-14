import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/Items.json")
        .then(Response => Response.json())
        .then(item => {
            setItems(item)
        })
    },[])


    return (
        <div>
           <p>{props.src}</p>
           {items.map((arrItems) => (
                <>
                <div className="cardItems">
                   <h5>{arrItems.nombre}</h5>
                   <Link to={`/ItemDetailContainer/${arrItems.id}`}><img src={arrItems.img} alt="Card image cap" className="imgCardItem"></img></Link>
                   <p>${arrItems.precio}</p>
                </div>
                <hr></hr>
                </>
            ))}
        </div>
    );
};

export default ItemListContainer;
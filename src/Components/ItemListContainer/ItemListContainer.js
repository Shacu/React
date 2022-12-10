import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                <div>
                   <h5>{arrItems.nombre}</h5>
                   <Link to={'/ItemDetailContainer/${id}'}><img src={arrItems.img} alt="Card image cap"></img></Link>
                   <p>{arrItems.precio}</p>
                </div>
                </>
            ))}
        </div>
    );
};

export default ItemListContainer;
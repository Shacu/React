import { useEffect, useState } from "react";

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
                   <img src={arrItems.img} alt="Card image cap"></img>
                   <p>{arrItems.precio}</p>
                </div>
                </>
            ))}
        </div>
    );
};

export default ItemListContainer;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/Items.json")
        .then(Response => Response.json())
        .then(item => {setItems(item)})
    },[])

    const itemsFilter = items.filter(filtro => filtro.id === id)

    console.log(itemsFilter)


    return (
        <div>
           {itemsFilter.map((arrItems) => (
                <>
                <div className="cardItems">
                   <h5>{arrItems.nombre}</h5>
                   <img src={arrItems.img} alt="Card image cap" className="imgCardItem"></img>
                   <p>${arrItems.precio}</p>
                </div>
                </>
            ))}
        </div>
    );
};

export default ItemDetailContainer;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();

    useEffect(() => {
        fetch(`/ItemDetailContainer/${id}`)
    })
    
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
           {items.map((arrItems) => (
                <>
                <div className="cardItems">
                   <h5>{arrItems.nombre}</h5>
                   <Link to={`/ItemDetailContainer/${arrItems.id}`}><img src={arrItems.img} alt="Card image cap" className="imgCardItem"></img></Link>
                   <p>${arrItems.precio}</p>
                </div>
                </>
            ))}
        </div>
    );
};

export default ItemDetailContainer;
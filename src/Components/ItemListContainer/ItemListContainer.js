import { useEffect, useState } from "react";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([])

useEffect(() => {
    fetch("./Items/Items.js")
    .then(Response => Response.json())
    .then(item => {
        setItems(item)
    })
},[])


    return (
        <>
        <p>{props.src}</p>
        <div>
        <img src="" alt="Card image cap"></img>
            <div>
                <h5>Card title</h5>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        </>
    );
};

export default ItemListContainer;
import { useParams } from "react-router-dom";

const ItemDetailContainerId = () => {
    const { id } = useParams();

    return(
        <div>{id}</div>
    );
};

export default ItemDetailContainerId;
import { useSelector } from "react-redux";
import Card from "../Card/Card.jsx";

const Favorites = () => {
    
    const favorites = useSelector((state) => state.myFavorites);

    return(
        <>
            {favorites.map(({id, name, status, species, gender, image, onClose}) => {
                return (
                    <Card
                    key = {id}
                    id = {id}
                    name = {name}
                    status = {status}
                    species = {species}
                    gender = {gender}
                    image = {image}
                    onClose = {onClose}
                 />
                );
            })}
        </>
    );
};
    export default Favorites;
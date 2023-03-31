import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addFavorite, removeFavorite} from "../../Redux/Actions"
import { useState, useEffect } from "react";
 

function Card({id, name, status, species, gender, origin, image, onClose,}) {
   
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector((state)=>state.myFavorites )
   const dispatch = useDispatch();

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFavorite(id));
      }else{
         setIsFav(true);
         dispatch(addFavorite({
            id, 
            name, 
            status, 
            species, 
            gender, 
            origin, 
            image, 
            onClose, 
            addFavorite, 
            removeFavorite,
         }));
      }
   };
   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }, [myFavorites, id]);
   
    return (
      <div>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )}
          <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
         <h2 className="card-name">{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} /> 
      </div>
   );
}

/*const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },   
      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
    },
   };
 };

 const mapStateToProps = (state) => {
   return {
      favorites: state.favorites,
   };
 }
export default connect(mapStateToProps, mapDispatchToProps)(Card);
*/
export default Card;
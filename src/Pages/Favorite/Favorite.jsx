import React, {useContext} from 'react';
import {GlobalContext} from "../../Context/index.jsx";
import './Favorites.css';
import {Link} from "react-router-dom";

const Favorite = () => {
        const {favoriteRecipes, setFavoriteRecipes} = useContext(GlobalContext);


        const favorites = Object.values(favoriteRecipes);
        const handleRemoveButton = (recipe) => {
            setFavoriteRecipes(prevState => {
                const newState = {...prevState};
                if (newState[recipe.id]) {
                    delete newState[recipe.id];
                }
                return newState;
            });
        };


        return (
            <div className={'favorite-container'}>
                {favorites.length > 0 ? (
                    favorites.map((recipe) => (
                        <div key={recipe.id} className={"favorite-card"}>
                            <div className={'favorite-card-title'}>
                                {recipe.title}
                            </div>
                            <div className={'favorite-card-publisher'}>
                                {recipe.publisher}
                            </div>
                            <img className={'favorite-card-img'} src={recipe.image_url} alt={recipe.title}/>
                            <div className={'favorite-card-button'}>{recipe.description}
                                <Link to={`/details-item/${recipe.id}`}>
                                    <button className={'recipe-button'}>Recipe Details</button>
                                </Link>
                                <button onClick={() => handleRemoveButton(recipe)} className={'recipe-button'}>Remove
                                </button>
                            </div>

                        </div>
                    ))
                ) : (
                    <div>No Favorites so far...</div>
                )}
            </div>
        )
            ;
    }
;

export default Favorite;

import React, { useContext } from 'react';
import { GlobalContext } from "../../Context/index.jsx";
import './RecipeCard.css';
import { Link } from "react-router-dom";

const RecipeItem = () => {
    const { recipes,loading} = useContext(GlobalContext);

    return (
        <div className="recipe-grid">
            {loading?<div>Loading...</div>:null}
            {recipes && recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <div key={recipe.id} className={'recipe-card'}>
                        <img src={recipe.image_url} alt={recipe.title} className={'recipe-image'} />
                        <div className={'recipe-publisher'}>{recipe.publisher}</div>
                        <div className={'recipe-title'}>{recipe.title}</div>
                        <Link to={`/details-item/${recipe.id}`}>
                            <button className={'recipe-button'}>Recipe Details</button>
                        </Link>
                    </div>
                ))
            ) : (
                <div>No recipes found</div>
            )}
        </div>
    );
};

export default RecipeItem;

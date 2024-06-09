import React, { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/index.jsx";
import './Details.css'

const Details = () => {
    const { id } = useParams();
    const { recipeDetails, setRecipeDetails, loading, setLoading, error, setError } = useContext(GlobalContext);

    useEffect(() => {
        async function fetchRecipeDetails() {
            try {
                setLoading(true);
                const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
                const data = await response.json();
                if (data?.data?.recipe) {
                    setRecipeDetails(data.data.recipe);
                } else {
                    setError('No recipes found!');
                }
            } catch (e) {
                setError('An error occurred while fetching the recipe details');
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        fetchRecipeDetails();
    }, [id, setLoading, setError, setRecipeDetails]);

    if (loading) {
        return <div>Loading....</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    if (!recipeDetails) {
        return <div>No recipe details available</div>;
    }

    console.log(recipeDetails)

    return (
        <div className="details-container">
            <div className="left-side">
                <img src={recipeDetails.image_url} alt={recipeDetails.title} />
                <div className="text-white font-bold py-4 text-2xl">{recipeDetails.publisher}</div>


            </div>
            <div className="right-side">
                <div className="ingredients">
                    <div className={'text-white text-3xl pb-4'}>{recipeDetails.title}</div>
                    <div className={'text-white'}>Servings: {recipeDetails.servings}</div>
                    <div className={'text-white pb-4'}>Cooking Time: {recipeDetails.cooking_time} minutes</div>
                    <p className={'text-white text-3xl pb-4'}>Ingredients</p>

                    <ul>
                        {recipeDetails.ingredients && recipeDetails.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient.quantity} {ingredient.unit} {ingredient.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Details;

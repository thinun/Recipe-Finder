import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {GlobalContext} from "../../Context/index.jsx";
import {data} from "autoprefixer";

const Details = () => {
    const {id} = useParams();
    const {recipeDetails, setRecipeDetails} = useContext(GlobalContext);

    useEffect(() => {
        async function fetchRecipeDetails() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const data = await response.json();
            if (data?.data) {
                setRecipeDetails(data.data)
            }
        }

        fetchRecipeDetails()
    }, [id]);


    return (
        <div>


        </div>
    );
};

export default Details;

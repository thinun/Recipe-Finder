import React, {useContext} from 'react';
import {GlobalContext} from "../../Context/index.jsx";
import RecipeItem from "../../Componunts/RecipeCard/RecipeItem.jsx"

const Home = () => {


    return (

        <div className='flex justify-center mx-10 my-4'>
            <RecipeItem/>
        </div>

    );
};

export default Home;

import {createContext, useState ,useEffect} from "react";


export const GlobalContext = createContext(null)

function GlobalState({children}) {

    const [searchText, setSearchText] = useState('')
    const [loading , setLoading]= useState(false)
    const [recipes, setRecipes]=useState([])
    const [error, setError] = useState(null);
    const [recipeDetails, setRecipeDetails] = useState(null);


    async function handleSearch(event) {
        event.preventDefault()
        setLoading(true)
        setError(null)
        try {
            const res = await
                fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchText}`);
            const data = await res.json();

            if (data?.data?.recipes){
                setRecipes(data.data.recipes)
                setSearchText('')
                console.log(recipes)

            }
            else {
                setError("Ops! No recipes found")
            }

        } catch (error) {
            setError('An error occurred while fetching recipes.');

        }
        finally {
            setLoading(false)
        }
    }

    return (
        <GlobalContext.Provider
            value={{searchText, setSearchText,handleSearch,loading, recipes, error,recipeDetails,setRecipeDetails}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
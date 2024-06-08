import React, {useContext,useState} from 'react';
import logo from '../../assets/Logo/T_logo_s.png';
import {NavLink} from 'react-router-dom';
import {GlobalContext} from "../../Context/index.jsx";



const Navbar = () => {
    const {searchText, setSearchText} = useContext(GlobalContext);
    const [loading , setLoading]= useState(false)
    const [recipes, setRecipes]=useState([])
    const [error, setError] = useState(null);

    async function handleSearch(event) {
        event.preventDefault()
        setLoading(true)
        setError(null)
        try {
            const res = await
                fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchText}`);
            const data = await res.json();
            console.log(data)
            if (data?.data?.recipes){
                setRecipes(data.data.recipes)
                setSearchText('')
                console.log(recipes)
            }
            else {
                console.log("No recipes found")
            }


        } catch (error) {
            console.log(error);
            setError('An error occurred while fetching recipes.');

        }
        finally {
            setLoading(false)
        }
    }

    return (
        <nav className="navbar navbar-dark bg-black flex items-center justify-between p-4">
            <div className='flex items-center justify-evenly px-4 mx-4'>
                <NavLink to="/"><img src={logo} alt="LOGO" className="w-15 h-12"/></NavLink>
                <h2>
                    <NavLink to="/" className="text-white pl-10">Recipe Finder</NavLink>
                </h2>
            </div>
            <div className={'flex items-center justify-center'}>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Recipe Finder"
                        className='w-200 border-none h-8 rounded pl-4'
                        value={searchText}
                        onChange={event => setSearchText(event.target.value)}
                    />
                </form>
                <button className='bg-white ml-4 w-20 h-8 rounded hover:bg-blue-600 transition'
                        onClick={handleSearch}>Search
                </button>
            </div>
            <div className='flex items-center justify-evenly px-4 mx-4'>
                <ul className='flex items-center justify-evenly'>
                    <li>
                        <NavLink to="/" className="text-white pr-10">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites" className="text-white">Favorites</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

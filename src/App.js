import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";
// require('dotenv').config();

const App = () => {
	const {REACT_APP_API_KEY, REACT_APP_ID} = process.env;

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_API_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	}

	const updateSearch = (evt) => {
		setSearch(evt.target.value);
	}

	const getSearchQuery = (evt) => {
		evt.preventDefault();
		setQuery(search);
		setSearch('');
	}

	return (
		<div className="App bg-gray-200">
			<div className="w-1/3 container p-3 mx-auto">
				<form action="" className="bg-gray-100 shadow-md p-4" onSubmit={getSearchQuery}>
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
						Search
					</label>
					<input type="text"
								 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								 value={search} onChange={updateSearch} placeholder="search for a recipe"/>
					<button
						className="w-full mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
						search
					</button>
				</form>
			</div>
			<div className="flex flex-wrap">
				{recipes.map(value => (
					<Recipe key={value.recipe.label} title={value.recipe.label} calories={value.recipe.calories}
									image={value.recipe.image} ingredients={value.recipe.ingredients}/>
				))}
			</div>
		</div>
	)
}

export default App;

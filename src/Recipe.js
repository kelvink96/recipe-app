import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
	return (
		<div className="w-1/5">
			<div className="max-w-sm rounded overflow-hidden bg-white m-2 shadow-md">
				<img className="w-1/4 p-2 mx-auto" src={image} alt="" loading="lazy"/>
				<h4 className="text-center font-bold text-xl mb-2">{title}</h4>
				<div className="p-5">
					<ol className="list-decimal">
						{ingredients.map(ingredient => (
							<li className="text-sm">{ingredient.text}</li>
						))}
					</ol>
				</div>
				<p className="text-center"><b>Calories -</b> {calories}</p>
			</div>
		</div>
	)
}

export default Recipe;

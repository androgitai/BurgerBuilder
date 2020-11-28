import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
	const burgerIngredient = () => {
		let ingredients = [];
		for (const [key, value] of Object.entries(props.ingredients)) {
			for (let i = 0; i < value; i++) {
				ingredients.push(<BurgerIngredient key={key + i} type={key} />);
			}
		}
		return ingredients;
	};
	let burgerIngredients = burgerIngredient();

	if (burgerIngredients.length === 0) {
		burgerIngredients = [
			<div key={"noIng"}>Please start adding ingredients</div>,
		];
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{burgerIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;

import React, {Component} from "react";
import ReactDOM from "react-dom";


class AddBtn extends Component {



	render() {
		return (
			<button 
				className="btn btn-primary" 
				id="recipe-btn"
				data-toggle="modal" 
				data-target="#add-recipe">
				Add Recipe
			</button>
		)
	}
}

export default AddBtn
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Recipes from "./Recipes.jsx";
import AddBtn from "./AddBtn.jsx";
import AddModal from "./AddModal.jsx";

class App extends Component {

	render() {
		return (
			<div>
				<Recipes/>
				<AddBtn/>
				<AddModal/>
			</div>
		)
	}
}

export default App
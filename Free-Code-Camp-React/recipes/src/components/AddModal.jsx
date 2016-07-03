import React, {Component} from "react";
import ReactDOM from "react-dom";

class AddModal extends Component {

	$("#save").on("click", function() {
		$(this).modal('hide');
	});

	render() {
		return(
			<div className="modal fade" id="add-recipe" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 className="modal-title" id="myModalLabel">Add Recipe</h4>
			      </div>
			      <div className="modal-body">
			        <div className="form-group">
			        	<label htmlFor="recipe-name">Recipe Name</label>
			        	<input type="text" id="recipe-name" className="form-control" placeholder="Pizza"/>
			        </div>
			        <div className="form-group">
			        	<label htmlFor="ingredients">Ingredients</label>
			        	<input type="text" id="ingredients" className="form-control" placeholder="Olives, Tomatoes, Basil"/>
			        </div>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
			        <button type="button" id="save" className="btn btn-primary">Save Changes</button>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default AddModal
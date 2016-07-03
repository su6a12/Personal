class Recipes extends React.Component {
	render() {
		return (
			<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  			<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingOne">
						<h4 class="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								{this.props.recipes.title}
							</a>
						</h4>
					</div>
					<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      			<div class="panel-body">
        			{this.props.recipes.ingredients}
      			</div>
    			</div>
 				 </div>
			</div>
		)
	}
}

////////////////////////////// Button to add a recipe
class AddRecipeBtn extends React.Component {
	
	addRecipe(e) {
		e.preventDefault();
			var recipeTitle = document.getElementById("recipe-name").value;
			var ingredients = document.getElementById("ingredients-list").value.split(",");
			this.props.addRecipe(recipeTitle, ingredients);
			document.getElementById("myModal").setAttribute("data-dismiss", "modal");
	}
	
	render() {
		return (
			<div>
				<button type="button" id="add-recipe-btn" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
					Add Recipe
				</button>

				<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								<h4 className="modal-title" id="myModalLabel">Add A Recipe</h4>
							</div>
							
							<div className="modal-body">
								<div className="form-group">
									<label for="recipe-name">Recipe Name</label>
									<input type="text" id="recipe-name" className="form-control" placeholder="Pizza"/>
								</div>
								
								<div className="form-group">
									<label for="ingredients-list">Ingredients List</label>
									<textarea type="text" id="ingredients-list" className="form-control" placeholder="Separate each ingredient with a comma"/>
								</div>
							</div>
							
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addRecipe.bind(this)}>Add Recipe!</button>
								<button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

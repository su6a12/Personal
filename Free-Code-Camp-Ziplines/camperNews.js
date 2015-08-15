$(document).ready(function() {

	var camperAPI = "http://www.freecodecamp.com/stories/hotStories";
	var article, articleID, image, userName, headline;

	function camperData(data) {
		data.forEach(function(eachArticle) {
			userName = eachArticle.author.username;
			headline = eachArticle.headline;
			image = eachArticle.image || "http://placekitten.com/g/195/195";
			article = '<div class="article-tile ' + userName + '">';
			article += '<li>';
			article += '<img class="article-img" src="' + image + '">';
			//console.log(eachArticle.image);
			article += '<span class="article-author">' + userName + '</span><br/>';
			article += '<span class="article-headline">' + headline.substring(0, 80) + '</span>';
			article += '</li></div>';
			$("#news-list").append(article);

			$("li").click(function() {
				window.open(eachArticle.link);
			});						// end of click event
			$("#search").keyup(function() {
				var text = $(this).val().toLowerCase();

				$("#news-list>li").each(function() {
					//console.log($(this).parent());
					$(this).parent().nodeValue.indexOf(text) >= 0 ? $(this).show() : $(this).hide();
				});
			});						// end of keyup event
		});
	}
	$.getJSON(camperAPI, camperData);

});
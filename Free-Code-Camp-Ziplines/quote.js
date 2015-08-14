var prevQuote = 0;
var quote = "";
// Using Quotes on Design API
$(".new-quote").click(function() {
  $(".quote-container").css("display", "block");    // show quote container
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=", function(data) {
    var randQuote = Math.floor(Math.random() * (30-1));
    
    while (prevQuote === randQuote) {
      randQuote = Math.floor(Math.random() * (30-1));
    }
    quote = data[randQuote].content.slice(3, -5);
    quote = quote.slice(0, 140);
    //console.log(quote);

    $(".quote").html(data[randQuote].content);
    $(".quoter").html(data[randQuote].title);
    
    prevQuote = randQuote;
  }); // end of .getJSON
});   // end of get quote button click
  
$(".link").click(function() {
  $(this).attr("href", "https://twitter.com/intent/tweet" + "?text=" + quote);
});

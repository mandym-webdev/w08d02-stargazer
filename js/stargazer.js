$("form").on("submit", function(event){
  event.preventDefault();
  name = $("#search-name").val();
  // console.log(name);
  search(name);
});

function search(name) {
  var api = 'http://www.strudel.org.uk/lookUP/json/?name=' + name;
  // .ajax is alternate syntax for the $.getJSON method
  $.ajax({
    url: api,
    dataType: "jsonp",
    jsonpCallback: 'lk',
      success: function(response) {
        if (response.image){
          showResult = "<img src=\"" + response.image.src + "\">";
          $("#preview").html(showResult);
        } else {
          showResult = "Sorry, we couldn't find that one, please try again!";
          $("#preview").html(showResult);
        }
      }
    
  });
  
}




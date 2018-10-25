

$(document).ready(function(){
  $("form#square").submit(function(event){
    event.preventDefault();
    var userInput = $("input#sentence").val();
    var splitWords = userInput.split("");
    var noSpaces = splitWords.filter(x => x !== " ");
    var squareSize = Math.sqrt(noSpaces.length);
    var noSpacesString = noSpaces.join();
    for (i = 0; i < squareSize; i++) {
      var firstRow = noSpacesString.substr(i, squareSize);
      alert(firstRow);
    };
  });
});

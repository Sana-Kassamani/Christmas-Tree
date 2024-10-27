// repeat method in js takes O(n) where n is repeat parameter
// for loop goes n times (n parameter)
// so whole function is O(n power 2), n being parameter entered by user
function generateTree(n) {
  var tree = "";
  if (parseInt(n) && n > 0) {
    tree += "*" + "<br>";
    for (var i = 0; i < n - 1; i++) {
      var string = "* " + "| ".repeat(2 * i + 1).trimEnd() + " *";
      string += "<br>";
      tree += string;
    }
  }
  return tree;
}
var userInput = prompt("Please enter number of rows in Christmas Tree:");
var tree = generateTree(userInput);
document.getElementById("body").innerHTML = tree;

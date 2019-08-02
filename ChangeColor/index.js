var newColor = $('.color-here');
var changeColorBtn = $('.change-color');
var currentColor = localStorage.getItem('color') || "#000000";
newColor.css('backgroundColor',currentColor);
changeColorBtn.on("click", changeColor);
function changeColor() {
  var color = $('.color').val();
  newColor.css('backgroundColor', color);
  localStorage.setItem('color', color);
}

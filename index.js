let button = document.getElementById("button");
let input = document.getElementById("input");
let colorOutput = document.querySelector(".color-output");

function changeBackground() {
  colorOutput.style.backgroundColor  = `${input.value}`;
}

function changeBackground2() {
  input.value = `#${genrateHexColor()}`
  changeBackground() 
}


function genrateHexColor() {
  var result = '';
  var characters = 'abcdef0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 6; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}

console.log(genrateHexColor());
/*
  Decided to add onclick for the forms as it
  would be easier to call the functions from a central
  JS file.
*/
function checkForm(){
  let result = document.getElementById('results');
  if(document.simpleForm.password.value !== '12345678'){
    alert("Incorrect Password");
    result.innerHTML = "";
    return;
  }

  result.innerHTML = document.simpleForm.username.value + "<br>"
  + document.simpleForm.email.value;
  return;
}

function calculateVolume(){
  let rad = document.simpleForm.radius.value;
  let result = (4/3)*Math.PI*Math.pow(rad,3);
  
  let resultText = document.getElementById('results');
  resultText.innerHTML = "Sphere Volume = " + result.toFixed(3);
}
/*function init() {
  var button = document.getElementById('entrybutton');

function showMeText() {
  var textbox = document.getElementById('entryinput');
  document.getElementById('textoutput').innerHTML = textbox.value;
  customAlert("Daniel Krieglstein: " + textbox.value);
}

  button.addEventListener('click', showMeText);
}

function customAlert(message) {
  alert(message);
}*/

  window.addEventListener('load', init);

function init(){
  var button = document.getElementById('entrybutton');

  function showMeText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Daniel Krieglstein: " + textbox.value);
  }

  button.addEventListener('click', showMeText);
  }
  
window.addEventListener('load', init);

function init(){
  var button = document.getElementById("entrybutton");

  function showMeText(){
    var textbox = document.getElementById("entryinput");
    document.getElementById("textoutput").innerHTML = textbox.value;
    alert("Daniel Krieglstein: " + textbox.value);
  }

  button.addEventListener('click', showMeText);
  }
  
window.addEventListener('load', init);

document.getElementById('alertMe').addEventListener('click', function() {
      alert('Daniel Krieglstein: ' + document.getElementById('textInput').value);
    });

    // Add event listener to the submit button
    document.getElementById('submitButton').addEventListener('click', function() {
      // Get the value of the text input
      var inputValue = document.getElementById('textInput').value;

      // Display an alert with name and colon before the input value
      alert('Daniel Krieglstein: ' + inputValue);

      // Set the text content of the h2 element to the input value
      document.getElementById('outputText').textContent = 'Output: ' + inputValue;
    });

// Listen for form Submit
document.getElementById('myForm').addEventListener('submit', calculateZodiacSign);


function calculateZodiacSign(e){
  // Get values of Name and Age
  var name = document.getElementById('nameInput').value;
  var age = document.getElementById('age').value;

  // Alert the result for testing purpose
  alert('Name: ' + name + ' Age: ' + age + '!')

  // Prevent form from submitting
  e.preventDefault();
}

// Get the initial age slider value
function getInitialAgeValue() {
  var slider = document.getElementById("age");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
}

// Display the age value dynamically
function displayYearOld() {
  var slider = document.getElementById("age");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  }
}

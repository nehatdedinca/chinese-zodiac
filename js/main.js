// Listen for form Submit
document.getElementById('myForm').addEventListener('submit', calculateZodiacSign);


function calculateZodiacSign(e){
  // Get values of Name and Age
  var name = document.getElementById('nameInput').value;
  var age = document.getElementById('age').value;

  var yearBorn = calculateYearBorn(age);

  switch (yearBorn) {
    case 1967, 1979, 1991, 2003, 2015:
      getGoatDetails(name, yearBorn)
      break;
    default:
      alert('Select the right age you schmuck!');
      break;
  }

  // Prevent form from submitting
  e.preventDefault();
}

// CalculateYearBorn
function calculateYearBorn(age) {
  return 2018 - age;
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

// Get Goat's details
function getGoatDetails(name, yearBorn) {
  // Display the result
  zodiacResults.innerHTML = '';
  zodiacResults.innerHTML +=
    '<div class="well">' +
      '<br />' +
      '<h3>Goat ' + name + ', born in ' + yearBorn + '</h3>' +
      '<br />' +
      '<p>People born in a year of the Goat are generally believed to be <strong>gentle</strong> mild-mannered, shy, stable, ' +
      'sympathetic, amicable, and brimming with a strong sense of kindheartedness and justice. ' +
      '<br />' +
      '<br />' +
      'They have very <strong>delicate thoughts,</strong> strong creativity, and perseverance, and acquire professional skills well. Although they look gentle on ' +
      'the surface, they are tough on the inside, always insisting on their own opinions in their minds. They have strong ' +
      'inner resilience and excellent defensive instincts.' +
      '<br />' +
      '<br />' +
      'Though they <strong>prefer to be in groups,</strong> they do not want to be the center of attention. They are reserved ' +
      'and quiet, most likely because they like spending much time in their thoughts. Goats like to spend money on fashionable ' +
      'things that give them a first class appearance. Although goats enjoy spending money on the finer things in life, they are not snobbish.'
    '</div>';
  // Get the right src for the goat's image
  document.getElementById('zodiacImage').src = "images/goat.jpg";
}

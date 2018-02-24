// Listen for form Submit
document.getElementById('myForm').addEventListener('submit', calculateZodiacSign);

function calculateZodiacSign(e){
  // Get values of Name, Age and calculate yearBorn
  var name = document.getElementById('nameInput').value;
  var age = document.getElementById('age').value;
  var yearBorn = calculateYearBorn(age);

  switch (yearBorn) {
    case 1960: case 1972: case 1984: case 1996: case 2008:
      getRatDetails(name, yearBorn);
      break;
    case 1961: case 1973: case 1985: case 1997: case 2009:
      getOxDetails(name, yearBorn);
      break;
    case 1962: case 1974: case 1986: case 1998: case 2010:
      getTigerDetails(name, yearBorn);
      break;
    case 1963: case 1975: case 1987: case 1999: case 2011:
      getRabbitDetails(name, yearBorn);
      break;
    case 1964: case 1976: case 1988: case 2000: case 2012:
      getDragonDetails(name, yearBorn);
      break;
    case 1965: case 1977: case 1989: case 2001: case 2013:
      getSnakeDetails(name, yearBorn);
      break;
    case 1966: case 1978: case 1990: case 2002: case 2014:
      getHorseDetails(name, yearBorn);
      break;
    case 1967: case 1979: case 1991: case 2003: case 2015:
      getGoatDetails(name, yearBorn);
      break;
    case 1968: case 1980: case 1992: case 2004: case 2016:
      getMonkeyDetails(name, yearBorn);
      break;
    case 1969: case 1981: case 1993: case 2005: case 2017:
      getRoosterDetails(name, yearBorn);
      break;
    case 1970: case 1982: case 1994: case 2006: case 2018:
      getDogDetails(name, yearBorn);
      break;
    case 1971: case 1983: case 1995: case 2007: case 2019:
      getPigDetails(name, yearBorn);
      break;
    default:
      // Not handled due to not possible case
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
  var slider = document.getElementById('age');
  var output = document.getElementById('demo');
  output.innerHTML = slider.value;
}

// Display the age value dynamically
function displayYearOld() {
  var slider = document.getElementById('age');
  var output = document.getElementById('demo');
  output.innerHTML = slider.value;
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
}

// Get Rat's details
function getRatDetails(name, yearBorn) {
  // Display the result
  document.getElementById('displayResult').hidden = false;
  result.innerHTML = '';
  result.innerHTML +=
      '<div>' +
        '<h4 class="card-title">' + name + '\'s a Rat born in ' + yearBorn + '</h4>' +
        '<img id="zodiacImage" src="images/rat.jpg" class="rounded float-right"/>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky numbers: 2 & 3</span>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky colors: Blue, Gold & Green</span>' +
        '<br />' +
        '<br />' +
        '<p class="card-text">With strong intuition and quick response, they always easily adapt themselves to a new environment. With rich ' +
        'imaginations and sharp observation, Rats can take advantage of various opportunities well. Rats have strong curiosity, ' +
        'so they tend to try their hands at anything, and they can deal with it skillfully.</p>' +
        '<br />' +
        '<p class="card-text"><strong>Ladies</strong> belonging to the Rat zodiac sign are <strong>pretty, smart, and lovely.</strong> They have quick minds and dexterous ' +
        'hands, and are able to learn anything.</p>' +
        '<br />' +
        '<p class="card-text">A lack of courage, as well as good command skills, Rats are not capable as leaders. ' +
        'Opportunistic and picky as Rats are, they do not have broad minds, but a narrow view.</p>' +
        '<p class="card-text">Rats are kind, but sometimes impolite to others. People of the Rat zodiac sign usually sleep late, for mice are nocturnal animals.</p>' +
      '</div>';
}

// Get Ox's details
function getOxDetails(name, yearBorn) {
  // Display the result
  document.getElementById('displayResult').hidden = false;
  result.innerHTML = '';
  result.innerHTML +=
      '<div>' +
        '<h4 class="card-title">' + name + '\'s an Ox born in ' + yearBorn + '</h4>' +
        '<img id="zodiacImage" src="images/ox.jpg" class="rounded float-right"/>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky numbers: 1 & 4</span>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky colors: White, Yellow & Green</span>' +
        '<br />' +
        '<br />' +
        '<p class="card-text">Oxes are known for diligence, dependability, strength and determination. Having an honest nature, Oxes have a ' +
        'strong patriotism for their country, have ideals and ambitions for life, and attach importance to family and work. ' +
        'These things reflect the traditional characteristics of conservatives. Women belonging to the Ox zodiac sign are traditional, ' +
        'faithful wives, who attach great importance to their children\'s education.</p>' +
        '<br />' +
        '<p>Having a desire to advance and great patience, Oxes can achieve their goals by consistent efforts. ' +
        'They are not influenced by others or the environment, but persist to do things in accordance with their ideas ' +
        'and capabilities. Before taking action, they will have a definite plan with detailed steps and add their ' +
        'strong faith and physical strength. So people of the Ox zodiac sign enjoy great success as a result.</p>' +
        '<br />' +
        '<p>The most disadvantageous trait in Oxes is poor communication skills. They are not good at communicating ' +
        'with others, and even think it not worthwhile exchanging ideas with others. They are stubborn and stick ' +
        'to their own ways.</p>'
      '</div>';
}

// Get Tiger's details
function getTigerDetails(name, yearBorn) {
  // Display the result
  document.getElementById('displayResult').hidden = false;
  result.innerHTML = '';
  result.innerHTML +=
      '<div>' +
        '<h4 class="card-title">' + name + '\'s a Tiger born in ' + yearBorn + '</h4>' +
        '<img id="zodiacImage" src="images/tiger.jpg" class="rounded float-right"/>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky numbers: 1, 3 & 4</span>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky colors: Blue, Grey & Orange</span>' +
        '<br />' +
        '<br />' +
        '<p class="card-text">People born in the year of the Tiger are brave, competitive, unpredictable, and self-confident. ' +
        'They are very charming and well-liked by others. But sometimes they are likely to be impetuous, ' +
        'irritable, and overindulged.</p>' +
        '<br />' +
        '<p><strong>With stubborn personalities</strong> and tough judgment, tigers work actively and boldly express themselves, ' +
        'and do things with a high-handed manner. They are authoritative and never go back on what they have said.</p>' +
        '<br />' +
        '<p><strong>With great confidence</strong> and indomitable fortitude, they can be competent leaders. ' +
        'They will not make preparations for anything, but they can handle anything that comes along.</p>'
      '</div>';
}

// Get Rabbit's details
function getRabbitDetails(name, yearBorn) {
  // Display the result
  document.getElementById('displayResult').hidden = false;
  result.innerHTML = '';
  result.innerHTML +=
      '<div>' +
        '<h4 class="card-title">' + name + '\'s a Rabbit born in ' + yearBorn + '</h4>' +
        '<img id="zodiacImage" src="images/rabbit.jpg" class="rounded float-right"/>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky numbers: 3, 4 & 6</span>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky colors: Red, Pink, Purple & Blue</span>' +
        '<br />' +
        '<br />' +
        '<p class="card-text">Rabbits tend to be gentle, quiet, elegant, and alert; quick, skillful, kind, and patient; ' +
        'and particularly responsible. However, they might be superficial, stubborn, melancholy, and overly-discreet. ' +
        'Generally speaking, people who belong to the Rabbit zodiac sign have likable characters.</p>' +
        '<br />' +
        '<p class="card-text"><strong>Gentlemen</strong> who belong to the rabbit zodiac sign always treat people politely, with a gentle ' +
        'smile that makes people feel that they are credible and sincere. When meeting trouble, Rabbits can handle it ' +
        'in an orderly way; when encountering tough difficulties they are never discouraged, but are persistent to ' +
        'seek solutions. So they eventually achieve enviable success.</p>' +
        '<br />' +
        '<p class="card-text"><strong>Ladies</strong> belonging to the rabbit zodiac sign, apart from a pretty and demure appearance, have ' +
        'a pure heart. Rabbits are faithful to those around them, but reluctant to reveal their minds to others, ' +
        'and have a tendency to escape reality. They are too cautious and conservative, which means they miss good opportunities.</p>'
      '</div>';
}

// Get Dragon's details
function getDragonDetails(name, yearBorn) {
  // Display the result
  document.getElementById('displayResult').hidden = false;
  result.innerHTML = '';
  result.innerHTML +=
      '<div>' +
        '<h4 class="card-title">' + name + '\'s a Dragon born in ' + yearBorn + '</h4>' +
        '<img id="zodiacImage" src="images/dragon.jpg" class="rounded float-right"/>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky numbers: 1, 6 & 7</span>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky colors: Gold, Silver & Grayish White</span>' +
        '<br />' +
        '<br />' +
        '<p class="card-text">Among Chinese zodiac animals, the Dragon is the sole imaginary animal. The Dragon is the most vital ' +
        'and powerful beast in the Chinese zodiac, although with an infamous reputation for being a hothead and ' +
        'possessing a sharp tongue. In ancient times, people thought that Dragons could control everything in ' +
        'the world with their character traits of dominance and ambition.</p>' +
        '<br />' +
        '<p class="card-text">Gifted with innate courage, tenacity and intelligence, dragons are enthusiastic and confident. ' +
        'They are not afraid of challenges, and willing to take risks.</p>' +
        '<br />' +
        '<p class="card-text">However, the dragon is sometimes regarded as aggressive, and angry dragons are not open to criticism.' +
        ' They don\'t consider themselves irritating and arrogant. Instead of following tradition, ' +
        'they strive for a smooth future.</p>'
      '</div>';
}

// Get Snake's details
function getSnakeDetails(name, yearBorn) {
  // Display the result
  document.getElementById('displayResult').hidden = false;
  result.innerHTML = '';
  result.innerHTML +=
      '<div>' +
        '<h4 class="card-title">' + name + '\'s a Snake born in ' + yearBorn + '</h4>' +
        '<img id="zodiacImage" src="images/snake.jpg" class="rounded float-right"/>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky numbers: 2, 8 & 9</span>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky colors: Black, Red & Yellow</span>' +
        '<br />' +
        '<br />' +
        '<p class="card-text">In Chinese culture, the Snake is the most enigmatic animal among the twelve zodiac animals. ' +
        'People born in a year of the Snake are supposed to be the most intuitive.</p>' +
        '<br />' +
        '<p class="card-text">Snakes tend to act according to their own judgments, even while remaining the most ' +
        'private and reticent. They are determined to accomplish their goals and hate to fail.</p>' +
        '<br />' +
        '<p class="card-text">Snakes represent the symbol of wisdom. They are intelligent and wise. They are good ' +
        'at communication but say little. Snakes are usually regarded as great thinkers.</p>'
        '<br />' +
        '<p class="card-text">Snakes are materialistic and love keeping up with the Joneses. They love to posses ' +
        'the best of everything, but they have no patience for shopping.</p>'
        '<br />' +
        '<p class="card-text">Snake people prefer to work alone, therefore they are easily stressed. If they seem ' +
        'unusually stressed, it is best to allow them their own space and time to return to normal.</p>'
        'they strive for a smooth future.</p>'
      '</div>';
}

// Get Horse's details
function getHorseDetails(name, yearBorn) {
  // Display the result
  document.getElementById('displayResult').hidden = false;
  result.innerHTML = '';
  result.innerHTML +=
      '<div>' +
        '<h4 class="card-title">' + name + '\'s a Horse born in ' + yearBorn + '</h4>' +
        '<img id="zodiacImage" src="images/horse.jpg" class="rounded float-right"/>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky numbers: 2, 3, 7, and numbers containing them (like 23 and 37)</span>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky colors: Yellow & Green</span>' +
        '<br />' +
        '<br />' +
        '<p class="card-text">People born in a year of the Horse are extremely animated, active and energetic. ' +
        'Horses love to be in a crowd, and they can usually be seen on such occasions as concerts, ' +
        'theater performances, meetings, sporting events, and parties.</p>' +
        '<br />' +
        '<p class="card-text">With a deft sense of humor, Horses are masters of repartee. They love to take center stage and delight audiences everywhere.</p>' +
        '<br />' +
        '<p class="card-text">Sometimes, the Horse is a little self-centered, but it doesn\'t mean that s/he can not be ' +
        'interested in others\' problems. Horses are really more cunning than intelligent, and that is ' +
        'probably why most Horse people lack real confidence.</p>'
      '</div>';
}

// Get Goat's details
function getGoatDetails(name, yearBorn) {
  // Display the result
  document.getElementById('displayResult').hidden = false;
  result.innerHTML = '';
  result.innerHTML +=
      '<div>' +
        '<h4 class="card-title">' + name + '\'s a Goat born in ' + yearBorn + '</h4>' +
        '<img id="zodiacImage" src="images/goat.jpg" class="rounded float-right"/>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky numbers: 2 & 7</span>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky colors: Brown, Red & Purple</span>' +
        '<br />' +
        '<br />' +
        '<p class="card-text">People born in a year of the Goat are generally believed to be <strong>gentle</strong> mild-mannered, shy, stable, ' +
        'sympathetic, amicable, and brimming with a strong sense of kindheartedness and justice.</p>' +
        '<br />' +
        '<p class="card-text">They have very <strong>delicate thoughts,</strong> strong creativity, and perseverance, and acquire professional skills well. Although they look gentle on ' +
        'the surface, they are tough on the inside, always insisting on their own opinions in their minds. They have strong ' +
        'inner resilience and excellent defensive instincts.</p>' +
        '<br />' +
        '<p class="card-text">Though they <strong>prefer to be in groups,</strong> they do not want to be the center of attention. They are reserved ' +
        'and quiet, most likely because they like spending much time in their thoughts. Goats like to spend money on fashionable ' +
        'things that give them a first class appearance. Although goats enjoy spending money on the finer things in life, they are not snobbish.</p>'
      '</div>';
}

// Get Monkey's details
function getMonkeyDetails(name, yearBorn) {
  // Display the result
  document.getElementById('displayResult').hidden = false;
  result.innerHTML = '';
  result.innerHTML +=
      '<div>' +
        '<h4 class="card-title">' + name + '\'s a Monkey born in ' + yearBorn + '</h4>' +
        '<img id="zodiacImage" src="images/monkey.jpg" class="rounded float-right"/>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky numbers: 4 & 9</span>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky colors: White, Blue & Gold</span>' +
        '<br />' +
        '<br />' +
        '<p class="card-text">People born in a year of the Monkey have magnetic personalities and are witty and intelligent. ' +
        'Personality traits like mischievousness, curiosity, and cleverness, make them <strong>very naughty.</strong></p>' +
        '<br />' +
        '<p class="card-text">Monkeys are <strong>masters of practical jokes,</strong> because they like playing most of the time. ' +
        'Though they don\'t have bad intentions, their pranks sometimes hurt the feelings of others.</p>' +
        '<br />' +
        '<p class="card-text">Monkeys are <strong>fast learners and crafty</strong> opportunists. They have many interests ' +
        'and need partners who are capable of stimulating them. While some like the eccentric nature of ' +
        'Monkeys, others don\'t trust their sly, restless, and inquisitive nature.</p>'
        '<br />' +
        '<p class="card-text">Although they are clever and creative, Monkeys can\'t always exhibit their talents properly. ' +
        'They like to accept challenges and <strong>prefer urban life</strong> to rural.</p>' +
      '</div>';
}

// Get Rooster's details
function getRoosterDetails(name, yearBorn) {
  // Display the result
  document.getElementById('displayResult').hidden = false;
  result.innerHTML = '';
  result.innerHTML +=
      '<div>' +
        '<h4 class="card-title">' + name + '\'s a Rooster born in ' + yearBorn + '</h4>' +
        '<img id="zodiacImage" src="images/rooster.jpg" class="rounded float-right"/>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky numbers: 5, 7, & 8</span>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky colors: Gold, Brown, & Yellow</span>' +
        '<br />' +
        '<br />' +
        '<p class="card-text">Roosters are always <strong>active</strong>, amusing, and popular within a crowd. Roosters are <strong>talkative,</strong> ' +
        'outspoken, frank, open, honest, and loyal individuals. They like to be the center of attention and ' +
        'always appear attractive and beautiful.</p>' +
        '<br />' +
        '<p class="card-text">Roosters are happiest when they are surrounded by others, whether at a party or just a social gathering. ' +
        'They <strong>enjoy the spotlight</strong> and will exhibit their charm on any occasion.</p>' +
        '<br />' +
        '<p class="card-text">Roosters expect others to listen to them while they speak, and can become agitated if they don\'t. ' +
        'Vain and boastful, Roosters like to brag about themselves and their accomplishments.</p>'
        '<br />' +
        '<p class="card-text">Their behavior of continually seeking the unwavering attention of others annoys people around them at times.</p>' +
      '</div>';
}

// Get Dog's details
function getDogDetails(name, yearBorn) {
  // Display the result
  document.getElementById('displayResult').hidden = false;
  result.innerHTML = '';
  result.innerHTML +=
      '<div>' +
        '<h4 class="card-title">' + name + '\'s a Dog born in ' + yearBorn + '</h4>' +
        '<img id="zodiacImage" src="images/dog.jpg" class="rounded float-right"/>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky numbers: 3, 4, & 9</span>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky colors: Red, Green, & Purple</span>' +
        '<br />' +
        '<br />' +
        '<p class="card-text">Dogs are loyal and honest, amiable and kind, cautious and prudent. Due to having a strong sense ' +
        'of loyalty and sincerity, Dogs will do everything for the person who they think is most important.</p>' +
        '<br />' +
        '<p class="card-text">As Dogs are not good at communication, it is difficult for them to convey their thoughts to others. ' +
        'Therefore, Dogs tend to leave others with <strong>the impression that they have a stubborn personality.</strong></p>' +
        '<br />' +
        '<p class="card-text"><strong>Born with a good nature,</strong> Dogs do not tend to be criminals or seek dishonest gains. ' +
        'They just need a quiet life and a good family and, therefore, forget the ugliness and evil on Earth.</p>'
        '<br />' +
        '<p class="card-text"><strong>Dogs are always ready to help others</strong> and do not care about their own interests, ' +
        'but if they find themselves betrayed by cunning people they will feel shocked and hurt.</p>' +
        '<br />' +
        '<p class="card-text"><strong>When thrown into doubt,</strong> Dogs think the world is evil and complicated. Then they ' +
        'criticize sharply when giving comments on something, and infer all things are ' +
        'according to their pessimistic point of view.</p>' +
      '</div>';
}

// Get Pig's details
function getPigDetails(name, yearBorn) {
  // Display the result
  document.getElementById('displayResult').hidden = false;
  result.innerHTML = '';
  result.innerHTML +=
      '<div>' +
        '<h4 class="card-title">' + name + '\'s a Pig born in ' + yearBorn + '</h4>' +
        '<img id="zodiacImage" src="images/pig.jpg" class="rounded float-right"/>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky numbers: 2, 5 & 8</span>' +
        '<br />' +
        '<span class="badge badge-danger">Lucky colors: Yellow, Gray, Brown, Gold</span>' +
        '<br />' +
        '<br />' +
        '<p class="card-text">Pigs are diligent, compassionate, and generous. They have great concentration: once they set a goal, ' +
        'they will devote all their energy to achieving it. Though Pigs rarely seek help from others, they will ' +
        'not refuse to give others a hand. Pigs never suspect trickery, so they are easily fooled.</p>' +
        '<br />' +
        '<p class="card-text">General speaking, Pigs are relatively calm when facing trouble. No matter how difficult the problems ' +
        'are Pigs encounter, they can handle things properly and carefully. They have a great sense of ' +
        'responsibility to finish what they are engaged in.</p>' +
      '</div>';
}

// To be completed
function handleImage1Click() {
  document.getElementById('image1').style.background = 'green';
  document.getElementById('image2').style.background = 'red';
}

// To be completed
function handleImage2Click() {
  document.getElementById('image1').style.background = 'red';
  document.getElementById('image2').style.background = 'green';
}

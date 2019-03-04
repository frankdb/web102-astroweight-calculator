// Write your JavaScript code here!
var planets = [
  ["Pluto", 0.06],
  ["Neptune", 1.148],
  ["Uranus", 0.917],
  ["Saturn", 1.139],
  ["Jupiter", 2.64],
  ["Mars", 0.3895],
  ["Moon", 0.1655],
  ["Earth", 1],
  ["Venus", 0.9032],
  ["Mercury", 0.377],
  ["Sun", 27.9]
];

const dropdown = document.getElementById("planets");
const output = document.getElementById("output");

planets.forEach((item, index) => {
  let newOption = document.createElement("option");
  let planet = document.createTextNode(planets[index][0]);
  newOption.appendChild(planet);
  dropdown.appendChild(newOption).setAttribute("value", planets[index][0]);
});

const calculateWeight = (weight, planetName) => {
  for (let i = 0; i < planets.length; i++) {
    if (planets[i][0] === planetName) {
      let planetWeight = planets[i][1];
      return Number(weight) * Number(planetWeight);
    }
  }
};

const handleOnClickEvent = e => {
  let userWeight = document.getElementById("user-weight").value;
  let planetName = dropdown.options[dropdown.selectedIndex].value;
  let newElement = document.createElement("h4");
  let newWeight = document.createTextNode(
    `If you were on ${planetName}, you would weigh ${calculateWeight(
      userWeight,
      planetName
    )}lbs!`
  );
  newElement.appendChild(newWeight);
  output.appendChild(newElement);
};

const button = document.getElementById("calculate-button");

button.addEventListener("click", () => {
  console.log(output);
  if (output.hasChildNodes()) {
    output.removeChild(output.childNodes[0]);
  }
  handleOnClickEvent();
});

$(document).ready(function() {
  $("select").formSelect();
});

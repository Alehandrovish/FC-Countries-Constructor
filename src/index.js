"use strict";

function SetCountry(
  title = "unknown",
  capital = "unknown",
  population = "unknown",
  area = "unknown"
) {
  this.title = title;
  this.capital = capital;
  this.population = population;
  this.area = area;
  this.showCoutry = () => {
    return `Country: ${this.title}, capital: ${this.capital}, population: ${this.population} people, area: ${this.area} km^2`;
  };
}

const UKRANE = new SetCountry("Ukraine", "Kyiv", 40997699, 603700);
const GREAT_BRITAIN = new SetCountry(
  "Great Britain",
  "London",
  67791400,
  242495
);

// console.log(UKRANE.showCoutry());
// console.log(GREAT_BRITAIN.showCoutry());

function enumerator(obj) {
  for (let key in obj) {
    if (typeof obj[key] !== "function") {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}
// enumerator(UKRANE);

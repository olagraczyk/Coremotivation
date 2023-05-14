"use strict";

//open and close modals
function openModal(): void {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

//get a random challenge
const challenges: string[] = [
  "10 podciągnięć na gumie",
  "2 podciągnięcia na drążku",
  "3 razy wiszenie na drążku po minutę",
];

function losujChallenge() {}

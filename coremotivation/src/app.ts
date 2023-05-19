"use strict";
//open and close modals
function openModal(): void {
  const challenges: string[] = [
    "10 podciągnięć na gumie",
    "2 podciągnięcia na drążku",
    "3 razy wiszenie na drążku po minutę",
    "3 razy po 20 brazylijskich przysiadów",
    "2 razy deska po minutę",
  ];

  function losujChallenge(): string {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const selectedChallenge = challenges[randomIndex];
    return selectedChallenge;
  }

  const selectedChallenge = losujChallenge();
  const challengeTextElement = document.getElementById("challengeText");
  if (challengeTextElement) {
    challengeTextElement.textContent = selectedChallenge;
  }

  document.getElementById("modal").style.display = "block";

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
}

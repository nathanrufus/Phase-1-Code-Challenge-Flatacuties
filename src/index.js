// Your code here
const characterBar = document.querySelector("#character-bar");

fetch("http://localhost:3000/characters")
  .then(response => response.json())
  .then(characters => {
    characters.forEach(character => {
      const span = document.createElement("span");
      span.textContent = character.name;
      span.addEventListener("click", () => {
        showCharacterDetails(character);
      });
      characterBar.appendChild(span);
    });
  })
  .catch(error => console.error(error));

  function showCharacterDetails(character) {
    const name = document.querySelector("#name");
    const image = document.querySelector("#image");
    const voteCount = document.querySelector("#vote-count");
    const votesForm = document.querySelector("#votes-form");
    const resetButton = document.querySelector("#reset-btn");
  
    name.textContent = character.name;
    image.src = character.image;
    image.alt = character.name;
    voteCount.textContent = character.votes;
  
    votesForm.addEventListener("submit", event => {
      event.preventDefault();
      const votesInput = document.querySelector("#votes");
      const votes = parseInt(votesInput.value);
      if (!isNaN(votes)) {
        character.votes += votes;
        voteCount.textContent = character.votes;
        votesInput.value = "";
      }
    });
  
    resetButton.addEventListener("click", () => {
      character.votes = 0;
      voteCount.textContent = character.votes;
    });
  }

  // Code here
document.addEventListener("DOMContentLoaded", () => {
  //Call the function that will automatically run renderBeers)
  fetchData();
});
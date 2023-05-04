const CharacterName = document.querySelector(".CharacterName");
const CharacterHitpoints = document.querySelector(".CharacterHitpoints");

const url = "http://localhost:3000/characters";
fetch(url, {
  method: "get",
  headers: new Headers({
    "Content-Type": "application/json"
  })
})
  .then(function (response) {
    // Convert to JSON
    return response.json();
  })
  .then(function (jsonResponse) {
    console.log(jsonResponse);
    CharacterName.innerHTML = jsonResponse.data[5].name;
    CharacterHitpoints.innerHTML = jsonResponse.data[5].hitpoints;
  });

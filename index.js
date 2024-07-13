let catData = [];

const fetchCat = async () => {
  await fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => (catData = data));

  console.log(catData);
};

const catDisplay = async () => {
  await fetchCat();

  document.body.innerHTML = catData.map(
    (cat) =>
      `

    <div class="catCard">
    <h1>La galerie des chats</h1>

  <img src=${cat.url} alt="image de ${cat.url}">

  <h3>${cat.id}  = "l'identifiant du chat"</h3>

  <q>Mathias_<span class="red">D</span><span class="yellow">e</span><span class="green">v</span></q>
  
  </div>
  `
  );
};
catDisplay();

setInterval(() => {
  catDisplay();
}, 3000);

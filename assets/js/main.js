const AllPokemons = pokemons.map((e, i) => {
  return {
    id: i,
    num: e.num,
    name: e.name,
    img: e.img,
    type: e.type,
    height: e.height,
    weight: e.weight,
    candy: e.candy,
    candy_count: e.candy_count,
    egg: e.egg,
    spawn_chance: e.spawn_chance,
    avg_spawns: e.avg_spawns,
    spawn_time: e.spawn_time,
    multipliers: e.multipliers,
    weaknesses: e.weaknesses,
    next_evolution: e.next_evolution,
  };
});
AllPokemons.forEach((e) => {
  let newCard = document.createElement("div");
  let wrapper = $("#card-items");
  newCard.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
  newCard.innerHTML = `                    
                        <div class="card ">
                            <div class="card-img text-center">
                                <img src="${e.img}" class="img-fluid" alt="img" width="157px "
                                    height="157px">
                            </div>
                            <span class="line"></span>
                            <div class="card-body">
                            <div class="card-like"> <i class="fa-regular fa-heart"></i></div>
                                <div class="card-title">
                                    <p>${e.name}</p>
                                </div>
                                <div class="card-category">
                                    <p>${e.candy}</p>
                                </div>
                                <div class="card-info">
                                    <div class="d-flex">
                                        <h5 class="card-info-kg">${e.weight}</h5>
                                        <h5 class="card-info-age">${e.candy_count} age</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
             `;

  wrapper.appendChild(newCard);
  $(".card-like").addEventListener("click", (e) => {
    console.log(e.target);
  });
});

// finde function
const findePokemone = function (title) {
  const searchPokemone = AllPokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(title);
  });
  renderPokemone(searchPokemone);
};
$(".search-pokemone").addEventListener("input", (e) => {
  e.preventDefault();
  $("#card-items").innerHTML = "";
  const searchTerm = $(".search-pokemone").value.trim().toLowerCase();
  const regexpSearch = new RegExp(searchTerm, "gi");
  const result = searchTerm.match(regexpSearch);
  findePokemone(result);
  console.log(result);
});
// render function
function renderPokemone(searchPokemone) {
  searchPokemone.forEach((e) => {
    let newCard = document.createElement("div");
    let wrapper = $("#card-items");
    newCard.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
    newCard.innerHTML = `                    
                        <div class="card ">
                            <div class="card-img text-center">
                                <img src="${e.img}" class="img-fluid" alt="img" width="157px "
                                    height="157px">
                            </div>
                            <span class="line"></span>
                            <div class="card-body">

                            <div class="like"> <i class="fa-solid fa-heart"></i></div>
                                <div class="card-title">
                                    <p>${e.name}</p>
                                </div>

                                <div class="card-category">
                                    <p>${e.candy}</p>
                                </div>

                                <div class="card-info">
                                    <div class="d-flex">
                                        <h5 class="card-info-kg">${e.weight}</h5>
                                        <h5 class="card-info-age">${e.candy_count} age</h5>
                                    </div>
                                </div>


                            </div>
                        </div>
             `;
    wrapper.appendChild(newCard);
  });
}


// click like start

$(".click-like i").addEventListener('click', () => {
  $(".sidebar").classList.add('block')
})
$(".sidebar-back i").addEventListener("click", () => {
  $(".sidebar").classList.remove("block");
});
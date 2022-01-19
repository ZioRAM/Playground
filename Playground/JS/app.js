// const api_url= "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=171586c59cef540df3c5a68aeaffd948&hash=c862d1e875614852cac5ef31b0a169f5"

// async function fetched(){
// const dataj=await fetch(api_url);
// const datar=await dataj.json()
// return datar;
// }

// fetched().then((datos)=>console.log(datos));

const api_url= "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=171586c59cef540df3c5a68aeaffd948&hash=c862d1e875614852cac5ef31b0a169f5"
var info = []
async function traerDatos() {
  let response = await fetch(api_url, {
    method: "GET",
  })
  
  let data = await response.json();
  return data;
}
async function funcionNueva() {
  await traerDatos().then(datos => { info= datos.data.results});
  console.log(info)
}
funcionNueva()

Vue.component('navbar', {
    template: `<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a id="navy" class="navbar-brand" href="../HTML/index.html">MARVEL CAVE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="navy" class="navbar-nav me-auto mb-2 mb-lg-0">
          <li id="navy" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              What's in here?
            </a>
            <ul id="navy" class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a id="navy" class="dropdown-item" href="#">Movies</a></li>
              <li><a id="navy" class="dropdown-item" href="#">Actors</a></li>
              <li><hr id="navy" class="dropdown-divider"></li>
              <li><a id="navy" class="dropdown-item" href="#">Characters</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input id="navy2" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-warning" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`
})
new Vue({el:'#nav',});

Vue.component('footy',{
  template:`<footer  class="foo d-flex justify-content-around">
  <div class="col d-flex align-items-center justify-content-center">
       © Copyright 2022
  </div>
  <div class="col d-flex align-items-center justify-content-center">
     Team 2
  </div>
  <div class="col d-flex align-items-center justify-content-end">
      Contact:
  </div>
  <div class="col d-flex flex-row align-items-center justify-content-evenly">
      <a class="links" href="">Pato</a>
      <a class="links" href="">Sele</a>
      <a class="links" href="">Meli</a>
      <a class="links" href="">Eze</a>
  </div>
  
</div>
</footer>`
})
new Vue({el:'#foot',});


const api_url2= "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=171586c59cef540df3c5a68aeaffd948&hash=c862d1e875614852cac5ef31b0a169f5"

var info = []
async function traerDatos(api) {
  let response = await fetch(api, {
    method: "GET",
  })

  let data = await response.json();
  return data;
}

var card = new Vue({ el:'#card', 
  data:{
  cartas:[],  
  // titulo:[],
  // url:[]
}
}); 

async function mostrarDatos(api) {
  await traerDatos(api).then(datos => { info = datos.data.results});

 
let eso = info;
card.cartas = eso;
// card.titulo = eso[0].title
// card.url = eso[0].thumbnail.path +"."+ eso[0].thumbnail.extension

}

Vue.component('navbar', {
  template: `<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="../HTML/index.html">MARVEL CAVE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Events</a></li>
              <li><a class="dropdown-item" href="#">Series</a></li>
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
new Vue({ el: '#nav', });


Vue.component('footy', {
  template: `<footer  class="foo d-flex justify-content-around">
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
new Vue({ el: '#foot', });


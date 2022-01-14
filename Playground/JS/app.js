const api_url= "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=171586c59cef540df3c5a68aeaffd948&hash=c862d1e875614852cac5ef31b0a169f5"

async function fetched(){
const dataj=await fetch(api_url);
const datar=await dataj.json()
return datar;
}

fetched().then((datos)=>console.log(datos));
function ler() {
  if (this.readyState == 4 && this.status == 200) {
    const doc = this.responseXML;
    const metadados = doc.querySelectorAll("metadados");
    for (let i = 0; i < metadados.length; i++) {
      const nome = metadados[i].querySelector("nome").textContent;
      botoes(i, nome, doc);
    }
  }
}

function Ajax(get, url, funcao) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = funcao;
  xhttp.open(get, url, true);
  xhttp.send();
}



function youtube() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    xhr.responseType = 'json';
    var data = xhr.response;
    var title = data.items[0].snippet.title;
    var channelTitle = data.items[0].snippet.channelTitle;
    console.log('Title:', title);
    console.log('Channel:', channelTitle);
  }
}

Ajax("GET", "projetoux.xml", ler);
Ajax("GET", "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=",youtube)

/*━━━━━━━━━━━━━━━━❰✭ ✭❱━━━━━━━━━━━━━━━━*/




function botoes(indice, nome, doc) {
  const btn = document.createElement("button");
  btn.innerHTML = nome;
  btn.style = `
    color:white ;
    font-size:150%;
    font-family:"Amatic SC", cursive; 
    font-weight:bold; 
    background-color:rgb(70, 28, 18); 
    cursor:pointer;
`;

  btn.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'white';
    this.style.color = 'black';
  });

  btn.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'rgb(70, 28, 18)';
    this.style.color = 'white';
  });

  btn.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'rgb(70, 28, 18)';
    this.style.color = 'white';
  });


  btn.addEventListener("click", function () {
    const metadados = doc.querySelectorAll("metadados")[indice];
    const titulo = metadados.querySelector("titulo").textContent;
    const nome = metadados.querySelector("nome").textContent;
    const descricao = metadados.querySelector("descricao").textContent;
    const resoluc = metadados.querySelector("resoluc").textContent;
    const audio = metadados.querySelector("audio").textContent;
    const streng = metadados.querySelector("streng").textContent;
    const qualid = metadados.querySelector("qualid").textContent;
    const linque = metadados.querySelector("linque").textContent;

    document.querySelector("h2").innerHTML = indice;
    document.querySelector("h4").innerHTML = titulo;
    document.querySelector("p").innerHTML = descricao;
    document.querySelectorAll("p")[1].innerHTML = `Resol: ${resoluc}`;
    document.querySelectorAll("p")[2].innerHTML = `Áud: ${audio}`;
    document.querySelectorAll("p")[3].innerHTML = `${streng} de relevância`;
    document.querySelectorAll("p")[4].innerHTML = `o video é sobre ${qualid}`;
    const playerSection = document.querySelector('section.player');
const iframe = playerSection.querySelector('iframe');
iframe.src = linque;
  });
  document.querySelector('section.video').appendChild(btn);
}

const formulario = document.querySelector('.formulario');
const player = document.querySelector('#player');
const video = document.querySelector('.video');
const config = document.querySelector('.config');

formulario.style.display = 'none';
player.style.display = 'none';
video.style.display = 'none';
config.style.display = 'none';

const btnFormulario = document.createElement('button');
btnFormulario.textContent = 'Toggle Formulário';
btnFormulario.addEventListener('click', function() {
    if (formulario.style.display === 'none') {
        formulario.style.display = 'block';
    } else {
        formulario.style.display = 'none';
    }
});
document.body.appendChild(btnFormulario);

const btnPlayer = document.createElement('button');
btnPlayer.textContent = 'Toggle Player';
btnPlayer.addEventListener('click', function() {
    if (player.style.display === 'none') {
        player.style.display = 'block';
    } else {
        player.style.display = 'none';
    }
});
document.body.appendChild(btnPlayer);

const btnConfig = document.createElement('button');
btnConfig.textContent = 'Toggle Config';
btnConfig.addEventListener('click', function() {
    if (config.style.display === 'none') {
        config.style.display = 'block';
    } else {
        config.style.display = 'none';
    }
});
const bodye = document.querySelector('body');
document.bodye.appendChild(btnConfig);

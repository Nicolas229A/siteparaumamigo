function changeText(element, text) {
  document.querySelector(element).innerHTML = text;
}

function changeImage(arquivo, id) {
  const imagem = document.getElementById(id);

  imagem.src = `./publico/img/${arquivo}`;
}

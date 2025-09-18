let listaAmigos = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor digite um nome válido!");
    return;
  }

  if (listaAmigos.includes(nome)) {
    alert("Esse nome já foi adicionado!");
    return;
  }

  listaAmigos.push(nome);
  input.value = "";

  atualizarLista();
}

function atualizarLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = "";

  listaAmigos.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("Todos os amigos já foram sorteados ou nenhum foi adicionado.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
  const nomeSorteado = listaAmigos.splice(indiceSorteado, 1)[0];

  const ulLista = document.getElementById('listaAmigos');
  ulLista.innerHTML = "";

  const ulResultado = document.getElementById('resultado');
  ulResultado.innerHTML = "";

  const li = document.createElement('li');
  li.textContent = `Seu amigo secreto é: ${nomeSorteado}`;
  ulResultado.appendChild(li);
}

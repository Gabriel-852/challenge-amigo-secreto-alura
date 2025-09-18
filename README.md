# Projeto Amigo Secreto

Este é um projeto simples de Amigo Secreto feito com HTML, CSS e JavaScript. O usuário pode adicionar nomes à lista de amigos e sortear aleatoriamente um amigo secreto dentre os nomes adicionados, sem repetição.

---

## Funcionalidades

- **Adicionar nomes** à lista de amigos.
- **Validar entrada** para evitar nomes vazios ou duplicados.
- **Exibir a lista atualizada** de amigos na tela.
- **Sortear um amigo secreto aleatório** da lista, removendo-o para evitar repetição.
- Mostrar o amigo secreto sorteado na tela.

---

## Tecnologias utilizadas

- HTML5
- CSS3 (estilização básica)
- JavaScript (ES6+)

---

## Como usar

1. Digite o nome de um amigo no campo de texto e clique em "Adicionar".
2. Os nomes adicionados aparecerão em uma lista abaixo.
3. Clique no botão "Sortear amigo" para revelar um amigo secreto aleatório da lista.
4. O nome sorteado será removido da lista para que não seja repetido.

---

## Estrutura do projeto

- `index.html`: arquivo principal com a estrutura da página.
- `style.css`: arquivo de estilos 
- `app.js`: arquivo JavaScript com as funções de adicionar amigos, atualizar lista e sortear.

---

## Implementação

O script principal mantém um array `listaAmigos` onde os nomes são armazenados.  
A função `adicionarAmigo()` valida e insere nomes na lista.  
A função `atualizarLista()` atualiza a lista visível no HTML.  
A função `sortearAmigo()` sorteia um nome aleatório e o remove da lista, evitando repetições.

---

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

## Licença

Este projeto é open source e está disponível para uso e modificação livre.

---
## Site
Acesse o projeto com esse link: https://gabriel-852.github.io/challenge-amigo-secreto-alura/
---
*Desenvolvido para o desafio Amigo Secreto da Alura.*

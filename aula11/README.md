# Aula 11

O DOM(Document Object Model) é uma interface que representa como o documento HTML é lido pelo seu browser. Ele também define como acessar esses objetos. Assim, com javascript, podemos acessar elementos da página HTML. 

## Exercício 1

Para acessar um elemento do DOM via javascript, utilize os seguintes comandos:

```javascript
// Acessa o elemento de id "some-id"
const p = document.querySelector("#some-id");
```

Também é possível fazer o mesmo com
```javascript
// Acessa o elemento de id "some-id"
const p = document.getElementById("some-id")
```

Para pegarmos o texto do elemento, usamos:
```javascript
// Imprime na tela o texto html
const p = document.getElementById("some-id")

console.log(p.innerHTML)

// Escreve no texto do elemento um novo texto!
p.innerHTML = "Novo texto!"
```

Na pasta `questão02` crie uma função no arquivo `script.js` que some dois números. Escreva o resultado no elemento de id `sum`

## Exercício 2

Para adicionar um evento ao seu elemento HTML, você primeiro seleciona o elemento e então usa `elem.addEventListener('event-name')`.

```javascript
// Seleciona todos os elementos com classe "section"
const section = document.querySelector("#section");

// Adiciona um evento de click no elemento 1
section.addEventListener("click", () => {
	section.style.backgroundColor = "red"
});
```

Na pasta `questão03 adicione um evento que:

a) Muda o texto do elemento
b) Muda a cor do elemento
c) Muda a cor do elemento. Ao clicar de novo, volta para a cor inicial

## Exercício 3

Para acessar valores de elementos inputs via cliente-side, usamos
```javascript
const inp = document.querySelector("#some-input-id");

console.log(inp.value);
```

Para adicionar um evento de tecla pressionada, fazemos
```javascript
const inp = document.querySelector("#some-input-id");

// adiciona evento de keypress ao inp de id "some-input-id"
inp.addEventListener("keypress", () => {
	console.log(inp.value)
});
```

No `script.js` do arquivo `questão03` crie uma lógica que o paragráfro de id
`result` atualize seu texto para o que está no `input` a cada tecla pressionada.

## Exercício 4

Crie um objeto com dados como, nome, sobrenome, idade, data de nascimento e outras informações
que você desejar. Para cada informação, crie um elemento paragráfo no html e coloque os valores
das propriedades do objeto via javascript nos elementos.

## Exercício 5

No arquivo html tem uma imagem de uma lâmpada desligada. Desenvolva uma lógica que ao clicar na imagem, troque para uma lâmpada ligada e vice-versa. As imagens estão na pasta `questão05` junto com os arquivos
necessário para fazer o exercício.

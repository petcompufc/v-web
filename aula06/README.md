# Funções e Promises

Nessa aula vamos aprender o conceito de função e promise no javascript.

## Funções

![function](../.github/aula06/function.png)

Partindo do conceito da matemática, função é um mecanismo ou regra que transforma uma quantidade em outra. Intuitivamente pode se pensar que é uma máquina que pega um valor e retorna outro. Para a mesma entrada, sempre vai ter a mesma saída. Assim podemos ter como propriedade chave de uma função a consistência.

Vamos aprender a declarar uma função javascript de duas formas:

```javascript
function fnName() {
  ...
}
```

```javascript
const fnName = () => {
  ...
}
```

Uma função javascript pode receber um valor de entrada ou não. Para isso definimos na assinatura da função os parâmetros que podem ser passados para ela.

```javascript
function add(a, b) {
  return a + b;
}
```

Diferente de outras linguagens, você pode chamar essa função `add` sem passar argumentos para os dois parâmetros dela.

```javascript
add();
```

Assim, os valores de a e b serão `undefined`.

Eu posso ter argumentos além de a e b na função `add` e nenhum erro vai acontecer.

```javascript
add(1,2, 3, 4, 5, 6);
```

Para acessar todos os argumentos passado para a função, temos uma propriedade que pode ser acessada apenas dentro da função chamada `arguments`. Ela pega todos os valores, inclusive o de `a` e `b`.

Javascript tem funções de primeira classe. Isso quer dizer que você pode passar funções como valores de variáveis, pode passar uma função para outra função e uma função pode retornar uma função.

```javascript
function foo(fn) {
  fn();
}

foo(function() {
  console.log("waaat?");
});
```

Em programação orientada a objeto é comum, em algumas linguagens, o uso da palavra `this`.

```javascript
class Foo {
  constructor() {
    this.x = "FOOOO!";
  }

  say() {
    return this.x;
  }
}

const foo = new Foo();
console.log(foo.x); // "FOOOO!"
```

Nesse caso, `this` se refere ao objeto criado em `const foo = new Foo();`. Observe que diferente de java, o valor de this é definido no momento de invocação e não no momento de declaração.

- Quando eu chamo `foo.x`, o valor de `this` vai se referir ao objeto guardado em `foo`.

- Quando eu chamo `add`, o valor de `this` dentro da função se refere a `window`.

- Quando eu crio uma função na forma `const foo = () => ...`, o valor de `this` se refere ao contexto exterior a função.

## Promises

Suponha um mundo ideal em que todo dado computado retorne um valor imediatamente. Logo, uma requisição a uma certa informação em um banco de dados tem retorno instantâneo. E caso o usuário faça alguma interação com o sistema, a resposta seria de novo imediata. Isso é uma situação completamente impossível ate o momento. E no ambiente javascript ainda lidamos no browser com programação não concorrente. Temos uma unica thread que executa javascript.

Para lidar com computação assincrona, ou seja, computação em que eu não sei o resultado imediato, temos os callbacks e as promises. Callbacks são funções que executam apenas quando algo(um evento talvez) acontece. Por exemplo:

```javascript
setTimeout(function() {
  console.log("AAAAAA");
}, 1000)
```

Aqui a função vai ser executada depois de 1000 milisegundo(1 segundo).

Uma promise é um objeto que representa a eventual conclusão ou falha de uma operação assincrona. Essa é a definição dada pela [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Usando_promises), 

```javascript
const promise = new Promise((resolve, reject) => {
  if (...) {
    resolve()
  }

  reject()
});
```

reescrevendo o exemplo do `setTimeout`, temos:

```javascript
const wait = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

wait(1000).then(() => {
  console.log("AAAAAAA");
});
```

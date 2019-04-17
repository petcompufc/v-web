# Javascript

Nessa aula começa o estudo do Javascript. Vamos aprender a criar variáveis, objetos, funções(é um objeto também) e muito mais.

## Executando Javascript no terminal

Para executar javascript no terminal, basta digitar `node <nome-arquivo>.js`

## Linkando no html

Para linkar o seu javascript no html, basta adicionar uma tag `<script></script>` no final de `<body></body>`.

```html
<body>
  .
  .
  .
  <script src="myfile.js"></script>
</body>
```

ou escreva inline mesmo(não é recomendado fazer isso devido a divisão de responsabilidades e manutenibilidade do código).

```html
<body>
  .
  .
  .
  <script>
    console.log("Hello, world!");
  </script>
</body>
```

## Variáveis

A partir do ES6, existem três maneiras de declarar uma variável.

- Usando a palavra chave `var`
- Usando a palavra chave `const`
- Usando a palavra chave `let`

Ao usar `var`, ocorre um hoisting, ou seja, a variável fica no topo do contexto.

```javascript
console.log(foo); // undefined mas foi declarada

var foo = 1;

```

```javascript
console.log(foo); // error!

let foo = 1;
```

Usando o `const` você cria uma constante e assim essa variável nunca pode ser alterada.

```javascript
const pi = 3.14;

pi = 3; // error!
```

O `let` cria uma variável que só existe no escopo do bloco em que ela foi declarada.

```javascript
let baz = "wat";

if (true) {
  let fizz = "wat1";
  console.log(fizz); // "wat1"
}

console.log(baz); // "wat"
console.log(fizz); // undefined
```

## == versus ===

Para comparar valores, é utilizado o operador `==` ou `===`. Porém, o `==`, antes de comparar, ele busca converter os operadores para o mesmo tipo.

```javascript
5 == "5" // true
5 === "5" // false

undefined == null // true
undefined === null // false
```

## Objetos

Para declarar um objeto, basta colocar suas propriedades e funções dentro de `{}`.

```javascript
let obj = {
  name: "Phillipe",
  age: 20
};
```

## Arrays

Para criar arrays, basta colocar os elementos dessa array entre `[]`.

```javascript
let arr = [1, 2, 3, 4];

console.log(arr[1]); // 2
console.log(arr[3]); // 4
```

## Map

O objeto Map é um conjunto de chave/valor em que diferente do `Object`, suas chaves não aceitam apenas string e números.

```javascript
let mymap = new Map([["name", "Phillipe"], ["age", 20]]);

console.log(mymap.get("name")); // "Phillipe"
console.log(mymap.get("age")); // 20
```

O Map tem métodos e propriedades importantes para remover, adicionar e procurar elementos. Ele tem uma performance melhor que o objeto em casos que precise de muitas operações de adição e remoção de elementos.

```javascript
let mymap = new Map([["firstname", "Phillipe"], ["lastname", "Queiroz"]]);

console.log(mymap.size); // 2

mymap.set("age", 20);
```

## Set

O objeto `Set` é um conjunto de valores únicos.

```javascript

let myset = new Set([1, 2]);

console.log(myset.size); // 2

myset.add(3);
myset.add(4);

myset.delete(1);

console.log(myset.has(1)); // false
console.log(myset.has(2)); // true
```

## Estruturas condicionais

Existem casos em que é necessário fazer um desvio no código baseado na lógica do seu problema. Em javascript existem duas estruturas condicionais principais.

```javascript
if (condition) {
  console.log("wat");
}

if (condition) {
  console.log("wat");
} else {
  console.log("when");
}

if (condition) {
  console.log("why");
} else if (condition) {
  console.log("wat");
} else {
  console.log("when");
}
```

```javascript
switch(condition) {
  case 0:
    console.log("wat");
    break;
  case 1:
    console.log("why");
    break;
  case 2:
    console.log("when");
    break;
  default:
    console.log("who");
}
```

## Estruturas de laço

Para casos que seja necessário uma repetição ou iteração, existem algumas estruturas de laço que podem fazer isso.

```javascript
for(let i = 0; i <= 5; i++) {
  console.log(i);
}
```

```javascript
let i = 0;

while(i <= 5) {
  console.log(i);
  i++;
}
```

```javascript
let obj = {
  name: "Phillipe",
  age: 20,
};

for (prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}
```

```javascript
let obj = {
  name: "Phillipe",
  age: 20
};

for (value in obj) {
  console.log(value);
}
```
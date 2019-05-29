# Vue js

Nessa aula continua-se a explicação de componentes em Vue.js.

## Instalação

Antes de iniciar com aula de hoje, vamos aprender a instalar o Vue.js
para iniciar um projeto. Para instalar o Vue CLI, precisamos ter o [node.js](https://nodejs.org/pt-br/) e o [npm](https://www.npmjs.com/). Verifique que está instalando utilizando:

```shellscript
$ node --version
```

```shellscript
$ npm --version
```

Instale o Vue CLI

```shellscript
$ npm i -g @vue/cli
```

## Iniciando um projeto

Inicie o seu projeto Vue com o comando 
```shellscript
$ vue create <nome-projeto>
```

Uma pasta com `<nome-projeto>` vai ser criada com o vue.js ja configurado pronto para você iniciar seu trabalho.

## Executando o projeto

Execute o projeto com o comando
```shellscript
$ npm run serve
```

**Observações**

Executando o projeto, o servidor fica escutando se foi feito alguma alteração no projeto. Caso isso seja verdadeiro, ele atualiza automaticamente e assim facilita nossa vida de desenvolvimento.

## Nomes de Componentes

Foi ensinado na aula anterior que para criar um componente devemos fazer o seguinte:
```javascript
Vue.component('nome-componente', { ... })
```

Existem dois padrões que podemos passar para um componente

**kebab-case**:
```javascript
Vue.component('nome-componente', { ... })
```

**PascalCase**:
```javascript
Vue.component('NomeComponente', { ... })
```

A única diferença entre os dois está na forma que você pode chamar esse componente em seu template(html, pug, etc). Caso, você tenha criado em kebab-case, no template, a única forma de declarar esse componente é em também
em kebab-case.

```html
<nome-componente></nome-componente>
```

Em PascalCase, é possível declarar o nosso componente no template em PascalCase ou kebab-case.

```html
<nome-componente></nome-componente>
```

```html
<NomeComponente></NomeComponente>
```

## Componentes Globais

Declarando um componente da forma citada acima, faz com que ele seja visível globalmente.
Qualquer outro componente pode declarar ele em seu template. Nem sempre isso é o desejado,
portanto existe uma propriedade `components` que registra todos os componentes que estarão
visível em seu template. Nenhum outro lugar vai saber que esses componentes registrados existem
e portanto, caso você chame esse componente, o Vue.js joga um erro.

```javascript
const component1 = { ... }
const component2 = { ... }

Vue.component('meu-componente', {
	components: {
		'component-1': component1,
		'component-2': component2
	},
	...
})
```

## Props em Componentes

Muitas tags HTML possuem atributos. Nossos componentes podem também ter seus proprios atributos. basta que utilizemos a propriedade `props` na configuração do componente.

Assim, como componentes, os atributos podem ser definidos em PascalCase ou kebab-case. Porém, no template, ele
sempre deve estar em kebab-case.

```javascript
Vue.component('meu-componente', {
	props: [
		'propTitle',
		'msg'
	],
	...
});
```

Podemos passar o tipo de dado que esperamos em cada atributo. Assim, em vez de passar uma Array para nossa propriedade `props`, passamos um Object

```javascript
Vue.component('meu-componente', {
	props: {
		propTitle: String,
		msg: String
	},
	...
});
```

Assim como você também pode definir mais de um tipo, um valor padrão, caso não seja passado nenhum e se aquele atributo é obrigatório ou não.

```javascript
Vue.component('meu-componente', {
	props: {
		propA: [String, Number],
		propB: {
			type: Number,
			required: true,
		},
		propC: {
			type: Boolean,
			default: false
		},
	}
});
```

## Slots

Em muitos casos, queremos passar alguma informação dentro de nossa tag:
```html
<h1>Algum texto aqui!</h1>
```

Para fazer isso em nossos componentes, o Vue.js fornece `<slot></slot>`. Assim podemo fazer o seguinte no template de nosso componente:
```html
<button>
	<slot></slot>
</button>
```

E quando o componente for chamado, podemos fazer:
```html
<my-button>
	Clique aqui!
</my-button>
```

Assim, teremos um botão com um texto Clique aqui renderizado em nossa tela.

Podemos definir valores padrões para caso não seja passado nenhum valor.

```html
<button>
	<slot>Click!</slot>
</button>
```

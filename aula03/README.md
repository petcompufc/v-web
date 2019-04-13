# Grid Layout

Grid Layout é um sistema bidimensional para criação de layouts no CSS.

## Definições

**Grid**: interseção de linhas horizontais e verticais.

![grid](../.github/aula03/grid.png)

No html os itens podem ter elementos nível de bloco e elementos inline. Elementos nível de bloco são aqueles que ao serem declarados, são rederizados na linha seguinte. Elementos inline são aqueles que quando declarado, continuam no mesmo alinhamento que o item antecessor.

*exemplo de elemento nível de bloco*:
```html
<p>Some text here</p>
<p>Some text here</p>
```

*exemplo de elemento inline*:
```html
<img src="some-src-here" />
<img src="some-src-here" />
```

*Observação*: Observe o exemplo no navegador e tire suas conclusões.

**Grid container**: Todo item que possui em sua regra estilo a propriedade `display: grid` é
chamado de **grid container**.

**Grid items**: Todos itens imediatamente dentro de um **grid container** é considerado um **grid item**.

*exemplo*:

```html
<section id="grid-container">
  <section class="grid-item"></section>
  <section class="grid-item"></section>
  <section class="grid-item"></section>
  <section class="grid-item"></section>
</section>
```

**Grid Track**: É a área entre duas linhas horizontais.
![grid track](../.github/aula03/grid-track.png)

**Grid Cell**: É uma célula do grid. Semelhante a célula de uma tabela no Excel.
![grid cell](../.github/aula03/grid-cell.png)

**Grid Area**: É a união entre duas ou mais células.
![grid area](../.github/aula03/grid-area.png)

**fr**: medida que indica uma certa fração do espaço disponível. 1fr indica uma fração do espaço disponível enquanto 2fr indica 2 frações do espaço disponível e assim sucessivamente.

## Propriedades CSS para grid layout

Primeiramente escolha qual box vai ser o grid container. Após isso, passe para a box a propriedade `display: grid`.

```html
<section id="box-father">
  <section></section>
  <section></section>
  <section></section>
</section>
```

No código acima escolhemos a tag `section` que contém `id="box-father"` para ser o grid container:

```css
#box-father {
  display: grid;
}
```

Agora vamos definir as linhas e colunas desse grid.

```css
#box-father {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
}
```

Observe os valores `1fr 2fr 1fr` passado para `grid-template-columns`. Traduzindo, definiu-se 3 colunas em que a primeira e a terceira tem uma fração do espaço disponível de tamanho e a segunda tem duas frações do espaço disponível de tamanho. Mas veja que para formar uma coluna, é preciso de duas linhas verticais, logo visualize dessa forma:

`| col1 | col2 | col3 |`

e assim note que tem 4 linhas verticais para formar 3 colunas no grid. O mesmo é válido para as linhas. A propriedade `grid-template-rows` tem os valores `1fr 2fr 1fr`. Traduzindo, definiu-se 3 grid tracks em que a primeira e a terceira tem uma fração do espaço disponível de tamanho e a segunda tem duas frações do espaço disponível de tamanho. Mas veja também que para formar um grid track, é preciso de duas linhas horizontais, logo:

```
------
row 1
------
row 2
------
row 3
------
```

Sabendo disso, é possível posicionar os grid-items.

```html
<section id="box-father">
  <section class="box-items box1"></section>
  <section class="box-items box2"></section>
  <section class="box-items box3"></section>
</section>
```

```css
#box-father {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}

.box2 {
  grid-column-start: 1;
  grid-column-start: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}

.box3 {
  grid-column-start: 1;
  grid-column-start: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
```

Veja que foi acrescentado muitas regras repetidas para cada grid item. Para fazer o posicionamento dos itens de forma mais simplificada, é possível definir áreas.

```css
.box1 {
  grid-area: box1;
}

.box2 {
  grid-area: box2;
}

.box3 {
  grid-area: box3;
}
```

Então na regra de estilo `#box-father`

```css
#box-father {
  .
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
   "box1 box1 box1"
   "box2 box2 box2"
   "box3 box3 box3";
}
```

Portanto temos as principais regras de estilo da especificação de grid layout para construir nossos layout com css.

## Exercício

No arquivo `index.html` tem algumas informações da banda pink floyd e também definido o que é cada conteúdo(cabeçalho, conteúdo principal, rodapé, etc). Desenvolva um layout com o que aprendeu nessa aula para esse conteúdo.

## Referências

[MDN guides](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout)
[CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)

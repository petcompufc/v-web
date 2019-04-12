# Flexbox

Flexbox muda os filhos para a organização flexível.

## Padrões
Direção -- Padrão `row`, horizontal

Eixo Principal -- Segue a direção

Eixo Transversal -- Perpendicular ao Eixo Principal

### Flex Container ( outer div -- parent element )
| CSS | Valores | Descrição | Padrão |
| --- | --- | --- | --- |
| `display` | `flex` | Aplica flexbox num elemento. | `block` |
| `flex-direction` | `row` <br> `column` | Define o **Eixo Principal** | `row` |
| `justify-content` | `flex-start` <br> `flex-end` <br> `center` <br> `space-around` <br> `space-between` | Organização dos items de um container no **Eixo Principal.** | `flex-start` |
| `align-items` | `flex-start` <br> `flex-end` <br> `center` <br> `stretch` <br> `baseline` | Organização dos items de um container no **Eixo Transversal.** | `flex-start` |
| `flex-wrap` | `wrap` <br> `nowrap` | Comportamento dos items do Flex em relação ao tamanho (caso não caibam na tela) | `nowrap` |
| `flex-flow` | `row nowrap` <br> `row wrap` <br> `column nowrap` <br> `column wrap` <br> `row reverse` <br> `column reverse`  | Atalho para `flex-direction` + `flex-wrap` | `row nowrap` |

### Flex Items (elementos filhos)
CSS | Valores | Descrição | Padrão
--- | --- | --- | ---
`align-self` | os mesmos de `align-items` | Sobrescreve a propriedade `align-items` do container | -
`order` | [número] | Ordem dos elementos filhos | Ordem da árvore

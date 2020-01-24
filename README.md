## Userful Functions é uma biblioteca para ajudar no desenvolvimento web utilizando JavaScript.

### A biblioteca e composta por algumas classes:
- SeekTo: Pesquisa de valores em string.
- ConvertTo: Conversão de valores.

------------


### SeekTo
#### Métodos

- *quantityOfTimes():* Retorna a quantidade de vezes que valor informado se repete na string;

```javascript
const pesquisar = new SeekTo("Buscando conteúdo")
pesquisar.quantityOfTimes("do")
```

------------


### ConvertTo

#### Métodos
- *currencyToNumber():* Conversão de moeda para numero.

```javascript
const converter = new ConvertTo("R$ 1.500,50")
let retorno = converter.currencyToNumber()
```
// Retorno: 1500.50


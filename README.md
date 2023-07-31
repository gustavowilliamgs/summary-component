# Frontend Mentor - Results summary component solution

Esta é uma solução para o desafio [Results summary component challenge do Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV) no Frontend Mentor. Os desafios do Frontend Mentor ajudam a melhorar suas habilidades de codificação através da construção de projetos realistas.

## Tabela de conteúdos

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
- [Autor](#autor)

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal para a interface, dependendo do tamanho da tela de seus dispositivos
- Ver estados de hover e foco para todos os elementos interativos na página
- **Bônus**: Usar dados JSON locais para preencher o conteúdo dinamicamente

### Links

- URL da solução: [Github](https://github.com/gustavowilliamgs/summary-component)
- URL do site ao vivo [aqui](https://gustavowilliamgs.github.io/summary-component)

## Meu processo

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas de CSS
- Flexbox
- CSS Grid

### O que eu aprendi

Abaixo, apresento um exemplo simples de como usar JavaScript para carregar e preencher o conteúdo de um site dinamicamente usando JSON.

Suponha que temos um arquivo JSON chamado `dados.json` com o seguinte conteúdo:

```json
{
  "titulo": "Meu Site Dinâmico",
  "descricao": "Bem-vindo ao meu site dinâmico! Aqui você encontrará conteúdo emocionante e atualizado regularmente.",
  "itens": [
    "Item 1",
    "Item 2",
    "Item 3"
  ]
}
```

Código HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo de Site Dinâmico</title>
</head>
<body>
    <h1 id="titulo"></h1>
    <p id="descricao"></p>
    <ul id="itens"></ul>

    <script src="script.js"></script>
</body>
</html>

```

Agora, vamos criar o código JavaScript para carregar e exibir esse conteúdo dinamicamente no site:

``` js
// Função para carregar e preencher o conteúdo do site usando o JSON
function carregarConteudo() {
    fetch('dados.json') // Faz uma requisição para o arquivo JSON
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => { // Manipula os dados do JSON
            document.getElementById('titulo').innerText = data.titulo;
            document.getElementById('descricao').innerText = data.descricao;

            // Preenche a lista de itens
            const listaItens = document.getElementById('itens');
            data.itens.forEach(item => {
                const li = document.createElement('li');
                li.innerText = item;
                listaItens.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
}

// Chama a função para carregar o conteúdo assim que a página carregar
window.onload = carregarConteudo;

```

Neste exemplo, usamos o `fetch()` para obter o arquivo JSON (`dados.json`) e, em seguida, usamos `response.json()` para transformar a resposta em um objeto JavaScript. Em seguida, os dados são preenchidos dinamicamente em elementos HTML usando o método `innerText`.

Assim, quando você abrir essa página, o conteúdo será carregado dinamicamente a partir do arquivo JSON, preenchendo o título, descrição e a lista de itens no site. Essa abordagem permite que você atualize facilmente o conteúdo do site apenas alterando o arquivo JSON, sem precisar modificar o código HTML ou JavaScript.

### Desenvolvimento contínuo

Tenho o firme propósito de aperfeiçoar meus conhecimentos em JavaScript, visando preparar-me para projetos futuros. Compreendo a crescente importância dessa linguagem de programação no cenário tecnológico atual, especialmente na área de desenvolvimento web e aplicações interativas. Almejo adquirir competências sólidas nessa linguagem para poder criar soluções mais inovadoras, eficientes e sofisticadas, buscando contribuir de forma significativa para o sucesso de futuros projetos em que estiver envolvido.

## Autor

- Frontend Mentor - [@gustavowilliamgs](https://www.frontendmentor.io/profile/gustavowilliamgs)
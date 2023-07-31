const $imgs = document.querySelectorAll('.left img');
const $titles = document.querySelectorAll('.title');
const $score = document.querySelectorAll('.score');

(() => {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item, i) => {
                $imgs[i].setAttribute("src", item.icon);
                $titles[i].textContent = item.category;
                $score[i].textContent = item.score;
            });
        })
        .catch((error) => console.error('Erro ao carregar o JSON:', error));
})();

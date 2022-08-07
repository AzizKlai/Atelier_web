snake = [3, 2, 1]; // supprimer le dernier ajouter à l'indice 0
function elementtoid(element) {
    return element.attributes.id.value * 1;
}

function idtoelement(id) {
    let ch = "[id='" + id + "']";
    return document.querySelector(ch);
}
snake.forEach(element => {
    idtoelement(element).style.backgroundImage = 'url("./src/green.png")';
});

function snakemove(next) {
    if (next)
        snake.unshift(next);
    grow = (idtoelement(next).style.backgroundImage == 'url("./src/apple.jpg")') // the snake eat the flags
    idtoelement(next).style.backgroundImage = 'url("./src/green.png")';
    if (!grow) {
        idtoelement(snake[snake.length - 1]).style.backgroundImage = 'url("./src/t.png")';
        delete(snake[--snake.length])

    }

}
let direction = 'ArrowRight'
document.querySelectorAll('button').forEach(b =>
    b.addEventListener('click', function(e) {
        direction = this.classList[0];

    })
)
document.addEventListener('keydown', function(e) {
    b = document.querySelector('.' + e.code)
    if (b) {
        b.focus();
        b.click()
    }
})
setInterval(() => {
    switch (direction) {
        case 'ArrowUp':
            m = snake[0] - 20
            if (m < 1) { m = m + 400 }
            snakemove(m)
            break;
        case 'ArrowDown':
            m = snake[0] + 20
            if (m > 400) { m = m - 400 }
            snakemove(m)
            break;
        case 'ArrowRight':
            m = snake[0] + 1
            if (m % 20 == 1) { m = m - 20 }
            snakemove(m)
            break;
        case 'ArrowLeft':
            m = snake[0] - 1
            if (m % 20 == 0) { m = m + 20 }
            snakemove(m)
            break;

        default:
            break;
    }

}, 150);

setInterval(() => {
    apple = Math.floor(Math.random() * 401)
    while (snake.indexOf(apple) != -1) {
        apple = Math.floor(Math.random() * 401)
    }
    idtoelement(apple).style.backgroundImage = 'url("./src/apple.jpg")';



}, 3000);
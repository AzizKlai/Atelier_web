function play() {
    j = prompt("Jeune joueur de Rondomni \n pour commencer choississez la difficulté du jeu \n 1: difficile 2: moyenne 3: facile  ")

    x = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    console.log(x);

    var y = prompt("tester votre chance et tapez un entier entre 0 et 9\n vous avez " + j + " essais : ");
    j--;
    while (x != y && j > 0) {
        if (y < x) {
            console.log(y);
            y = prompt("ce nombre est plus petit \n essayez de nouveau (" + j + "tentatives restantes ) : ");
        } else { y = prompt("ce nombre est plus grand \n essayez de nouveau ( " + j + " tentatives restantes ) : "); }
        j--;
    };
    if (x == y) { if (confirm(":) felicitation vous avez gagner \n jouer une autre fois ?")) play(); };
    if (x != y) { if (confirm(" :( vous avez perdu \n jouer une autre fois l'entier est " + x)) play(); };



}
play();
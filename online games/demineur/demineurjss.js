//window.addEventListener("contextmenu", e => e.preventDefault());
//utiliser le filter
let tabledrapeau = ['url("./src/t4.png")', 'url("./src/t7.png")', 'url("./src/t6.png")']
let tablenum = ['url("./src/t0.png")', 'url("./src/t1.png")', 'url("./src/t2.png")', 'url("./src/t3.png")', 'url("./src/t10.png")', 'url("./src/t9.png")', 'url("./src/t5.png")', 'url("./src/t8.png")']
let gameon = true;
let nbomb = 10;

const facebutton = document.querySelector(".face");
const tab = document.querySelector(".tbody");
const inputbomb = document.querySelector("#nbomb");
const scrolldiv = document.querySelector("#scroll-text");
let code = 0;

const tt = [ //[ligne,colonne,nbomb]
    [9, 9, 10],
    [16, 16, 40],
    [16, 30, 90]
];
let t = tt[0];
let width = 40;
// partie creation table




facebutton.addEventListener("click", function(e) {
    tab.innerHTML = '';
    /*if (inputbomb.textContent * 1 > 0) { nbomb = inputbomb.textContent * 1 }

    if (nbomb < 20) {
        t = tt[0];
        width = 40
    } else if (nbomb < 50) {
        t = tt[1];
        width = 40
    } else {
        width = 30;
        t = tt[2]
    }*/
    t = tt[niv.textContent.length - 1]
    inputbomb.textContent = t[2]
    nbomb = inputbomb.textContent * 1
    for (let i = 0; i < t[0]; i++) {
        let newtr = document.createElement("tr");
        newtr.style.width = (width * t[1]) + "px";
        newtr.style.height = (width) + "px";
        for (let j = 1; j < t[1] + 1; j++) {
            //console.log((i * t[1] + j));
            newtr.innerHTML += "<td id='" + (i * t[1] + j) + "' class='off 0'></td>";
        }
        tab.innerHTML += newtr.innerHTML;
    }
    scrolldiv.style.width = (width * t[1]) - 2.5 + "px";
    scrolldiv.innerHTML = "";
    //console.log("code " + code);
    clearInterval(code);
    document.querySelector('body').addEventListener('mousemove', eyeball);
    reset(document.querySelectorAll("td"));
    lancerpartie(document.querySelectorAll("td"));
    //eyes
    document.querySelectorAll('.eye.eye').forEach(d => {
        d.style.setProperty('--bwidth', '10px')
        d.style.setProperty('--bheight', '10px')
    })
});

facebutton.click();


// partie jeu 

function getindex(table, kcase) {
    return table.indexOf(kcase.style.backgroundImage);
}

function reset(tdd) {
    tdd.forEach(element => {
        element.style.width = width + 'px';
        element.style.height = width + 'px';
        element.style.backgroundImage = 'url("./src/t6.png")';
        element.classList = ["off 0"]
    });
    remix();
    gameon = true;
};
reset(document.querySelectorAll("td"));



function clickker(e) {
    //let kk = tabledrapeau.indexOf(e.style.backgroundImage);
    if (getindex(tablenum, e) === 0 || getindex(tabledrapeau, e) === 2) {
        e.style.backgroundImage = tablenum[e.classList[1]];
        e.classList.replace("off", "on")
    }
};

function groupclickker(element) {
    if (getindex(tablenum, element) === 0 || getindex(tablenum, element) === 6) {
        ch = '.' + element.classList[2];
        const areamember = document.querySelectorAll(ch);
        areamember.forEach(ele => {
            clickker(ele);

        });
        if (getindex(tablenum, element) == 6) {
            element.style.backgroundImage = tablenum[7];
            gameon = false;
            scrolldiv.innerHTML = '<h1 id="h-scroll">game over</h1>';
            document.querySelectorAll('.eye.eye').forEach(d => {
                    d.style.setProperty('--bwidth', '6px')
                    d.style.setProperty('--bheight', '6px')
                })
                //divwin = document.querySelector('#h-scroll');
                //console.log(mousee);
            mousee = false;

            document.querySelector('body').removeEventListener('mousemove', eyeball);
            code = setInterval(function() {
                eyeball2()
            }, 50, code);
        }
        //console.log(mousee)

    }
    if (!document.querySelector('.off')) { //fonction
        gameon = false;
        scrolldiv.innerHTML = '<h1 id="h-scroll">you win</h1>';
        document.querySelectorAll('.eye.eye').forEach(d => {
            d.style.setProperty('--bwidth', '15px')
            d.style.setProperty('--bheight', '15px')
        })

        mousee = false;
        document.querySelector('body').removeEventListener('mousemove', eyeball);
        code = setInterval(function() {
            eyeball2()
        }, 50, code);
    }
}

function elementtoid(element) {
    return element.attributes.id.value * 1;
}

function idtoelement(id) {
    let ch = "[id='" + id + "']";
    return document.querySelector(ch);
}

function voisintable(element) {
    let elementidd = elementtoid(element);
    voisins = []
    leftvois = [elementidd - t[1] - 1, elementidd - 1, elementidd + t[1] - 1];
    rightvois = [elementidd - t[1] + 1, elementidd + 1, elementidd + t[1] + 1];
    leftvois.forEach(leftvoi => {
        if (leftvoi % t[1] != 0 && leftvoi > 0 && leftvoi <= (t[1] * t[0])) voisins.push(idtoelement(leftvoi))
    })
    rightvois.forEach(rightvoi => {
        if (rightvoi % t[1] != 1 && rightvoi > 0 && rightvoi <= (t[1] * t[0])) voisins.push(idtoelement(rightvoi))
    })
    if (elementidd > t[1]) { voisins.push(idtoelement(elementidd - t[1])) }
    if (elementidd < (t[0] * t[1]) - (t[1] - 1)) { voisins.push(idtoelement(elementidd + t[1])) }

    return (voisins);
}

function bombvoisinumber(element) {
    suspectbomb = 0;
    voisintable(element).forEach(voisin => {
        if (getindex(tabledrapeau, voisin) in [2, 1]) //l'operation in verifie si resultat egale à 0 ou 1 les indices diff des elements de la table
            suspectbomb = suspectbomb + 1;


    });
    return (suspectbomb);
}
//tab.addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener("contextmenu", e => e.preventDefault());

function lancerpartie(td) {
    td.forEach(element => {

        element.addEventListener('mousedown', function(e) {
            if (gameon) {
                if (e.button === 0 && getindex(tabledrapeau, element) == 2) {
                    element.style.backgroundImage = 'url("./src/t0.png")';

                    this.onmouseleave = function() {
                        element.style.backgroundImage = 'url("./src/t6.png")';
                        this.onmouseleave = null
                    }
                }
                if (e.button === 2 && getindex(tablenum, element) == -1) {
                    element.style.backgroundImage = tabledrapeau[(getindex(tabledrapeau, element) + 1) % 3];
                    switch (getindex(tabledrapeau, element)) {
                        case 0:
                            inputbomb.textContent = --nbomb;
                            break;
                        case 2:
                            inputbomb.textContent = ++nbomb;
                            break;
                        default:
                            break;
                    }
                }

                if (e.button == 0 && bombvoisinumber(element) == element.classList[1] && getindex(tablenum, element) == element.classList[1]) {

                    voisintable(element).forEach(voisin => {

                        //console.log(voisin);
                        clickker(voisin);
                        groupclickker(voisin);
                        // clickker(document.querySelector(ch));
                    });
                }
            }

        });

        element.addEventListener("mouseup", function(e) {
            this.onmouseleave = null;
            if (getindex(tablenum, element) === 0 && e.button === 0) {
                clickker(element);
                groupclickker(element);


            }

        })
    });
};
/// partie reset !!!!!!



//partie C definir les areas

function spreadarea(element, area) {
    if (element.classList[1] == 0) {
        filtervoisintable(element).forEach(voisin => {
            voisin.classList.add("area" + area);
            spreadarea(voisin, area);
        });
    }
}

function defineArea() {
    Area = 0;
    while ((vide = document.querySelector('td[class="off 0"]')) != null) {
        vide.classList.add("area" + Area);
        spreadarea(vide, Area);
        Area++;
    }

}

function filtervoisintable(element) { // retourne une table des voisins qui n'ont pas d'area
    array = []
    voisintable(element).forEach(voisin => {
        if (voisin.classList[2] != "bomb" && voisin.classList.value.indexOf(element.classList[2]) == -1)
            array.push(voisin);
    })
    return array;
}



function remix() {

    //partieB remplir les case par les bombes aléatoirement
    const tabomb = new Set();
    //console.log(nbomb)
    while (tabomb.size < nbomb) {
        tabomb.add(Math.floor(Math.random() * (t[0] * t[1]) + 1))

    }
    //console.log(tabomb);
    tabomb.forEach(b => {
        idtoelement(b).classList = ["offb 6 bomb"];
        voisintable(idtoelement(b)).forEach(v => {
            if (v.classList[1] != 6)

                v.classList.replace('' + v.classList[1], '' + (parseInt(v.classList[1]) + 1));
        })
    });
    //partie C definir les areas
    defineArea();

}
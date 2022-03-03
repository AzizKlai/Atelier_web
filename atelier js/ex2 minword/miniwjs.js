const textworld = document.querySelector(".textworld")
const t = document.querySelectorAll("button");
t.forEach(element => {
    element.addEventListener("click", function(e) {
        textworld.style.textAlign = element.value;
        //textworld.classList.remove(textworld.classList[1]);
        //textworld.classList.add(element.value)
        console.log(typeof(element.value), textworld.classList[1])


    })
});

const police = document.querySelector("select");
police.addEventListener("change", function(e) {
    console.log(police.value);
    textworld.style.fontFamily = police.value;
})
console.log(police.value);
textworld.style.fontFamily = police.value;
const taillle = document.querySelector(".taillle");
taillle.addEventListener("input", function(e) {
    console.log(taillle.value);
    textworld.style.fontSize = taillle.value + "px";
})
const couleuur = document.querySelector(".couleuur");
couleuur.addEventListener("input", function(e) {
    console.log(couleuur.value);
    textworld.style.color = couleuur.value;
})
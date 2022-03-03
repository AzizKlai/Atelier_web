const add = document.querySelector("button");
const inputname = document.querySelector("input.name");
const inputcontent = document.querySelector("input.content");

function colorgenerator() {

    let randomcolor = (Math.floor(Math.random() * 0xFFFFFF)).toString(16);
    return ("#" + randomcolor);
}

add.addEventListener("click", function(e) {
    if (inputname.value == '') inputname.focus(); // le if insiste qu'il faut remplir les deux champq
    else if (inputcontent.value == '') inputcontent.focus();
    else {

        let newli = document.createElement("li");
        newli.classList.add("list-group-item");
        newli.addEventListener("click", function(e) {

            newli.style.color = colorgenerator();



        });
        newli.innerHTML = inputname.value + " : " + inputcontent.value + "  <a>  🚮 </a>";

        document.querySelector("ul").insertBefore(newli, document.querySelector("ul").firstChild);
        inputname.value = inputcontent.value = '';

        let supprime = document.querySelector("a"); //va selectionner le premier a : le dernier a ajouter avec li
        supprime.addEventListener("click", function(e) {
            console.log("i am working on teh color ");
            newli.remove();



        });
    }
});
document.addEventListener("keypress", function(e) {

    if (e.code == "Enter")
        add.click();

})
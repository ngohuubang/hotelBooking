const activeMenuButton = document.querySelector("i.fa-bars");
const activeMenu = document.querySelector(".header .header-menu");

activeMenuButton.addEventListener("click", function(){
    activeMenu.classList.add("menu-active");
});

document.addEventListener("click", function(e){
    if(!activeMenu.contains(e.target) && !e.target.matches("i.fa-bars")){
        activeMenu.classList.remove("menu-active");
    }
});

const passWordInput = document.querySelectorAll("form.form-name input[type=password]");

console.log(passWordInput);

passWordInput.forEach(function(value){
    value.addEventListener("click", function(e){
        e.target.value = "";
    })
})
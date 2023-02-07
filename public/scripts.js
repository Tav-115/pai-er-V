
const despliegaMenu = document.querySelector("#Main-Menu-Recu");
const recu = document.getElementById ("recu")
const menuRecu = document.getElementById("menu-recu");

    
despliegaMenu.addEventListener('click', () =>{
    menuRecu.classList.toggle("show-recu");
    });
recu.addEventListener("click",() => {
    menuRecu.classList.remove("show-recu");
});
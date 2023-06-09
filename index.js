let search_container = document.getElementById("search-container");
let search_input      =document.getElementById("search-input");
search_input.addEventListener("focus",ChangeSearchContainerBorder);


function ChangeSearchContainerBorder(){
    search_container.classList.add("focused") ;
}

search_input.addEventListener("focusout",ChangeSearchContainerBorder2);


function ChangeSearchContainerBorder2(){
    search_container.classList.remove("focused") ;
}

let main_header =document.getElementById("main-header");




console.log(((200*20*2000)-(100000*17*4))/4)

console.log((20*5)/6)

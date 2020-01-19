//const title = document.getElementById("title");
const title = document.querySelector("#title");

// const BASE_COLOR = "white";
// const OTHER_COLOR = "blue";

// function handleClick(){
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else{
//         title.style.color = BASE_COLOR;
//     }
// }

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

// function handleClick(){
//     title.classList.toggle(CLICKED_CLASS);
// }

function init(){
    title.addEventListener("click", handleClick);   
}

init();
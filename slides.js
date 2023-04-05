//Selecting the elements I need
var big_wrapper;
var hamburger_menu;

function declare() {
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
}

declare();

function events() {
    hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
    })
}


events();

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
   panel.addEventListener('click', () =>{
       removeActiveClasses()
       panel.classList.add('active')
   })
})

function removeActiveClasses(){
   panels.forEach((panel) => {
       panel.classList.remove('active')
   })
}

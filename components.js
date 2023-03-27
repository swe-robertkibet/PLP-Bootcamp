
var toggle_btn;
var big_wrapper;

function declare(){
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
}

const main =document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
    //Clonenwrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if(dark === true){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }
    else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () =>{
        document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");

        declare();//reset variables
        events();
    });

}

function events(){
    toggle_btn.addEventListener('click', toggleAnimation);
}

events();

//Option Functionality
const storageTypeSelect = document.getElementById('storage-type');
const storageSizeInput = document.getElementById('storage-size');
const storagePriceDiv = document.getElementById('storage-price');

storageTypeSelect.addEventListener('change', updatePrice);
storageSizeInput.addEventListener('change', updatePrice);

function updatePrice() {
  // get the selected storage type and size
  const storageType = storageTypeSelect.value;
  const storageSize = storageSizeInput.value;

  // calculate the price based on the storage type and size
  let price;
  if (storageType === 'ssd') {
    price = storageSize * 11; // price per GB for SSD is $0.5
  } else if (storageType === 'hdd') {
    price = storageSize * 3; // price per GB for HDD is $0.3
  }

  // update the content of the storage price div
  storagePriceDiv.textContent = `Price: KES${price}`;
}

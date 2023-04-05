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


function calculateTotal() {
    var processor = document.getElementById("processor").value;
    var gpu = document.getElementById("gpu").value;
    var ram = document.getElementById("ram").value;
    var ssd = document.getElementById("ssd").value;
    var hdd = document.getElementById("hdd").value;
    var psu = document.getElementById("psu").value;
    var caseOption = document.getElementById("caseOption").value;
    var motherboard = document.getElementById("motherboard").value;
    var heatsink = document.getElementById("heatsink").value;


  
    var prices = {
        //Processor
      "no-processor": 0,
      "i5-11600k": 25900,
      "i7-11700k": 39900,
      "ryzen-5-5600x": 29900,
      "ryzen-7-5800x": 42900,
      //GPU
      "no-gpu": 0,
      "rtx-3060": 32900,
      "rtx-3070": 49900,
      "rx-6700-xt": 47900,
      "rx-6800": 64900,
      //RAM
      "no-ram": 0,
      "16gb": 7900,
      "32gb": 14900,
      "64gb": 29900,
      //SSD
      "no-ssd": 0,
      "m2nvme-256gb": 4900,
      "m2nvme-512gb": 6000,
      "sata3-512gb": 6100,
      "m2nvme-1tb": 12500,
      "sata3-1tb": 13500,
      //HDD
      "no-hdd": 0,
      "hdd-500gb": 1500,
      "hdd-1tb": 2500,
      "hdd-2tb": 4500,

      //Cooling System
      "no-heatsink": 0,
      "shadow-4pin": 3500,
      "darkflash-s11": 4200,
      "segotep-us": 6000,
      "twister-dx120": 6000,
      "syphony-tr240": 10500,
      "segotep-beiced": 10500,
      "darkflash-dxv2": 11000,




      //PSU
      "no-psu": 0,
      "aigo-500w": 5000,
      "aigo-650w": 7500,
      "gt-550": 8500,
      "gold-850w": 16900,
      //Case
      "no-caseOption": 0,
      "nzxt-h510": 6900,
      "corsair-4000d": 7900,
      "fractal-meshify-c": 8900,
      //Motherboard
      "no-motherboard": 0,
      "b360m-motar": 14000,
      "cvn-b450m": 13800,
      "h510m-k": 15000,
      "cvn-b550m": 19500,
      "asus-tuf": 20600,
      "intel-z590": 25500,
      "b550-f":35800,
      "z690-ud": 37800,

    };
  
    var total = prices[motherboard] + prices[processor] + prices[gpu] + prices[ram] + prices[ssd] + prices[hdd] + prices[psu] + prices[heatsink] + prices[caseOption];
    document.getElementById("total").innerHTML = "Total: KSh. " + total;
}
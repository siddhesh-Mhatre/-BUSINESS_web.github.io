//navigation
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "250px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
};


//fun-fact
const counter_loader1 = document.querySelector(".counter-loaded1");
const counter_val1 = counter_loader1.innerHTML;

const counter_loader2 = document.querySelector(".counter-loaded2");
const counter_val2 = counter_loader2.innerHTML;

const counter_loader3 = document.querySelector(".counter-loaded3");
const counter_val3 = counter_loader3.innerHTML;

const counter_loader4 = document.querySelector(".counter-loaded4");
const counter_val4 = counter_loader4.innerHTML;

function myFunction(b, counter_loader) {
  let counter = 0;
  setInterval(() => {
    if (counter == b) {
      clearInterval();
    } else {
      counter += 1;
      counter_loader.textContent = counter;
    }
  }, 50);
};

myFunction(counter_val1, counter_loader1);

myFunction(counter_val2, counter_loader2);

myFunction(counter_val3, counter_loader3);

myFunction(counter_val4, counter_loader4);





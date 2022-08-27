"use strict";

let genbun = document.querySelector(".genbun");
let transfer = document.querySelector(".transfer");

let ta_genbun = document.querySelector("#ta_genbun");

let button3 = document.querySelector(".button3");
let deletebtn = document.querySelector(".deletebtn");

deletebtn.addEventListener("click", function () {
  let description = document.querySelector(".description");
  description.textContent = "　";
});

button3.addEventListener("click", function () {
  button3.disabled = true;
  let text_box = document.querySelector(".text_box");
  delete_child_element(".text_box");
  let text_genbun = document.querySelector(".text_genbun");
  let ta_genbun = document.querySelector("#ta_genbun").value;

  ta_genbun = ta_genbun
    .replace("Mr.", "Mr")
    .replace("U.S.A", "USA")
    .replace("Mrs.", "Mrs")
    .replace("Dr.", "Dr")
    .replace("Ms.", "Ms")
    .replace("U.K.", "UK")
    .replace("B.C.", "BC")
    .replace("A.D.", "AD")
    .replace("St.", "St")
    .replace("U.S.", "US")
    .replace("Ave.", "Ave")
    .replace("Co.", "Co")
    .replace("Ltd.", "Ltd")
    .replace("co.", "co")
    .replace("ltd.", "ltd")
    .replace("etc.", "etc")
    .replace("i.e.", "ie")
    .replace("e.g.", "eg")
    .replace("Inc.", "inc")
    .replace("Rd.", "Rd")
    .replace("Prof.", "Prof")
    .replace("Ph.D.", "PhD")
    .replace("vs.", "vs")
    .replace("VS.", "VS")
    .replace("Vs.", "Vs");

  let splitted_ta_genbun = ta_genbun.split(".");

  let text_transfer = document.querySelector(".text_transfer");
  let ta_transfer = document.querySelector("#ta_transfer");
  let splitted_ta_transfer = ta_transfer.value.split("。");

  for (let i = 0; i < splitted_ta_genbun.length; i++) {
    let new_element1 = document.createElement("p");
    let new_element2 = document.createElement("textarea");
    new_element1.textContent = splitted_ta_genbun[i] + ".";
    new_element2.textContent = splitted_ta_transfer[i] + "。";
    new_element2.classList.add("spared");
    if (new_element1.textContent !== ".") {
      text_box.appendChild(new_element1);
      text_box.appendChild(new_element2);
    }
  }
});

function delete_child_element(class_name) {
  let dom_obj = document.querySelector(class_name);
  while (dom_obj.firstChild) {
    dom_obj.removeChild(dom_obj.firstChild);
  }
}

let button4 = document.querySelector(".button4");

button4.addEventListener("click", function () {
  let sparedTextarea = document.querySelectorAll(".spared");
  let spared = "";
  for (let str of sparedTextarea) {
    spared += str.value;
  }

  let spared_ta = document.querySelector("#spared_ta");
  spared_ta.textContent = spared;
});

let button5 = document.querySelector(".button5");

button5.addEventListener("click", function () {
  location.reload();
});

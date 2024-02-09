const size_input = document.getElementById("size");
const speed_input = document.getElementById("speed");
const randomize_btn = document.getElementById("randomize");
const container_div = document.getElementById("array_container");
container_div.style = "flex-direction:row";

var speed = 1000;
var array_size = size_input.value;
var div_sizes = [];
var divs = [];

randomize_btn.addEventListener("click", randomize_array);
size_input.addEventListener("input", update_array_size);

function randomize_array() {
  container_div.innerHTML = "";

  for (let i = 0; i < array_size; i++) {
    div_sizes[i] = Math.floor(Math.random() * 50) + 15;
    divs[i] = document.createElement("div");
    container_div.appendChild(divs[i]);
    divs[i].style =
      " margin:0% 0.1%; background-color:wheat; width:" +
      (100 / array_size - 2 * 0.1) +
      "%; height:" +
      div_sizes[i] +
      "%;";
  }
}

function update_array_size() {
  array_size = size_input.value;
  randomize_array();
}

window.onload = update_array_size();

speed_input.addEventListener("input", speed_change);

function speed_change() {
  var array_speed = speed_input.value;
  switch (parseInt(array_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }

  delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed);
var c_delay = 0;
function div_update(container_div, height, color) {
  window.setTimeout(function () {
    container_div.style =
      " margin:0% 0.1%; width:" +
      (100 / array_size - 2 * 0.1) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (c_delay += delay_time));
}

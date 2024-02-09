function Bubble() {
  c_delay = 0;
  size_input.disabled = true;
  randomize_btn.disabled = true;
  speed_input.disabled = true;
  document.getElementById("insertion").disabled = true;
  document.getElementById("bubble").disabled = true;
  document.getElementById("selection_sort").disabled = true;
  document.getElementById("merge").disabled = true;
  document.getElementById("quick").disabled = true;
  for (var i = 0; i < array_size - 1; i++) {
    for (var j = 0; j < array_size - i - 1; j++) {
      div_update(divs[j], div_sizes[j], "palegreen");

      if (div_sizes[j] > div_sizes[j + 1]) {
        div_update(divs[j], div_sizes[j], "red");
        div_update(divs[j + 1], div_sizes[j + 1], "red");

        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j + 1];
        div_sizes[j + 1] = temp;

        div_update(divs[j], div_sizes[j], "red");
        div_update(divs[j + 1], div_sizes[j + 1], "red");
      }
      div_update(divs[j], div_sizes[j], "wheat");
    }
    div_update(divs[j], div_sizes[j], "cyan");
  }
  div_update(divs[0], div_sizes[0], "cyan");

  window.setTimeout(function () {
    size_input.disabled = false;
    randomize_btn.disabled = false;
    speed_input.disabled = false;
    document.getElementById("insertion").disabled = false;
    document.getElementById("bubble").disabled = false;
    document.getElementById("selection_sort").disabled = false;
    document.getElementById("merge").disabled = false;
    document.getElementById("quick").disabled = false;
  }, (c_delay += delay_time));
}

function Insertion() {
  c_delay = 0;
  size_input.disabled = true;
  randomize_btn.disabled = true;
  speed_input.disabled = true;
  document.getElementById("insertion").disabled = true;
  document.getElementById("bubble").disabled = true;
  document.getElementById("selection_sort").disabled = true;
  document.getElementById("merge").disabled = true;
  document.getElementById("quick").disabled = true;
  for (var i = 0; i < array_size; i++) {
    div_update(divs[i], div_sizes[i], "palegreen");

    var x = div_sizes[i];
    var j = i - 1;
    while (j > -1 && div_sizes[j] > x) {
      div_update(divs[j], div_sizes[j], "red");
      div_update(divs[j + 1], div_sizes[j + 1], "red");

      div_sizes[j + 1] = div_sizes[j];

      div_update(divs[j], div_sizes[j], "red");
      div_update(divs[j + 1], div_sizes[j + 1], "red");

      div_update(divs[j], div_sizes[j], "wheat");
      if (j == i - 1) {
        div_update(divs[j + 1], div_sizes[j + 1], "palegreen");
      } else {
        div_update(divs[j + 1], div_sizes[j + 1], "wheat");
      }
      j--;
    }
    div_sizes[j + 1] = x;

    for (var t = 0; t < i; t++) {
      div_update(divs[t], div_sizes[t], "cyan");
    }
  }
  div_update(divs[i - 1], div_sizes[i - 1], "cyan");
  window.setTimeout(function () {
    size_input.disabled = false;
    randomize_btn.disabled = false;
    speed_input.disabled = false;
    document.getElementById("insertion").disabled = false;
    document.getElementById("bubble").disabled = false;
    document.getElementById("merge").disabled = false;
    document.getElementById("selection_sort").disabled = false;
    document.getElementById("quick").disabled = false;
  }, (c_delay += delay_time));
}

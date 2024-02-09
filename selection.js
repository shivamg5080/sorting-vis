function Selection_sort() {
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
    div_update(divs[i], div_sizes[i], "red");

    var k = i;

    for (var j = i + 1; j < array_size; j++) {
      div_update(divs[j], div_sizes[j], "palegreen");

      if (div_sizes[j] < div_sizes[k]) {
        if (k != i) {
          div_update(divs[k], div_sizes[k], "wheat");
        }
        k = j;
        div_update(divs[k], div_sizes[k], "red");
      } else {
        div_update(divs[j], div_sizes[j], "wheat");
      }
    }

    if (k != i) {
      var temp = div_sizes[k];
      div_sizes[k] = div_sizes[i];
      div_sizes[i] = temp;

      div_update(divs[k], div_sizes[k], "red");
      div_update(divs[i], div_sizes[i], "red");
      div_update(divs[k], div_sizes[k], "wheat");
    }
    div_update(divs[i], div_sizes[i], "cyan");
  }
  div_update(divs[i], div_sizes[i], "cyan");

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

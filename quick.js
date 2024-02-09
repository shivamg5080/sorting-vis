function Quick() {
  c_delay = 0;

  size_input.disabled = true;
  randomize_btn.disabled = true;
  speed_input.disabled = true;
  document.getElementById("insertion").disabled = true;
  document.getElementById("bubble").disabled = true;
  document.getElementById("selection_sort").disabled = true;
  document.getElementById("merge").disabled = true;
  document.getElementById("quick").disabled = true;

  quick_sort(0, array_size - 1);

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

function partition(start, end) {
  var i = start + 1;
  var piv = div_sizes[start];
  div_update(divs[start], div_sizes[start], "palegreen");

  for (var j = start + 1; j <= end; j++) {
    if (div_sizes[j] < piv) {
      div_update(divs[j], div_sizes[j], "palegreen");

      div_update(divs[i], div_sizes[i], "red");
      div_update(divs[j], div_sizes[j], "red");

      var temp = div_sizes[i];
      div_sizes[i] = div_sizes[j];
      div_sizes[j] = temp;

      div_update(divs[i], div_sizes[i], "red");
      div_update(divs[j], div_sizes[j], "red");

      div_update(divs[i], div_sizes[i], "wheat");
      div_update(divs[j], div_sizes[j], "wheat");

      i++;
    }
  }
  div_update(divs[start], div_sizes[start], "red");
  div_update(divs[i - 1], div_sizes[i - 1], "red");

  var temp = div_sizes[start];
  div_sizes[start] = div_sizes[i - 1];
  div_sizes[i - 1] = temp;

  div_update(divs[start], div_sizes[start], "red");
  div_update(divs[i - 1], div_sizes[i - 1], "red");

  for (var t = start; t <= i; t++) {
    div_update(divs[t], div_sizes[t], "cyan");
  }

  return i - 1;
}

function quick_sort(start, end) {
  if (start < end) {
    var j = partition(start, end); // j is the pivot position.
    quick_sort(start, j - 1);
    quick_sort(j + 1, end);
  }
}

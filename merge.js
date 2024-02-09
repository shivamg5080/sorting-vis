function Merge() {
  c_delay = 0;

  size_input.disabled = true;
  randomize_btn.disabled = true;
  speed_input.disabled = true;
  document.getElementById("insertion").disabled = true;
  document.getElementById("bubble").disabled = true;
  document.getElementById("selection_sort").disabled = true;
  document.getElementById("merge").disabled = true;
  document.getElementById("quick").disabled = true;

  merge_partition(0, array_size - 1);

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

function merge_sort(start, mid, end) {
  var p = start,
    q = mid + 1;

  var arr = [],
    k = 0;

  for (var i = start; i <= end; i++) {
    if (p > mid) {
      arr[k++] = div_sizes[q++];
      div_update(divs[q - 1], div_sizes[q - 1], "red");
    } else if (q > end) {
      arr[k++] = div_sizes[p++];
      div_update(divs[p - 1], div_sizes[p - 1], "red");
    } else if (div_sizes[p] < div_sizes[q]) {
      arr[k++] = div_sizes[p++];
      div_update(divs[p - 1], div_sizes[p - 1], "red");
    } else {
      arr[k++] = div_sizes[q++];
      div_update(divs[q - 1], div_sizes[q - 1], "red");
    }
  }

  for (var t = 0; t < k; t++) {
    div_sizes[start++] = arr[t];
    div_update(divs[start - 1], div_sizes[start - 1], "cyan");
  }
}

function merge_partition(start, end) {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    div_update(divs[mid], div_sizes[mid], "palegreen");

    merge_partition(start, mid);
    merge_partition(mid + 1, end);

    merge_sort(start, mid, end);
  }
}

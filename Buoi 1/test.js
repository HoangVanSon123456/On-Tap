function randomArray(n) {
  let array = [];
  let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < n; i++) {
    let startRandom = Math.floor(Math.random() * char_list.length);

    let endRandom = Math.floor(Math.random() * 5) + 1;

    let text = char_list.slice(startRandom, startRandom + endRandom);

    array.push(text.slice(0, 6));
  }
  return array;
}
document.write(randomArray(1000));

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let imin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[imin]) {
        imin = j;
      }
    }
    let t = array[i];
    array[i] = array[imin];
    array[imin] = t;
  }
  return array;
}
console.log(selectionSort(randomArray(1000)));

function interChangeSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
      }
    }
  }
  return array;
}
console.log(interChangeSort(randomArray(1000)));

function insertionSort(array) {
  let pos, x;
  for (let i = 1; i < array.length; i++) {
    pos = i - 1;
    x = array[i];
    while (pos >= 0 && array[pos] > x) {
      array[pos + 1] = array[pos];
      pos--;
    }
    array[pos + 1] = x;
  }
  return array;
}
console.log(insertionSort(randomArray(1000)));

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = array.length - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        let t = array[j];
        array[j] = array[j - 1];
        array[j - 1] = t;
      }
    }
  }
  return array;
}
console.log(bubbleSort(randomArray(1000)));

function quickSort(array, left, right) {
  let l = left,
    r = right;
  let m = Math.floor((l + r) / 2);
  let pivot = array[m];

  while (l <= r) {
    while (array[l] < pivot) l++;
    while (array[r] > pivot) r--;
    if (l <= r) {
      let t = array[l];
      array[l] = array[r];
      array[r] = t;
      l++;
      r--;
    }
  }

  if (l < right) quickSort(array, l, right);
  if (r > left) quickSort(array, left, r);
  return array;
}
console.log(quickSort(randomArray(1000)));

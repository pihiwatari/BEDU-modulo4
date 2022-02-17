function random(min, max, decimals) {
  let presition = Math.pow(10, decimals);
  min = min * presition;
  max = max * presition;
  return Math.floor(Math.random() * (max - min + 1) + min) / presition;
}

function bubbleSort(arr) {
  let aux;
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
    console.log("Cycle n°", i, arr);
  }

  return arr;
}

// function bucketSort(arr, n)

const unorderedArray = [];

for (let i = 0; i < 11; i++) {
  let randomNumber = random(-1000, 1000, 2);
  unorderedArray.push(randomNumber);
}

console.log("unordered", unorderedArray);

const orderedArray = bubbleSort(unorderedArray);

console.log("ordered", orderedArray);

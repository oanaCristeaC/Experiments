function multiplyByFive(arr) {
  let i = 0;
  function multiply() {
    const val = arr[i]
    i++;

    return val * 5
  }

  return multiply;
}

// this function also stores some ref to outer scope: arr:[1,2,3] and i:0
const getMultiplyByFive = multiplyByFive([1, 2, 3]);

const el1 = getMultiplyByFive();
// returns 5

const el2 = getMultiplyByFive();
// returns 10

const el3 = getMultiplyByFive();
// returns 15
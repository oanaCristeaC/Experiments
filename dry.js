const copyAndManipulate = (input, instruction) => {
  const arr = [];

  for (let i = 0; i < input.length; i++) {
    arr.push(instruction(input[i]));
  }

  return arr;
}

const multiplyBy2 = (input) => {
  return input * 2
}

const result = copyAndManipulate([1, 2, 3], multiplyBy2)
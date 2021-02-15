// @ts-nocheck
/**
 * @param {any[]} array
 */
const createFlow = (array) => {
  let i = 0;
  const setNext = {
    next: function () {
      const el = array[i];
      i++;
      return el;
    },
  };

  return setNext;
};

const flow = createFlow([1, 2, 3]);
const firstEl = flow.next(); //returns 1
const secondEl = flow.next(); // returns 2

/** ***************************** */

function* createFow2() {
  yield 4;
  yield 5;
  yield 6;
}

const returnNextElement = createFow2();
const elementOne = returnNextElement.next(); // returns {value: 4, done: false}
const elementTwo = returnNextElement.next(); // returns {value: 5, done:false}
const elementThree = returnNextElement.next(); // {value: 6, done: false}
const elementFour = returnNextElement.next(); //{value: undefined, done: true}

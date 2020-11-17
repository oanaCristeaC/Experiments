const flyFactory = function (obj) {
  let isFlying = false;

  return Object.assign({}, obj, {
    fly() {
      isFlying = true;
      return this;
    },
    isFlying() {
      return `${this.name} is ${isFlying ? '' : 'not'} flying`;
    },
  });
};

const humanFactory = function (obj) {
  let isCrying = false;

  return Object.assign({}, obj, {
    cry() {
      cry = true;
      return this;
    },
    isCrying() {
      return `${this.name} is ${isCrying ? '' : 'not'} crying.`;
    },
  });
};

const person1 = {
  name: 'Clark',
};

const superman = flyFactory(humanFactory(person1));
superman.cry().fly().isFlying();

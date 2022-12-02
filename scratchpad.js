const blue = {
  name: 'blue',
  breed: 'Scottish fold',
  dance: function (dance) {
    console.log('this is', this);
    console.log(`Meow, I am ${this.breed} and I like to ${dance}`);
  },
  play: function (...toys) {
    for (let toy of toys) {
      console.log(`${this.name}, plays with ${toy}`);
    }
  },
  greet() {
    alert(`${this.name} plays `);
  },
};
const bDance = blue.dance;
const boundDance = bDance.bind(blue, 'Fight for my right to party', 'example', 'another');

const rocket = {
  name: 'rocket',
  breed: 'himalayan',
};

const rocketDance = blue.dance.bind(rocket);

const dog = {
  name: 'tyson',
  breed: 'mini aussie',
  dance: rocketDance,
  washDog: function () {
    console.log(this);
  },
  fur: function (...furTypes) {
    for (let eachFur of furTypes) {
      console.log(`There are lots of fur types such as ${eachFur}`);
    }
  },
};
const blueDisco = blue.dance.bind(blue, 'disco');
const playsWithSocks = blue.play.bind(blue, 'left sock', 'right sock', 'dirty sock', 'fight for my right to party', 'sniff butts');
const whatFur = dog.fur.bind(blue, 'hairy', 'short', 'long', 'human', 'dog');

// =====================>>>>>>>>>>>>>>>>>

const applySalesTax = function (taxRate, price) {
  return price + price * taxRate;
};
const applyCaSalesTax = applySalesTax.bind(null, 0.0725);
const applyTxSalesTax = applySalesTax.bind(null, 0.5);
//======================>>>>>>>>>>>>>>>>>

const bobsMembership = {
  name: 'bob',
  total: 250,
  collectMonthlyFee: function (fee) {
    const remaining = this.total - fee;
    this.total = remaining;
    return this.name + ' remaining balance: ' + remaining;
  },
};

collectMonthlyFee = function (fee) {
  const remaining = this.total - fee;
  this.total = remaining;
  return this.name + ' remaining balance: ' + remaining;
};
// example use case of binding a function to a specific object, could use it to make custom buttons that can be set with custom objects to operate on and custom data to preplug in. Such as making four buttons for adding a balance to a customers account by baking in the values of monthly, quarterly, semi-annually and annually.

// binding and calling functions that are bound to certain objects or that "prebake" arguments into functions for specific purposes. When the value of this changes constantly as the code runs,  when the functions are executed the value of this may need to be bound to ensure the correct object is used and correct values are used or baked in if desired.

const bobMonthlyFee = window.collectMonthlyFee.bind(bobsMembership, 10);
const bobQuarterlyFee = window.collectMonthlyFee.bind(bobsMembership, 30);
const bobSemiAnnualFee = window.collectMonthlyFee.bind(bobsMembership, 60);
const bobAnnualFee = window.collectMonthlyFee.bind(bobsMembership, 120);

const totalDue = document.getElementById('total-due');

class Payments {
  constructor(entry) {
    this.entry = entry;
  }
  addBob = function (amountToAdd) {
    // could add code to validate data, is it a number? is it over or under a certain amount?
    bobsMembership.collectMonthlyFee.bind(bobsMembership, amountToAdd);
    //
  };
}

document.getElementById('start-game').addEventListener('click', () => {
  // process a payment practice example
});

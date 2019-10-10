module.exports = class Calculator {
  constructor() {
    this.slots = [];
  }

  add() {
    let sum = 0;

    for (let k = 0; k < arguments.length; k++) {
      if (arguments[k] != "LAST" && typeof arguments[k] === "string") {
        sum += this.slots[parseInt(arguments[k].match(/\d+/g)) - 1];
      } else if (arguments[k] === "LAST") {
        sum += parseInt(this.last());
      } else {
        sum += parseInt(arguments[k]);
      }
    }
    this.num = sum;
    return this.num;
  }
  multiply() {
    let product = 1;

    for (let k = 0; k < arguments.length; k++) {
      if (arguments[k] != "LAST" && typeof arguments[k] === "string") {
        product *= this.slots[parseInt(arguments[k].match(/\d+/g)) - 1];
      } else if (arguments[k] === "LAST") {
        product *= parseInt(this.last());
      } else {
        product *= arguments[k];
      }
    }
    this.num = product;
    return this.num;
  }
  last() {
    return this.num;
  }
  set_slot(slot_number) {
    this.slots.push(this.last());
  }
  get_slot(slot_number) {
    return this.slots[slot_number - 1];
  }
};

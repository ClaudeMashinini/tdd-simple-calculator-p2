module.exports = class Calculator {

	constructor() {
		this.memory = [];
	}

	add() {
	let sum = 0;
	for (let k = 0; k < arguments.length; k++) {
		sum += arguments[k];
	}
	this.num = sum;
	return sum;
}
	multiply() {
	let product = 1;
	for (let k = 0; k < arguments.length; k++) {
		product *= arguments[k];
	}
	this.num = product;
	return product;
	}
	last() {
		return this.num;
	}
	set_slot(slot_number) {
		this.memory.push(this.last());
	}
	get_slot(slot_number) {
		return this.memory[slot_number - 1];
	}

}
const Calculator = require("../calculator");
let calculator = new Calculator();

describe("carrying out calculations", function() {
  describe("carrying out addition", function() {
    it("can add two numbers", function() {
      expect(calculator.add(2, 7)).toBe(9);
      expect(calculator.add(0, 0)).toBe(0);
      expect(calculator.add(-1, -1)).toBe(-2);
    });
    it("can add multiple numbers", function() {
      expect(calculator.add(2, 7, 6, 8)).toBe(23);
    });
  });
  describe("carrying out multiplication", function() {
    it("can multiply two numbers", function() {
      expect(calculator.multiply(2, 4)).toBe(8);
    });
    it("can multiply multiple numbers", function() {
      expect(calculator.multiply(2, 4, 6, 2)).toBe(96);
    });
  });
  describe("creating and using the last carried out operation", function() {
    it("can retrieve the last operation", function() {
      expect(calculator.multiply(3, 3)).toBe(9);
      expect(calculator.last()).toBe(9);
      expect(calculator.add("LAST", 231)).toBe(240);
    });

    it("can use the last operation's result in a new operation", function() {
      expect(calculator.multiply(12, 12)).toBe(144);
      expect(calculator.last()).toBe(144);
      expect(calculator.multiply("LAST", 2)).toBe(288);
    });
  });
  describe("setting and getting created slots", function() {
    it("should be able to create a slot for any operation and be able to retrieve, use and manipulate it", function() {
      expect(calculator.multiply(9, 9)).toBe(81);
      calculator.set_slot(1);
      expect(calculator.get_slot(1)).toBe(81);
      expect(calculator.add("SLOT_1", 9)).toBe(90);
      expect(calculator.add(9, 9)).toBe(18);
      calculator.set_slot(2);
      expect(calculator.multiply("SLOT_2", 2)).toBe(36);
      expect(calculator.get_slot(2)).toBe(18);
      calculator.get_slot(1);
      expect(calculator.add("SLOT_1", 2)).toBe(83);
      expect(calculator.multiply("SLOT_2", 2)).toBe(36);
      expect(calculator.last()).toBe(36);
      calculator.set_slot(3);
      expect(calculator.multiply("SLOT_3", 4)).toBe(144);
    });
  });
});

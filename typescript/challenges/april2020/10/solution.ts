// Runtime: 100 ms, beats 86 % of JavaScript submissions

// TODO: Re-type it all

interface MinStack {
  stack: number[]
  max?: number
  min?: number
}

var MinStack = function () {
  this.stack = [];
  this.max = undefined;
  this.min = undefined;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x: number) {
  if (typeof this.max == "undefined" || x >= this.max) {
    this.max = x
  }

  if (typeof this.min == "undefined" || x <= this.min) {
    this.min = x
  }

  this.stack.push({
    value: x,
    min: this.min,
    max: this.max
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.min = this.stack[this.stack.length - 1].min
  this.max = this.stack[this.stack.length - 1].max
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min;
};
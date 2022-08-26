console.log("Helllooo");
var Counter = /** @class */ (function () {
    function Counter(name, max) {
        this.value = 0;
        this.max = max;
        this.name = name;
    }
    Counter.prototype.getValue = function () {
        return this.value;
    };
    Counter.prototype.canIncrement = function () {
        return this.value < this.max;
    };
    Counter.prototype.increment = function () {
        if (this.value < this.max) {
            this.value += 1;
            console.log("Counter ".concat(this.name, "'s value is now ").concat(this.value));
        }
        else {
            console.error("Reached max (".concat(this.max, ") - Can't increment ").concat(this.name));
        }
    };
    return Counter;
}());
var counter1 = new Counter('Counter #1', 5);
var counter2 = new Counter('Counter #2', 3);
counter1.increment();

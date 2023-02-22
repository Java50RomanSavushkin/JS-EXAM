class Deferred {
    constructor() {
        this.callbacks = [];
        this.resolvedValue = undefined;
    }
    then(callback) {
        this.callbacks.push(callback);
        return this;
    }
    resolve(value) {
        this.resolvedValue = this.callbacks.reduce((previousValue, callback) => {
            return callback(previousValue);
        }, value);
    }
}

const d = new Deferred()

d.then(function (res) {
    console.log("1 ", res);
    return "a";
});
d.then(function (res) {
    console.log("2 ", res);
    return "b";
});
d.then(function (res) {
    console.log("3 ", res);
    return "c";
});
d.resolve('hello');

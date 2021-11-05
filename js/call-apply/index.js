Function.prototype.myCall = function(context, ...args) {
    if (context === null || context === undefined) {
        context = window;
    } else {
        context = Object(context);
    }

    const specialPrototype = Symbol('特殊属性Symbol');
    context[specialPrototype] = this;
    console.log(context[specialPrototype], this, context);
    let result = context[specialPrototype](...args);

    delete context[specialPrototype];

    return result;

}
var o1 = {
    b: 1,
    toString: function() {
        return this.b;
    }
}
var o2 = {
    b: 2,
    toString: function() {
        return this.b;
    }
}
console.log(o1.toString.myCall(o2));


function foo() { }
const newObj = new foo()
console.log(newObj.__proto__)

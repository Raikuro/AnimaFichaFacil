export function getter(target: Object, name: string) {
    return Object.defineProperty(target, name, {
        get: function () { return this["_" + name]; },
        configurable: true
    });
}

export function field(defaultFunction?) {

    function getOrInitialize<A>(attr: A, resultIfUndefined: A): A {
        return attr ? attr : resultIfUndefined;
    }

    return (target: Object, name: string) => {
        Object.defineProperty(target, name, {
            get: function () { return getOrInitialize(this["_" + name], defaultFunction(this)); },
            set: function (value) { this["_" + name] = value; },
            configurable: true
        });
    }
}
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
            get: function () { 
                if(this["_" + name + "Mod"])
                    return defaultFunction(this) + this["_" + name + "Mod"];
                return defaultFunction(this);
            },
            set: function (value) { this["_" + name + "Mod"] = value-this[name]; },
            configurable: true
        });
    }
}
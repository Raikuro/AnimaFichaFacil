import { CalculatedValue } from "../model/CalculatedValue";
import { Sheet } from "../model/Sheet";

export function getter(target: Object, name: string) {
    return Object.defineProperty(target, name, {
        get: function () { return this["_" + name]; },
        configurable: true
    });
}

export function calculatedValue(defaultFunction:(sheet:Sheet)=>number) {
    return (target: Object, name: string) => {
        Object.defineProperty(target, name, {
            get: function () {
                if (!this["_" + name]) {
                    this["_" + name] = new CalculatedValue(defaultFunction, this);
                }
                return this["_" + name].value;
            },
            set: function (value) {
                if (!this["_" + name]) {
                    this["_" + name] = new CalculatedValue(defaultFunction, this);
                }
                this["_" + name].value = value;
            },
            configurable: true
        });

    }
}
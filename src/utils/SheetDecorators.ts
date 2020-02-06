import { CalculatedValue } from "../model/CalculatedValue";
import { Sheet } from "../model/Sheet";

export function getter(target: Object, name: string) {
    return Object.defineProperty(target, name, {
        get: function () { return this["_" + name]; },
        configurable: true
    });
}

export function setter(target: Object, name: string) {
    return Object.defineProperty(target, name, {
        set: function (newValue) { this["_" + name] = newValue; },
        configurable: true
    });
}

export function calculatedValue(defaultFunction: (sheet: Sheet) => number) {
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

export function registerProperty(target: object, name: string, metadataKey: string): void {
    let properties: string[] = Reflect.getMetadata(metadataKey, target);
    if (properties) {
      properties.push(name);
    } else {
      properties = [name];
      Reflect.defineMetadata(metadataKey, properties, target);
    }
  }
  
export function getDecoratedProperties(origin: object, metadataKey: string): string[] {
    const properties: string[] = Reflect.getMetadata(metadataKey, origin);
    const result = [];
    properties.forEach(key => result.push(key));
    return result;
  }

 export function importantSetter(target: Object, name: string) {
    Object.defineProperty(target, name, {
        set: function (newValue) {
            this["_" + name] = newValue;
            this.recalculateAll();
        },
        configurable: true
    });
    return registerProperty(target, name, 'important');
}

export function important(target: Object, name: string) {
    return registerProperty(target, name, 'important');
}

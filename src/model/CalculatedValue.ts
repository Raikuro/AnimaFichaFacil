import { Sheet } from "./Sheet";

export class CalculatedValue {

    private _modifier:number = 0;
    constructor(private _function:(sheet:Sheet) => number, private _sheet:Sheet) {}

    get value(){ return this._function(this._sheet) + this._modifier; }
    set value(newValue:number){ this._modifier += newValue - this.value; }
}
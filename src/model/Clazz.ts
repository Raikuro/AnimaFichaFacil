import { Sheet } from "./Sheet";
import { BaseComand } from "./BaseComand";
import { guerrero } from "./Classes/guerrero";
import { getter } from "../utils/SheetDecorators";

export class Clazz implements BaseComand {
  
    public apply(sheet:Sheet){
        for(let i:number;i<this.levels;i++){
            sheet = this._clazz.apply(sheet)
        }
        return sheet
    }

    public constructor(private readonly _clazz: ClazzEnum, private readonly _levels: number) {}

    @getter public levels:number;
}

class ClazzEnum implements BaseComand {
    public constructor(public readonly apply: (sheet: Sheet) => Sheet) {}
}

export const GUERRERO = new ClazzEnum(guerrero);
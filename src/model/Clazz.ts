import { Sheet } from "./Sheet";
import { BaseCommand } from "./BaseCommand";
import { guerrero } from "./Classes/guerrero";
import { getter } from "../utils/SheetDecorators";

export class Clazz implements BaseCommand {
  
    public apply(sheet:Sheet){
        for(let i:number;i<this.levels;i++){
            sheet = this._clazz.apply(sheet)
        }
        return sheet
    }

    public constructor(private readonly _clazz: ClazzEnum, private readonly _levels: number) {}

    @getter public levels:number;
}

class ClazzEnum implements BaseCommand {
    public constructor(public readonly apply: (sheet: Sheet) => Sheet) {}
}

export const GUERRERO = new ClazzEnum(guerrero);
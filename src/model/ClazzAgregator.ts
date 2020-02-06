import { BaseCommand } from "./BaseCommand";
import { Clazz } from "./Clazz";
import { LinkedList } from "../utils/LinkedList";
import { Sheet } from "./Sheet";

export class ClazzAgregator implements BaseCommand {
    private _classes: LinkedList<Clazz>;
    
    public constructor(classes: Clazz[]) {
        this._classes = LinkedList.fromArray(classes);
    }

    public apply(sheet: Sheet): Sheet {
        return this.toArray()
            .reduce((acc, func) => func.apply(acc), sheet);
    }

    public readonly toArray = () => {
        return this._classes.toArray();
    }

    public get totalLevel():number{
        return this.toArray()
        .map(clazz => clazz.levels)
        .reduce((accumulator, current) => accumulator + current, 0)
    }

    public get totalPDs():number{
        return this.totalLevel === 0 ? 400 : 500 + this.totalLevel * 100
    }
}
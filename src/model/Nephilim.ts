import { Sheet } from "./Sheet";
import { BaseComand } from "./BaseComand";

export class Nephilim implements BaseComand{
    private readonly id:number;
    private readonly name:string;
    public readonly apply: (sheet: Sheet) => Sheet;
    public readonly unapply: (sheet: Sheet) => Sheet;

    public static readonly NO:Nephilim = new Nephilim(0, "No", ()=>undefined, ()=>undefined)

    constructor(id:number, name:string, apply:(sheet: Sheet) => Sheet, unapply: (sheet: Sheet) => Sheet){
        this.id = id;
        this.name = name;
        this.apply = apply;
        this.unapply = unapply;
    }
}
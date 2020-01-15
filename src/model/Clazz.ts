import { Sheet } from "./Sheet";
import { BaseComand } from "./BaseComand";

export class Clazz implements BaseComand{
    private static allValues = new Map();

    public static readonly GUERRERO:Clazz = new Clazz(0, "Guerrero", () => undefined, () => undefined);

    private readonly id:number;
    private readonly name:string;
    public readonly apply:(sheet:Sheet) => Sheet;
    public readonly unapply:(sheet:Sheet) => Sheet;

    private constructor(id:number, name:string, apply:(sheet:Sheet) => Sheet, unapply:(sheet:Sheet) => Sheet){
        this.id = id;
        this.name = name;
        this.apply = apply;
        this.unapply = unapply;
    }
    
}
import { Sheet } from "./Sheet";
import { BaseComand } from "./BaseComand";

export class Clazz implements BaseComand{
    public readonly apply: (sheet: Sheet) => Sheet;
    private static allValues = new Map();

    public static readonly GUERRERO:Clazz = new Clazz(0, "Guerrero");

    private readonly id:number;
    private readonly name:string;

    private constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
    
}
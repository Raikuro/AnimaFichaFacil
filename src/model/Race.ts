import { Sheet } from "./Sheet";
import { BaseComand } from "./BaseComand";

export class Race implements BaseComand{
    private readonly name:string;
    private readonly _natura:number;
    public readonly apply: (sheet: Sheet) => Sheet;
    
    public get natura(){ return this._natura; } 

    public static readonly HUMANO:Race = new Race("Humano", 0);

    constructor(name:string, natura:number){
        this._natura = natura;
        this.name = name;
    }
}
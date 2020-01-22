export class TypeOfMovement{
    private _maximumDistancePerAssault:()=>number = () => undefined;

    public constructor(private readonly _type:number){}

    public static getTypeOfMovement(agi:number):TypeOfMovement{ return new TypeOfMovement(agi); }

    public get maximumDistancePerAssault():number { return this._maximumDistancePerAssault(); }

    public get passiveDistancePerAssault():number { return this.maximumDistancePerAssault/4; }
}
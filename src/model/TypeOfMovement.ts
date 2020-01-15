export class TypeOfMovement{
    private readonly type:number;
    private _maximumDistancePerAssault:()=>number = () => undefined;

    public constructor(type:number){
        this.type = type;
    }

    public static getTypeOfMovement(agi:number):TypeOfMovement{
        return new TypeOfMovement(agi)
    }

    public get maximumDistancePerAssault():number {
        return this._maximumDistancePerAssault();
    }

    public get passiveDistancePerAssault():number {
        return this.maximumDistancePerAssault/4
    }
}
export class Level{
    private _level:number;

    public constructor(level:number){
        this._level = level;
    }

    get level() { return this._level; }
}
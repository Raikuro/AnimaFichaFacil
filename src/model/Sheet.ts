import { Race } from "./Race";
import { Nephilim } from "./Nephilim";
import { Level } from "./Level";
import { Clazz } from "./Clazz";
import { TypeOfMovement } from "./TypeOfMovement";

class SheetBuilder {
    private _name:string;
    private _appearance:number;
    private _agi:number;
    private _con:number;
    private _des:number;
    private _fue:number;
    private _int:number;
    private _per:number;
    private _pod:number;
    private _vol:number;
    private _level:Level;
    private _clazz:Clazz;
    private _race:Race;
    private _nephilim:Nephilim;

    public withName(name:string):SheetBuilder {
        this._name = name;
        return this;
    };
    public withAppearance(appearance:number):SheetBuilder {
        this._appearance = appearance;
        return this;
    };
    public withAgi(agi:number):SheetBuilder {
        this._agi = agi;
        return this;
    };
    public withCon(con:number):SheetBuilder {
        this._con = con;
        return this;
    };
    public withDes(des:number):SheetBuilder {
        this._des = des;
        return this;
    };
    public withFue(fue:number):SheetBuilder {
        this._fue = fue;
        return this;
    };
    public withInt(int:number):SheetBuilder {
        this._int = int;
        return this;
    };
    public withPer(per:number):SheetBuilder {
        this._per = per;
        return this;
    };
    public withPod(pod:number):SheetBuilder {
        this._pod = pod;
        return this;
    };
    public withVol(vol:number):SheetBuilder {
        this._vol = vol;
        return this;
    };
    public withLevel(level:Level):SheetBuilder {
        this._level = level;
        return this;
    };
    public withClazz(clazz:Clazz):SheetBuilder {
        this._clazz = clazz;
        return this;
    };
    public withRace(race:Race):SheetBuilder {
        this._race = race;
        return this;
    };
    public withNephilim(nephilim:Nephilim):SheetBuilder {
        this._nephilim = nephilim;
        return this;
    };

    constructor() {}

    public build():Sheet{
        return new Sheet(
            this._name,
            this._appearance,
            this._agi,
            this._con, 
            this._des,
            this._fue,
            this._int,
            this._per,
            this._pod,
            this._vol,
            this._level,
            this._clazz,
            this._race,
            this._nephilim)
    }
}

export class Sheet {

    public static builder:SheetBuilder = new SheetBuilder();
    
    private _name: String;
    private _race: Race;
    private _nephilim: Nephilim;
    private _level:Level;
    private _appearance:number;
    private _clazz:Clazz;
    private _agi:number;
    private _con:number;
    private _des:number;
    private _fue:number;
    private _int:number;
    private _per:number;
    private _pod:number;
    private _vol:number;
    
    public get name() { return this._name };
    public get race() { return this._race };
    public get nephilim() { return this._nephilim };
    public get level() { return this._level };
    public get appearance() { return this._appearance };
    public get clazz() { return this._clazz };

    public get agi() { return this._agi };
    public get con() { return this._con };
    public get des() { return this._des };
    public get fue() { return this._fue };
    public get int() { return this._int };
    public get per() { return this._per };
    public get pod() { return this._pod };
    public get vol() { return this._vol };

    public get agiFinal() { return this.agi };
    public get conFinal() { return this.con };
    public get desFinal() { return this.des };
    public get fueFinal() { return this.fue };
    public get intFinal() { return this.int };
    public get perFinal() { return this.per };
    public get podFinal() { return this.pod };
    public get volFinal() { return this.vol };

    public get agiBonus():number{ return this.findBonus(this.agiFinal) };
    public get conBonus():number{ return this.findBonus(this.conFinal) };
    public get desBonus():number{ return this.findBonus(this.desFinal) };
    public get fueBonus():number{ return this.findBonus(this.fueFinal) };
    public get intBonus():number{ return this.findBonus(this.intFinal) };
    public get perBonus():number{ return this.findBonus(this.perFinal) };
    public get podBonus():number{ return this.findBonus(this.podFinal) };
    public get volBonus():number{ return this.findBonus(this.volFinal) };

    public get size() { return this.fueFinal + this.conFinal };
    public get totalLifePoints() { return 20 + this.conFinal*10 + this.conBonus };
    public get currentLifePoints() { return this.totalLifePoints };
    public get iniciative() { return 20 + this.desBonus + this.agiBonus };
    public get fatiguePoints() { return this.conFinal };
    public get currentFatiguePoints() { return this.fatiguePoints };
    public get typeOfMovement() { return TypeOfMovement.getTypeOfMovement(this.agiFinal) };

    public get presence() { return this.totalPDs/20 };
    public get rf() { return this.presence + this.conBonus };
    public get re() { return this.presence + this.conBonus };
    public get rv() { return this.presence + this.conBonus };
    public get rm() { return this.presence + this.podBonus };
    public get rp() { return this.presence + this.volBonus };

    public get exp() { return 0 };
    public get totalPDs() { return this.level.level === 0 ? 400 : 500 + this.level.level * 100 };
    public get availablePcs() { return 3 };
    public get availableAttributeUp() { return Math.floor(this.level.level/2) };

    private readonly findBonus = (attribute:number):number => {
        let attributeAux = attribute-4;
        if(attributeAux === 0) return -5;
        if(attributeAux < 0) return (10*attributeAux);
        
        attributeAux = attribute-5;
        let cuantum = Math.floor(attributeAux/5);
        let cuantum2 = Math.ceil((Math.floor(attributeAux%5))/2);
        let result = (cuantum*3 + cuantum2)*5
        return result;
    }

    public constructor(name:string, appearance: number, agi:number, con:number, des:number, fue:number, int:number, per:number, pod:number, vol:number, level:Level, clazz:Clazz, race:Race, nephilim:Nephilim){
        this._name = name;
        this._appearance = appearance;
        this._agi = agi;
        this._con = con;
        this._des = des;
        this._fue = fue;
        this._int = int;
        this._per = per;
        this._pod = pod;
        this._vol = vol;
        this._level = level;
        this._clazz = clazz;
        this._race = race;
        this._nephilim = nephilim;
    }

}


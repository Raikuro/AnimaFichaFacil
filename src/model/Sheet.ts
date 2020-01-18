import { fold, none, Option, some } from 'fp-ts/lib/Option';
import { Clazz } from "./Clazz";
import { Nephilim } from "./Nephilim";
import { Race } from "./Race";
import { TypeOfMovement } from "./TypeOfMovement";

// function getter(resultIfUndefined) {

//     function getOrInitialize<A>(attr: A, resultIfUndefined: A): A {
//         return attr ? attr : resultIfUndefined;
//     }

//     // console.log("-------------------------", resultIfUndefined);
//     return function setGetters(target: Object, name: string) {
//         return Object.defineProperty(target, name, {
//             get: function () { return getOrInitialize(this["_" + name], resultIfUndefined); }
//         });
//     }
// }

function getter(target: Object, name: string) {
    return Object.defineProperty(target, name, {
        get: function () { return this["_" + name]; }
    });
}


function setter(target: Object, name: string) {
    Object.defineProperty(target, name, {
        set: function (value) { this["_" + name] = value; }
    });
}

class SheetBuilder {
    private _name: string;
    private _appearance: number;
    private _agi: number;
    private _con: number;
    private _des: number;
    private _fue: number;
    private _int: number;
    private _per: number;
    private _pod: number;
    private _vol: number;
    private _level: number;
    private _clazz: Clazz;
    private _race: Race;
    private _nephilim: Option<Nephilim> = none;
    private _gnosis: number;

    public withName(name: string): SheetBuilder {
        this._name = name;
        return this;
    };
    public withAppearance(appearance: number): SheetBuilder {
        this._appearance = appearance;
        return this;
    };
    public withAgi(agi: number): SheetBuilder {
        this._agi = agi;
        return this;
    };
    public withCon(con: number): SheetBuilder {
        this._con = con;
        return this;
    };
    public withDes(des: number): SheetBuilder {
        this._des = des;
        return this;
    };
    public withFue(fue: number): SheetBuilder {
        this._fue = fue;
        return this;
    };
    public withInt(int: number): SheetBuilder {
        this._int = int;
        return this;
    };
    public withPer(per: number): SheetBuilder {
        this._per = per;
        return this;
    };
    public withPod(pod: number): SheetBuilder {
        this._pod = pod;
        return this;
    };
    public withVol(vol: number): SheetBuilder {
        this._vol = vol;
        return this;
    };
    public withLevel(level: number): SheetBuilder {
        this._level = level;
        return this;
    };
    public withClazz(clazz: Clazz): SheetBuilder {
        this._clazz = clazz;
        return this;
    };
    public withRace(race: Race): SheetBuilder {
        this._race = race;
        return this;
    };
    public withNephilim(nephilim: Nephilim): SheetBuilder {
        this._nephilim = some(nephilim);
        return this;
    };
    public withGnosis(gnosis: number): SheetBuilder {
        this._gnosis = gnosis;
        return this;
    };


    constructor() { }

    public build(): Sheet {
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
            this._nephilim,
            this._gnosis
        )
    }
}

export class Sheet {

    // public withName(name:string):Sheet { return new Sheet(this.name, this.appearance, this.agi, this.con, this.des, this.fue, this.int, this.per, this.pod, this.vol, this.level, this.clazz, this.race, this.nephilim); };

    private getOrInitialize<A>(attr: A, result: A): A {
        return attr ? attr : result;
    }

    public readonly applyNephilim = (): Sheet => {
        return fold<Nephilim, Sheet>(() => this, nephilim => nephilim.apply(this))(this.nephilim);
    }

    public readonly applyAll = (): Sheet => {
        return this.applyNephilim();
    }

    private readonly findBonus = (attribute: number): number => {
        let attributeAux = attribute - 4;
        if (attributeAux === 0) return -5;
        if (attributeAux < 0) return (10 * attributeAux);

        attributeAux = attribute - 5;
        let cuantum = Math.floor(attributeAux / 5);
        let cuantum2 = Math.ceil((Math.floor(attributeAux % 5)) / 2);
        let result = (cuantum * 3 + cuantum2) * 5
        return result;
    }

    public static builder: SheetBuilder = new SheetBuilder();

    @getter name;
    @getter race;
    @getter nephilim;
    @getter level;
    @getter appearance;
    @getter clazz;
    @getter gnosis;

    @getter agi;
    @getter con;
    @getter des;
    @getter fue;
    @getter int;
    @getter per;
    @getter pod;
    @getter vol;

    public get agiFinal() { return this.agi };
    public get conFinal() { return this.con };
    public get desFinal() { return this.des };
    public get fueFinal() { return this.fue };
    public get intFinal() { return this.int };
    public get perFinal() { return this.per };
    public get podFinal() { return this.pod };
    public get volFinal() { return this.vol };

    public get agiBonus() { return this.findBonus(this.agiFinal) };
    public get conBonus() { return this.findBonus(this.conFinal) };
    public get desBonus() { return this.findBonus(this.desFinal) };
    public get fueBonus() { return this.findBonus(this.fueFinal) };
    public get intBonus() { return this.findBonus(this.intFinal) };
    public get perBonus() { return this.findBonus(this.perFinal) };
    public get podBonus() { return this.findBonus(this.podFinal) };
    public get volBonus() { return this.findBonus(this.volFinal) };

    public get size() { return this.fueFinal + this.conFinal };
    public get totalLifePoints() { return 20 + this.conFinal * 10 + this.conBonus };
    public get currentLifePoints() { return this.totalLifePoints };
    public get regen() {
        return this.conFinal < 3 ? 0 :
            this.conFinal < 8 ? 1 :
                this.conFinal < 9 ? 2 :
                    this.conFinal - 7
    };
    public get iniciative() { return 20 + this.desBonus + this.agiBonus };
    public get fatiguePoints() { return this.conFinal };
    public get currentFatiguePoints() { return this.fatiguePoints };
    public get typeOfMovement() { return TypeOfMovement.getTypeOfMovement(this.agiFinal) };

    public get presence() { return this.totalPDs / 20 };
    public _rf: number;
    // @getter(this.presence + this.conBonus) @setter rf;
    public _re: number;
    public _rv: number;
    public _rm: number;
    public _rp: number;
    public get rf() { return this.getOrInitialize(this._rf, this.presence + this.conBonus) };
    public get re() { return this.getOrInitialize(this._re, this.presence + this.conBonus) };
    public get rv() { return this.getOrInitialize(this._rv, this.presence + this.conBonus) };
    public get rm() { return this.getOrInitialize(this._rm, this.presence + this.podBonus) };
    public get rp() { return this.getOrInitialize(this._rp, this.presence + this.volBonus) };
    public set rf(rf: number) { this._rf = rf };
    public set re(re: number) { this._re = re };
    public set rv(rv: number) { this._rv = rv };
    public set rm(rm: number) { this._rm = rm };
    public set rp(rp: number) { this._rp = rp };

    public get exp() { return 0 };
    public get totalPDs() { return this.level === 0 ? 400 : 500 + this.level * 100 };
    public get availablePcs() { return 3 };
    public get availableAttributeUp() { return Math.floor(this.level / 2) };

    private _additionalInfo: string[];
    public addAdditionalInfo = (newInfo: string) => this._additionalInfo.push(newInfo);
    public get additionalInfo() { return this._additionalInfo };

    public get naturaPlus() { return this.gnosis - this.race.natura; }

    public constructor(
        private _name: string,
        private _appearance: number,
        private _agi: number,
        private _con: number,
        private _des: number,
        private _fue: number,
        private _int: number,
        private _per: number,
        private _pod: number,
        private _vol: number,
        private _level: number,
        private _clazz: Clazz,
        private _race: Race,
        private _nephilim: Option<Nephilim>,
        private _gnosis: number
    ) {
        this._additionalInfo = [];

        this.applyAll();
    }
}


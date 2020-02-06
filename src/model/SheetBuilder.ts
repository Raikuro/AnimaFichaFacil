import { none, Option, some } from 'fp-ts/lib/Option';
import { Clazz } from "./Clazz";
import { Nephilim } from "./Nephilim";
import { Race } from "./Race";
import { Sheet } from './Sheet';
import { Sex } from './Sex';

export class SheetBuilder {

    public withName(name: string): SheetBuilder {
        this._name = name;
        return this;
    }

    public withSex(sex: Sex): SheetBuilder {
        this._sex = sex;
        return this;
    }

    public withAppearance(appearance: number): SheetBuilder {
        this._appearance = appearance;
        return this;
    }

    public withAgi(agi: number): SheetBuilder {
        this._agi = agi;
        return this;
    }

    public withCon(con: number): SheetBuilder {
        this._con = con;
        return this;
    }

    public withDes(des: number): SheetBuilder {
        this._des = des;
        return this;
    }

    public withFue(fue: number): SheetBuilder {
        this._fue = fue;
        return this;
    }

    public withInt(int: number): SheetBuilder {
        this._int = int;
        return this;
    }

    public withPer(per: number): SheetBuilder {
        this._per = per;
        return this;
    }

    public withPod(pod: number): SheetBuilder {
        this._pod = pod;
        return this;
    }

    public withVol(vol: number): SheetBuilder {
        this._vol = vol;
        return this;
    }

    public withClasses(classes: Clazz[]): SheetBuilder {
        this._classes = classes;
        return this;
    }

    public withRace(race: Race): SheetBuilder {
        this._race = race;
        return this;
    }

    public withNephilim(nephilim: Nephilim): SheetBuilder {
        this._nephilim = some(nephilim);
        return this;
    }

    public withGnosis(gnosis: number): SheetBuilder {
        this._gnosis = gnosis;
        return this;
    }

    constructor(
        private _name?: string,
        private _sex?: Sex,
        private _appearance?: number,
        private _agi?: number,
        private _con?: number,
        private _des?: number,
        private _fue?: number,
        private _int?: number,
        private _per?: number,
        private _pod?: number,
        private _vol?: number,
        private _classes?: Clazz[],
        private _race?: Race,
        private _nephilim: Option<Nephilim> = none,
        private _gnosis?: number,
    ) { }

    public build(): Sheet {
        return new Sheet(
            this._name,
            this._sex,
            this._appearance,
            this._agi,
            this._con,
            this._des,
            this._fue,
            this._int,
            this._per,
            this._pod,
            this._vol,
            this._classes,
            this._race,
            this._nephilim,
            this._gnosis
        );
    }
}

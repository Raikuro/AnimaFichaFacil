import { Sheet } from "./Sheet";
import { BaseCommand } from "./BaseCommand";
import { identity } from "fp-ts/lib/function";
import { sylvain } from "./Races/Sylvain";
import { jayan } from "./Races/jayan";
import { dAnjayni } from "./Races/DAnjayni";
import { ebudan } from "./Races/Ebudan";
import { daimah } from "./Races/Daimah";
import { dukZarist } from "./Races/Dukzarist";
import { devah } from "./Races/Devah";
import { vetala } from "./Races/Vetala";
import { tuanDalyr } from "./Races/TuanDalyr";
import { turak } from "./Races/Turak";

export class Race implements BaseCommand {
    constructor(private readonly _natura: number, public readonly apply: (sheet: Sheet) => Sheet) {}

    public get natura() { return this._natura; }
    
    public static readonly HUMANO: Race = new Race(0, identity)
    public static readonly SYLVAIN: Race = new Race(5, sylvain);
    public static readonly JAYAN: Race = new Race(0, jayan);
    public static readonly D_ANJAYNI: Race = new Race(5, dAnjayni);
    public static readonly EBUDAN: Race = new Race(10, ebudan);
    public static readonly DAIMAH: Race = new Race(5, daimah);
    public static readonly DUK_ZARIST: Race = new Race(5, dukZarist);
    public static readonly DEVAH: Race = new Race(5, devah);
    public static readonly VETALA: Race = new Race(5, vetala);
    public static readonly TUAN_DALYR: Race = new Race(0, tuanDalyr);
    public static readonly TURAK: Race = new Race(5, turak);
}
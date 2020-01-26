import { Sheet } from "./Sheet";
import { BaseComand } from "./BaseComand";
import { identity } from "fp-ts/lib/function";

export class Race implements BaseComand {
    constructor(natura: number, apply: (sheet: Sheet) => Sheet) {
        this._natura = natura;
        this.apply = apply;
    }

    private readonly _natura: number;
    public get natura() { return this._natura; }

    public readonly apply: (sheet: Sheet) => Sheet;

    private static sylvain: (sheet: Sheet) => Sheet
    private static jayan: (sheet: Sheet) => Sheet
    private static dAnjayni: (sheet: Sheet) => Sheet
    private static ebudan: (sheet: Sheet) => Sheet
    private static daimah: (sheet: Sheet) => Sheet
    private static dukZarist: (sheet: Sheet) => Sheet
    private static devah: (sheet: Sheet) => Sheet
    private static vetala: (sheet: Sheet) => Sheet
    private static tuanDalyr: (sheet: Sheet) => Sheet
    private static turak: (sheet: Sheet) => Sheet

    public static readonly HUMANO: Race = new Race(0, identity)
    public static readonly SYLVAIN: Race = new Race(5, Race.sylvain);
    public static readonly JAYAN: Race = new Race(0, Race.jayan);
    public static readonly D_ANJAYNI: Race = new Race(5, Race.dAnjayni);
    public static readonly EBUDAN: Race = new Race(10, Race.ebudan);
    public static readonly DAIMAH: Race = new Race(5, Race.daimah);
    public static readonly DUK_ZARIST: Race = new Race(5, Race.dukZarist);
    public static readonly DEVAH: Race = new Race(5, Race.devah);
    public static readonly VETALA: Race = new Race(5, Race.vetala);
    public static readonly TUAN_DALYR: Race = new Race(0, Race.tuanDalyr);
    public static readonly TURAK: Race = new Race(5, Race.turak);
}
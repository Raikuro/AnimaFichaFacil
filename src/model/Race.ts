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

    private static sylvain: (sheet: Sheet) => Sheet = (sheet: Sheet) => {
        sheet.desFinal += 1;
        sheet.agiFinal += 1;
        sheet.podFinal += 1;
        sheet.intFinal += 1;
        sheet.fueFinal -= 1;
        sheet.conFinal -= 1;

        sheet.rm += 30;
        sheet.rp += 30;
        sheet.rv += 10;
        sheet.re += 20;

        sheet.regen += 1;
        sheet.addAdditionalInfo("Un Sylvain no puede elegir las desventajas de Vulnerabilidad a la magia o Fácil posesión, Salud enfermiza, Vulnerable a los venenos o enfermedad grave incurable.");
        sheet.addAdditionalInfo("Inhumano en todas las caracteristicas.");
        sheet.addAdditionalInfo("Presentir lo oscuro y lo luminososo.");
        sheet.addAdditionalInfo("Necesidades limitadas.");
        sheet.addAdditionalInfo("Lazo hacia la luz.");
        sheet.addAdditionalInfo("Obligación mágica o puede no cogerlo y ser Paria.");
        sheet.expPenalizator -= 3;
        sheet.levelMod += 2;
        return sheet;
    }

    private static jayan: (sheet: Sheet) => Sheet = (sheet: Sheet) => {
        return sheet
    }

    private static dAnjayni: (sheet: Sheet) => Sheet = (sheet: Sheet) => {
        sheet.addAdditionalInfo("Indetectibilidad: Aprende la habilidad Ocultacion del Ki.");
        sheet.addAdditionalInfo("Olvido.");
        sheet.addAdditionalInfo("El rostro de la araña.");
        sheet.addAdditionalInfo("Susurros silenciosos.");
        sheet.addAdditionalInfo("Pasar sin dejar rastro.");
        sheet.addAdditionalInfo("Nunca puede tener una apariencia inferior a 3 o superior a 7.");
        sheet.expPenalizator -= 3;
        sheet.levelMod += 1;
        return sheet;
    }

    private static ebudan: (sheet: Sheet) => Sheet = (sheet: Sheet) => {
        sheet.addAdditionalInfo("Or'inie.");
        sheet.addAdditionalInfo("Alas de Serafín.");
        sheet.addAdditionalInfo("Esencia celestial.");
        sheet.levelMod += 1;
        //TODO: IMPLEMENT ASCEND
        return sheet;
    }

    private static daimah: (sheet: Sheet) => Sheet = (sheet: Sheet) => {
        return sheet;
    }

    private static dukZarist: (sheet: Sheet) => Sheet = (sheet: Sheet) => {
        return sheet;
    }

    private static devah: (sheet: Sheet) => Sheet = (sheet: Sheet) => {
        return sheet;
    }

    private static vetala: (sheet: Sheet) => Sheet = (sheet: Sheet) => {
        return sheet;
    }

    private static tuanDalyr: (sheet: Sheet) => Sheet = (sheet: Sheet) => {
        return sheet;
    }

    private static turak: (sheet: Sheet) => Sheet = (sheet: Sheet) => {
        return sheet;
    }


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
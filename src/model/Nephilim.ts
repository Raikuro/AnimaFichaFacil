import { Sheet } from "./Sheet";
import { BaseComand } from "./BaseComand";

export class Nephilim implements BaseComand{

    public readonly apply: (Sheet) => Sheet;

    private constructor(apply: (Sheet) => Sheet) {
        this.apply = apply;
    }

    private static sylvain(sheet: Sheet): Sheet {
        sheet.rm += 10
        sheet.rp += 10
        sheet.re += 20
        sheet.rf += 5
        sheet.rv += 5
        sheet.addAdditionalInfo("Resistencia especial de +10 contra cualquier efecto basado en luz.");
        sheet.addAdditionalInfo("No puede escoger desequilibro magico hacia Oscuridad");
        return sheet;
    };
    
    private static jayan(sheet: Sheet): Sheet {
       return undefined
    };
    
    private static dAnjayni(sheet: Sheet): Sheet {
       return undefined
    };
    
    private static ebudan(sheet: Sheet): Sheet {
       return undefined
    };
    
    private static daimah(sheet: Sheet): Sheet {
       return undefined
    };
    
    private static dukZarist(sheet: Sheet): Sheet {
       return undefined
    };
    
    public static readonly SYLVAIN: Nephilim = new Nephilim(Nephilim.sylvain);
    public static readonly JAYAN: Nephilim = new Nephilim(Nephilim.jayan);
    public static readonly D_ANJAYNI: Nephilim = new Nephilim(Nephilim.dAnjayni);
    public static readonly EBUDAN: Nephilim = new Nephilim(Nephilim.ebudan);
    public static readonly DAIMAH: Nephilim = new Nephilim(Nephilim.daimah);
    public static readonly DUK_ZARIST: Nephilim = new Nephilim(Nephilim.dukZarist);

}
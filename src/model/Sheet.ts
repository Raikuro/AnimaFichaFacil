import { fold, Option } from 'fp-ts/lib/Option';
import { Clazz } from "./Clazz";
import { Nephilim } from "./Nephilim";
import { Race } from "./Race";
import { TypeOfMovement } from "./TypeOfMovement";
import { getter, calculatedValue } from '../utils/SheetDecorators';
import { SheetBuilder } from './SheetBuilder';

export class Sheet {

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

    @getter name: number;
    @getter race: Race;
    @getter nephilim: Option<Nephilim>;
    @getter level: number;
    @getter appearance: number;
    @getter clazz: Clazz;
    @getter gnosis: number;

    @getter agi: number;
    @getter con: number;
    @getter des: number;
    @getter fue: number;
    @getter int: number;
    @getter per: number;
    @getter pod: number;
    @getter vol: number;

    @calculatedValue((sheet: Sheet) => sheet.agi) agiFinal: number;
    @calculatedValue((sheet: Sheet) => sheet.con) conFinal: number;
    @calculatedValue((sheet: Sheet) => sheet.des) desFinal: number;
    @calculatedValue((sheet: Sheet) => sheet.fue) fueFinal: number;
    @calculatedValue((sheet: Sheet) => sheet.int) intFinal: number;
    @calculatedValue((sheet: Sheet) => sheet.per) perFinal: number;
    @calculatedValue((sheet: Sheet) => sheet.pod) podFinal: number;
    @calculatedValue((sheet: Sheet) => sheet.vol) volFinal: number;

    @calculatedValue((sheet: Sheet) => sheet.findBonus(sheet.agiFinal)) agiBonus: number;
    @calculatedValue((sheet: Sheet) => sheet.findBonus(sheet.conFinal)) conBonus: number;
    @calculatedValue((sheet: Sheet) => sheet.findBonus(sheet.desFinal)) desBonus: number;
    @calculatedValue((sheet: Sheet) => sheet.findBonus(sheet.fueFinal)) fueBonus: number;
    @calculatedValue((sheet: Sheet) => sheet.findBonus(sheet.intFinal)) intBonus: number;
    @calculatedValue((sheet: Sheet) => sheet.findBonus(sheet.perFinal)) perBonus: number;
    @calculatedValue((sheet: Sheet) => sheet.findBonus(sheet.podFinal)) podBonus: number;
    @calculatedValue((sheet: Sheet) => sheet.findBonus(sheet.volFinal)) volBonus: number;

    @calculatedValue((sheet: Sheet) => sheet.fueFinal + sheet.conFinal) size: number;
    @calculatedValue((sheet: Sheet) => 20 + sheet.conFinal * 10 + sheet.conBonus) totalLifePoints: number;
    @calculatedValue((sheet: Sheet) => sheet.totalLifePoints) currentLifePoints: number;
    @calculatedValue((sheet: Sheet) =>
        sheet.conFinal < 3 ? 0 :
            sheet.conFinal < 8 ? 1 :
                sheet.conFinal < 9 ? 2 :
                    sheet.conFinal - 7) regen: number
    @calculatedValue((sheet: Sheet) => 20 + sheet.desBonus + sheet.agiBonus) iniciative: number;
    @calculatedValue((sheet: Sheet) => sheet.conFinal) fatiguePoints: number;
    @calculatedValue((sheet: Sheet) => sheet.fatiguePoints) currentFatiguePoints: number;
    @calculatedValue((sheet: Sheet) => sheet.agiFinal) typeOfMovement: TypeOfMovement;

    @calculatedValue((sheet: Sheet) => sheet.totalPDs / 20) presence;
    @calculatedValue((sheet: Sheet) => sheet.presence + sheet.conBonus) rf: number;
    @calculatedValue((sheet: Sheet) => sheet.presence + sheet.conBonus) re: number;
    @calculatedValue((sheet: Sheet) => sheet.presence + sheet.conBonus) rv: number;
    @calculatedValue((sheet: Sheet) => sheet.presence + sheet.podBonus) rm: number;
    @calculatedValue((sheet: Sheet) => sheet.presence + sheet.volBonus) rp: number;

    @calculatedValue((sheet: Sheet) => sheet.level === 0 ? 400 : 500 + sheet.level * 100) totalPDs: number;
    @calculatedValue((sheet: Sheet) => 3) availablePcs: number;
    @calculatedValue((sheet: Sheet) => 0) exp: number;
    @calculatedValue((sheet: Sheet) => 0) expPenalizator: number;
    @calculatedValue((sheet: Sheet) => Math.floor(sheet.level / 2)) availableAttributeUp: number;

    @getter additionalInfo: string[];
    public addAdditionalInfo = (newInfo: string) => this._additionalInfo.push(newInfo);

    @calculatedValue((sheet: Sheet) => sheet.gnosis - sheet.race.natura) naturaPlus;

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
        private _gnosis: number,
        private _additionalInfo: string[] = []
    ) {
        this.applyAll();
    }
}


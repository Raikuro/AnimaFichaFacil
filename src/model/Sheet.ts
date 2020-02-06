import { fold, Option } from 'fp-ts/lib/Option';
import { Clazz } from "./Clazz";
import { Nephilim } from "./Nephilim";
import { Race } from "./Race";
import { getter, calculatedValue, setter, getDecoratedProperties, importantSetter, important } from '../utils/SheetDecorators';
import { SheetBuilder } from './SheetBuilder';
import { Sex } from './Sex';
import 'reflect-metadata';
import { ClazzAgregator } from './ClazzAgregator';

export class Sheet {

    private readonly applyNephilim = (): Sheet => {
        return fold<Nephilim, Sheet>(() => this, nephilim => nephilim.apply(this))(this.nephilim);
    }

    private readonly applyRace = (): Sheet => {
        return this.race.apply(this);
    }

    private readonly applyClasses = (): Sheet => {
        return this._classes.apply(this);
    }

    private readonly applyAll = (): Sheet => {
        return this
            .applyRace()
            .applyNephilim()
            .applyClasses();
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

    public static builder = () => new SheetBuilder();

    @important @getter @setter name: string;

    @getter @importantSetter sex: Sex;

    @getter @importantSetter race: Race;

    @getter @importantSetter nephilim: Option<Nephilim>;

    @important @getter @setter appearance: number;

    @important private _classes: ClazzAgregator;
    public get classes(): Clazz[] {
        return this._classes.toArray();
    }
    public set classes(classes: Clazz[]) {
        this._classes = new ClazzAgregator(classes);
        this.recalculateAll;
    }

    @getter @importantSetter gnosis: number;

    @getter @importantSetter agi: number;

    @getter @importantSetter con: number;

    @getter @importantSetter des: number;

    @getter @importantSetter fue: number;

    @getter @importantSetter int: number;

    @getter @importantSetter per: number;

    @getter @importantSetter pod: number;

    @getter @importantSetter vol: number;

    @calculatedValue((sheet: Sheet) => sheet._classes.totalLevel) level: number;

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
    @calculatedValue((sheet: Sheet) => sheet.agiFinal) typeOfMovement: number;

    @calculatedValue((sheet: Sheet) => sheet.totalPDs / 20) presence;
    @calculatedValue((sheet: Sheet) => sheet.presence + sheet.conBonus) rf: number;
    @calculatedValue((sheet: Sheet) => sheet.presence + sheet.conBonus) re: number;
    @calculatedValue((sheet: Sheet) => sheet.presence + sheet.conBonus) rv: number;
    @calculatedValue((sheet: Sheet) => sheet.presence + sheet.podBonus) rm: number;
    @calculatedValue((sheet: Sheet) => sheet.presence + sheet.volBonus) rp: number;

    @calculatedValue((sheet: Sheet) => sheet._classes.totalPDs) totalPDs: number;
    @calculatedValue((sheet: Sheet) => 3) availablePcs: number;
    @calculatedValue((sheet: Sheet) => 0) exp: number;
    @calculatedValue((sheet: Sheet) => 0) expPenalizator: number;
    @calculatedValue((sheet: Sheet) => Math.floor(sheet.level / 2)) availableAttributeUp: number;
    @calculatedValue((sheet: Sheet) => 0) levelMod: number;

    public get additionalInfo() {
        return this["_additionalInfo"] ? this["_additionalInfo"] : [];
    }
    public addAdditionalInfo = (newInfo: string) => this._additionalInfo.push(newInfo);

    @calculatedValue((sheet: Sheet) => sheet.gnosis - sheet.race.natura) naturaPlus;

    public constructor(
        private _name: string,
        private _sex: Sex,
        private _appearance: number,
        private _agi: number,
        private _con: number,
        private _des: number,
        private _fue: number,
        private _int: number,
        private _per: number,
        private _pod: number,
        private _vol: number,
        classes: Clazz[],
        private _race: Race,
        private _nephilim: Option<Nephilim>,
        private _gnosis: number,
        private _additionalInfo: string[] = []
    ) {
        this._classes = new ClazzAgregator(classes);
        this.applyAll();
    }

    public readonly recalculateAll = () => {
        let importantProperties: string[] = getDecoratedProperties(this, "important")
            .map(name => name[0] === "_" ? name.slice(1) : name)
        let allPropertiesName: string[] = Object.getOwnPropertyNames(this).filter(name => name[0] === "_")
        allPropertiesName.forEach(name => {
            if (!importantProperties.includes(name.slice(1))) {
                this[name] = undefined;
            }
        });
        this._additionalInfo = [];
        this.applyAll();
    }
}
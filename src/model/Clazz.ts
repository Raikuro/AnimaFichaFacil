import { Sheet } from "./Sheet";
import { BaseCommand } from "./BaseCommand";
import { getter } from "../utils/SheetDecorators";
import { Guerrero } from "./Classes/guerrero";
import { GuerreroAcrobata } from "./Classes/GuerreroAcrobata";
import { paladin } from "./Classes/paladin";
import { paladinOscuro } from "./Classes/PaladinOscuro";
import { tecnicista } from "./Classes/Tecnicista";
import { tao } from "./Classes/Tao";
import { explorador } from "./Classes/Explorador";
import { sombra } from "./Classes/Sombra";
import { ladron } from "./Classes/Ladron";
import { hechicero } from "./Classes/Hechicero";
import { warlock } from "./Classes/Warlock";
import { ilusionista } from "./Classes/Ilusionista";
import { hechiceroMentalista } from "./Classes/HechiceroMentalista";
import { conjurador } from "./Classes/Conjurador";
import { guerreroConjurador } from "./Classes/GuerreroConjurador";
import { mentalista } from "./Classes/Mentalista";
import { guerreroMentalista } from "./Classes/GuerreroMentalista";
import { novel } from "./Classes/Novel";
import { maestroEnArmas } from "./Classes/MaestroEnArmas";
import { asesino } from "./Classes/Asesino";
import { PdsForm } from "./PdsForm";
import { BaseClazz } from "./Classes/BaseClazz";
import { InvestedPdsForm } from "./InvestedPdsForm";

export class Clazz implements BaseCommand {
  
    public apply(sheet:Sheet){
        for(let i=0;i<this.levels;i++){
            sheet = this._clazz.apply(sheet)
        }

        Object.getOwnPropertyNames(this._pdsInvested).forEach(property => {
            sheet.abilities[property.slice(1)] = this._pdsInvested[property] / this.clazz.baseForm[property]
        })
        return sheet;
    }

    public constructor(private readonly _clazz: ClazzEnum, private readonly _levels: number, private readonly _pdsInvested: InvestedPdsForm = new InvestedPdsForm()) {}

    @getter public levels:number;

    @getter public clazz: ClazzEnum;
}

class ClazzEnum implements BaseCommand {

    public readonly apply: (sheet: Sheet) => Sheet;
    public readonly baseForm:PdsForm;

    public constructor(readonly clazz: BaseClazz){
        this.apply = clazz.naturalBonuses;
        this.baseForm = clazz.baseForm;
    }

}

export const GUERRERO = new ClazzEnum(new Guerrero());
export const GUERRERO_ACROBATA = new ClazzEnum(new GuerreroAcrobata());
// export const PALADIN = new ClazzEnum(paladin);
// export const PALADIN_OSCURO = new ClazzEnum(paladinOscuro);
// export const MAESTRO_EN_ARMAS = new ClazzEnum(maestroEnArmas);
// export const TECNICISTA = new ClazzEnum(tecnicista);
// export const TAO = new ClazzEnum(tao);
// export const EXPLORADOR = new ClazzEnum(explorador);
// export const SOMBRA = new ClazzEnum(sombra);
// export const LADRON = new ClazzEnum(ladron);
// export const ASESINO = new ClazzEnum(asesino);
// export const HECHICERO = new ClazzEnum(hechicero);
// export const WARLOCK = new ClazzEnum(warlock);
// export const ILUSIONISTA = new ClazzEnum(ilusionista);
// export const HECHICERO_MENTALISTA = new ClazzEnum(hechiceroMentalista);
// export const CONJURADOR = new ClazzEnum(conjurador);
// export const GUERRERO_CONJURADOR = new ClazzEnum(guerreroConjurador);
// export const MENTALISTA = new ClazzEnum(mentalista);
// export const GUERRERO_MENTALISTA = new ClazzEnum(guerreroMentalista);
// export const NOVEL = new ClazzEnum(novel);
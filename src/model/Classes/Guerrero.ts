import { Sheet } from "../Sheet";
import { PdsForm } from "../PdsForm";
import { BaseClazz } from "./BaseClazz";
import { PdsFormBuilder } from "../PdsFormBuilder";

export class Guerrero extends BaseClazz{
    public constructor(){
        super(guerreroNaturalBonuses, guerreroBaseForm());
    }
}

function guerreroBaseForm():PdsForm{
    let result = new PdsFormBuilder();
    result.withHAtaque(2);
    result.withHParada(2);
    result.withHEsquiva(2);
    result.withLlevarArmadura(2);
    result.withKiAgi(2);
    result.withKiCon(2);
    result.withKiDes(2);
    result.withKiFue(2);
    result.withKiPod(2);
    result.withKiVol(2);
    result.withAcuAgi(20);
    result.withAcuCon(20);
    result.withAcuDes(20);
    result.withAcuFue(20);
    result.withAcuPod(20);
    result.withAcuVol(20);
    return result.build();
};

function guerreroNaturalBonuses(sheet: Sheet): Sheet {
    sheet.abilities.bonusHAtaque+=5;
    sheet.abilities.bonusHParada+=5;
    sheet.abilities.bonusLlevarArmadura+=5;
    return sheet;
};


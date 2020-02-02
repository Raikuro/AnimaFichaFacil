import { Sheet } from "../Sheet";

export function ebudan(sheet: Sheet):Sheet {
    sheet.addAdditionalInfo("Or'inie.");
    sheet.addAdditionalInfo("Alas de Serafín.");
    sheet.addAdditionalInfo("Esencia celestial.");
    sheet.levelMod += 1;
    //TODO: IMPLEMENT ASCEND
    return sheet;
}
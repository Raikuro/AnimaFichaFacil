import { Sheet } from "../Sheet";

export function daimah(sheet: Sheet): Sheet {
    sheet.addAdditionalInfo("Sentir el bosque.");
    sheet.addAdditionalInfo("Movimiento por los bosques.");
    sheet.addAdditionalInfo("Ver la esencia.");
    sheet.addAdditionalInfo("Naturaleza curativa.");
    sheet.size -= 1;
    sheet.expPenalizator -= 3;
    return sheet;
 };
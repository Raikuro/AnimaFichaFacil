import { Sheet } from "../Sheet";

export function turak(sheet: Sheet): Sheet {
    sheet.addAdditionalInfo("Armas naturales: Obtiene armas naturales con daño base 30+bono de FUE y atacan en FIL.");
    sheet.addAdditionalInfo("Memoria racial.");
    sheet.addAdditionalInfo("Piel resistente: Obtiene armadura natural 1 contra FIL, CON, PEN, CAL.");
    sheet.addAdditionalInfo("Sangre fría");
    sheet.iniciative -= 10;
    sheet.expPenalizator -= 3;
    return sheet;
 };
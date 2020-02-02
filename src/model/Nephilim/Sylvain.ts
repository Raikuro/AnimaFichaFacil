import { Sheet } from "../Sheet";

export function sylvain(sheet: Sheet): Sheet {
    sheet.rm += 10;
    sheet.rp += 10;
    sheet.re += 20;
    sheet.rf += 5;
    sheet.rv += 5;
    sheet.regen += 1;
    sheet.addAdditionalInfo("Desequilibrio hacia la luz");
    sheet.addAdditionalInfo("Presentir lo oscuro y lo luminososo.");
    sheet.addAdditionalInfo("Necesidades limitadas.");
    sheet.expPenalizator -= 4
    return sheet;
 };
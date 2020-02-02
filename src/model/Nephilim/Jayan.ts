import { Sheet } from "../Sheet";

export function jayan(sheet: Sheet): Sheet {
    sheet.size += 2;
    sheet.fueFinal += 1;
    sheet.fatiguePoints += 1;
    sheet.rf += 15;
    sheet.rm -= 10;
    sheet.addAdditionalInfo("No puede escoger tamaño desigual para disminuir su tamaño.");
    sheet.addAdditionalInfo("No puede escoger reducir FUE dos puntos.");
    sheet.addAdditionalInfo("Visión espiritual.");
    sheet.expPenalizator -= 3
    return sheet;
 };
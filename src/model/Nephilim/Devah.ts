import { Sheet } from "../Sheet";

export function devah(sheet: Sheet): Sheet {
    sheet.rm += 10;
    sheet.rp += 10;
    sheet.rf -= 10;
    sheet.re -= 10;
    sheet.addAdditionalInfo("El ojo del alma.");
    sheet.addAdditionalInfo("Lazos existenciales: +10 a Convocar y Desconvocar.");
    sheet.expPenalizator -= 3;
    return sheet;
 };
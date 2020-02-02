import { Sheet } from "../Sheet";

export function dAnjayni(sheet: Sheet): Sheet {
    sheet.addAdditionalInfo("Indetectibilidad: Aprende la habilidad Ocultacion del Ki.");
    sheet.addAdditionalInfo("Olvido.");
    sheet.addAdditionalInfo("Susurros silenciosos.");
    sheet.addAdditionalInfo("Pasar sin dejar rastro.");
    sheet.addAdditionalInfo("Nunca puede tener una apariencia inferior a 3 o superior a 7.");
    sheet.expPenalizator -= 3;
    return sheet;
 };
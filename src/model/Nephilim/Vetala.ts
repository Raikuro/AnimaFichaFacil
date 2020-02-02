import { Sheet } from "../Sheet";

export function vetala(sheet: Sheet): Sheet {
    sheet.re -= 20;
    sheet.regen += 1
    sheet.addAdditionalInfo("Aguante al daño crítico.");
    sheet.addAdditionalInfo("Éxtasis sanguíneo.");
    sheet.addAdditionalInfo("Piel fotosensible.");
    sheet.addAdditionalInfo("Obsesión por la sangre.");
    sheet.expPenalizator -= 3;
    return sheet;
 };
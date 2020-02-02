import { Sheet } from "../Sheet";
import { Sex } from "../Sex";

export function dukZarist(sheet: Sheet): Sheet {
    sheet.regen += 1;
    sheet.rf += 15;
    sheet.re += 15;
    sheet.rv += 15;
    sheet.rm += 15;
    sheet.rp += 15;
    if (Sex.MALE === sheet.sex) { sheet.rf += 5; }
    else { sheet.rm += 5; }
    sheet.addAdditionalInfo("Desequilibrio hacia la oscuridad.");
    sheet.addAdditionalInfo("Aguante a la muerte.");
    sheet.addAdditionalInfo("Necesidades limitadas.");
    sheet.addAdditionalInfo("Presentir lo oscuro y lo luminoso.");
    sheet.addAdditionalInfo("Vision nocturna.");
    sheet.addAdditionalInfo("Devoción al Fuego: Si desarrolla sus habilidades mentales, tiene la obligación de adquirir como primera disciplina la Piroquinesis.");
    sheet.addAdditionalInfo("Cuerpos perfectos: La esencia de los Duk´zarist impide que el cuerpo desarrolle ningún tipo de malformación natural. El Nephilim no puede elegir ninguna de las siguientes desventajas: Miembro atrofiado, Salud enfermiza, Vulnerabilidad a los venenos, Miopía, Debilidad física, Enfermedad grave, Mudo, Ciego o Sordo.");
    sheet.addAdditionalInfo("Alergia al metal.");
    sheet.expPenalizator -= 5;
    return sheet;
 };
import { Sheet } from "../Sheet";

export function sylvain(sheet: Sheet): Sheet {
    sheet.desFinal += 1;
    sheet.agiFinal += 1;
    sheet.podFinal += 1;
    sheet.intFinal += 1;
    sheet.fueFinal -= 1;
    sheet.conFinal -= 1;

    sheet.rm += 30;
    sheet.rp += 30;
    sheet.rv += 10;
    sheet.re += 20;

    sheet.regen += 1;
    sheet.addAdditionalInfo("Un Sylvain no puede elegir las desventajas de Vulnerabilidad a la magia o Fácil posesión, Salud enfermiza, Vulnerable a los venenos o enfermedad grave incurable.");
    sheet.addAdditionalInfo("Inhumano en todas las caracteristicas.");
    sheet.addAdditionalInfo("Presentir lo oscuro y lo luminososo.");
    sheet.addAdditionalInfo("Necesidades limitadas.");
    sheet.addAdditionalInfo("Lazo hacia la luz.");
    sheet.addAdditionalInfo("Obligación mágica o puede no cogerlo y ser Paria.");
    sheet.expPenalizator -= 3;
    sheet.levelMod += 2;
    return sheet;
}
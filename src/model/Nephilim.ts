import { BaseComand } from "./BaseComand";
import { Sex } from "./Sex";
import { Sheet } from "./Sheet";

export class Nephilim implements BaseComand {

   public readonly apply: (sheet: Sheet) => Sheet;

   private constructor(apply: (sheet: Sheet) => Sheet) {
      this.apply = apply;
   }

   private static sylvain(sheet: Sheet): Sheet {
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

   private static jayan(sheet: Sheet): Sheet {
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

   private static dAnjayni(sheet: Sheet): Sheet {
      sheet.addAdditionalInfo("Indetectibilidad: Aprende la habilidad Ocultacion del Ki y tiene un bono de +30.");
      sheet.addAdditionalInfo("Olvido.");
      sheet.addAdditionalInfo("Susurros silenciosos.");
      sheet.addAdditionalInfo("Pasar sin dejar rastro.");
      sheet.addAdditionalInfo("Nunca puede tener una apariencia inferior a 3 o superior a 7.");
      sheet.expPenalizator -= 3;
      return sheet;
   };

   private static ebudan(sheet: Sheet): Sheet {
      sheet.addAdditionalInfo("Or'inie.");
      sheet.addAdditionalInfo("Alas de Serafín.");
      sheet.addAdditionalInfo("Esencia celestial.");
      sheet.expPenalizator -= 3;
      return sheet;
   };

   private static daimah(sheet: Sheet): Sheet {
      sheet.addAdditionalInfo("Sentir el bosque.");
      sheet.addAdditionalInfo("Movimiento por los bosques.");
      sheet.addAdditionalInfo("Ver la esencia.");
      sheet.addAdditionalInfo("Naturaleza curativa.");
      sheet.size -= 1;
      sheet.expPenalizator -= 3;
      return sheet;
   };

   private static dukZarist(sheet: Sheet): Sheet {
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

   private static devah(sheet: Sheet): Sheet {
      sheet.rm += 10;
      sheet.rp += 10;
      sheet.rf -= 10;
      sheet.re -= 10;
      sheet.addAdditionalInfo("El ojo del alma.");
      sheet.addAdditionalInfo("Lazos existenciales: +10 a Convocar y Desconvocar.");
      sheet.expPenalizator -= 3;
      return sheet;
   };

   private static vetala(sheet: Sheet): Sheet {
      sheet.re -= 20;
      sheet.regen += 1
      sheet.addAdditionalInfo("Aguante al daño crítico.");
      sheet.addAdditionalInfo("Éxtasis sanguíneo.");
      sheet.addAdditionalInfo("Piel fotosensible.");
      sheet.addAdditionalInfo("Obsesión por la sangre.");
      sheet.expPenalizator -= 3;
      return sheet;
   };

   private static turak(sheet: Sheet): Sheet {
      sheet.addAdditionalInfo("Armas naturales: Obtiene armas naturales con daño base 30+bono de FUE y atacan en FIL.");
      sheet.addAdditionalInfo("Memoria racial.");
      sheet.addAdditionalInfo("Piel resistente: Obtiene armadura natural 1 contra FIL, CON, PEN, CAL.");
      sheet.addAdditionalInfo("Sangre fría");
      sheet.iniciative -= 10;
      sheet.expPenalizator -= 3;
      return sheet;
   };

   public static readonly SYLVAIN: Nephilim = new Nephilim(Nephilim.sylvain);
   public static readonly JAYAN: Nephilim = new Nephilim(Nephilim.jayan);
   public static readonly D_ANJAYNI: Nephilim = new Nephilim(Nephilim.dAnjayni);
   public static readonly EBUDAN: Nephilim = new Nephilim(Nephilim.ebudan);
   public static readonly DAIMAH: Nephilim = new Nephilim(Nephilim.daimah);
   public static readonly DUK_ZARIST: Nephilim = new Nephilim(Nephilim.dukZarist);
   public static readonly DEVAH: Nephilim = new Nephilim(Nephilim.devah);
   public static readonly VETALA: Nephilim = new Nephilim(Nephilim.vetala);
   public static readonly TURAK: Nephilim = new Nephilim(Nephilim.turak);

}
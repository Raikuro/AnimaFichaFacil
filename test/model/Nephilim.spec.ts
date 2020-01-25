import { expect } from 'chai';
import { fold } from 'fp-ts/lib/Option';
import 'mocha';
import { Nephilim } from "../../src/model/Nephilim";
import { Sex } from "../../src/model/Sex";
import { Sheet } from "../../src/model/Sheet";

function identity<A>(a: A): A { return a; }

export default function suite() {
    it('nephilim sylvain should add his own advantages', () => {
    const sheet: Sheet = this.sheetBuilder
      .withNephilim(Nephilim.SYLVAIN)
      .build();

    expect(fold<Nephilim, any>(undefined, identity)(sheet.nephilim)).to.equal(Nephilim.SYLVAIN);

    expect(sheet.rf).to.equal(15);
    expect(sheet.re).to.equal(30);
    expect(sheet.rv).to.equal(15);
    expect(sheet.rm).to.equal(60);
    expect(sheet.rp).to.equal(70);
    expect(sheet.regen).to.equal(1);

    expect(sheet.additionalInfo).to.contain("Desequilibrio hacia la luz");
    expect(sheet.additionalInfo).to.contain("Presentir lo oscuro y lo luminososo.");
    expect(sheet.additionalInfo).to.contain("Necesidades limitadas.");
    expect(sheet.expPenalizator).to.equal(-4);
  })

  it('nephilim jayan should add his own advantages', () => {
    const sheet: Sheet = this.sheetBuilder
      .withNephilim(Nephilim.JAYAN)
      .build();

    expect(fold<Nephilim, any>(undefined, identity)(sheet.nephilim)).to.equal(Nephilim.JAYAN);

    expect(sheet.size).to.equal(9);
    expect(sheet.fatiguePoints).to.equal(3);
    expect(sheet.rf).to.equal(25);
    expect(sheet.fueFinal).to.equal(5);
    expect(sheet.rm).to.equal(40);

    expect(sheet.additionalInfo).to.contain("No puede escoger tamaño desigual para disminuir su tamaño.");
    expect(sheet.additionalInfo).to.contain("No puede escoger reducir FUE dos puntos.");
    expect(sheet.additionalInfo).to.contain("Visión espiritual.");
    expect(sheet.expPenalizator).to.equal(-3);
  })

  it('nephilim d\'anjayni should add his own advantages', () => {
    const sheet: Sheet = this.sheetBuilder
      .withNephilim(Nephilim.D_ANJAYNI)
      .build();

    expect(fold<Nephilim, any>(undefined, identity)(sheet.nephilim)).to.equal(Nephilim.D_ANJAYNI);

    expect(sheet.additionalInfo).to.contain("Indetectibilidad: Aprende la habilidad Ocultacion del Ki y tiene un bono de +30.");
    expect(sheet.additionalInfo).to.contain("Olvido.");
    expect(sheet.additionalInfo).to.contain("Susurros silenciosos.");
    expect(sheet.additionalInfo).to.contain("Pasar sin dejar rastro.");
    expect(sheet.additionalInfo).to.contain("Nunca puede tener una apariencia inferior a 3 o superior a 7.");
    expect(sheet.expPenalizator).to.equal(-3);
  })

  it('nephilim ebudan should add his own advantages', () => {
    const sheet: Sheet = this.sheetBuilder
      .withNephilim(Nephilim.EBUDAN)
      .build();

    expect(fold<Nephilim, any>(undefined, identity)(sheet.nephilim)).to.equal(Nephilim.EBUDAN);

    expect(sheet.additionalInfo).to.contain("Or'inie.");
    expect(sheet.additionalInfo).to.contain("Alas de Serafín.");
    expect(sheet.additionalInfo).to.contain("Esencia celestial.");
    expect(sheet.expPenalizator).to.equal(-3);
  })

  it('nephilim daimah should add his own advantages', () => {
    const sheet: Sheet = this.sheetBuilder
      .withNephilim(Nephilim.DAIMAH)
      .build();

    expect(fold<Nephilim, any>(undefined, identity)(sheet.nephilim)).to.equal(Nephilim.DAIMAH);

    expect(sheet.additionalInfo).to.contain("Sentir el bosque.");
    expect(sheet.additionalInfo).to.contain("Movimiento por los bosques.");
    expect(sheet.additionalInfo).to.contain("Ver la esencia.");
    expect(sheet.additionalInfo).to.contain("Naturaleza curativa.");
    expect(sheet.size).to.equal(5);
    expect(sheet.expPenalizator).to.equal(-3);
  })

  it('male nephilim duk\'zarist should add his own advantages', () => {
    const sheet: Sheet = this.sheetBuilder
      .withNephilim(Nephilim.DUK_ZARIST)
      .build();

    expect(fold<Nephilim, any>(undefined, identity)(sheet.nephilim)).to.equal(Nephilim.DUK_ZARIST);

    expect(sheet.regen).to.equal(1);
    expect(sheet.rf).to.equal(30);
    expect(sheet.re).to.equal(25);
    expect(sheet.rv).to.equal(25);
    expect(sheet.rm).to.equal(65);
    expect(sheet.rp).to.equal(75);
    expect(sheet.additionalInfo).to.contain("Desequilibrio hacia la oscuridad.");
    expect(sheet.additionalInfo).to.contain("Aguante a la muerte.");
    expect(sheet.additionalInfo).to.contain("Necesidades limitadas.");
    expect(sheet.additionalInfo).to.contain("Presentir lo oscuro y lo luminoso.");
    expect(sheet.additionalInfo).to.contain("Vision nocturna.");
    expect(sheet.additionalInfo).to.contain("Devoción al Fuego: Si desarrolla sus habilidades mentales, tiene la obligación de adquirir como primera disciplina la Piroquinesis.");
    expect(sheet.additionalInfo).to.contain("Cuerpos perfectos: La esencia de los Duk´zarist impide que el cuerpo desarrolle ningún tipo de malformación natural. El Nephilim no puede elegir ninguna de las siguientes desventajas: Miembro atrofiado, Salud enfermiza, Vulnerabilidad a los venenos, Miopía, Debilidad física, Enfermedad grave, Mudo, Ciego o Sordo.");
    expect(sheet.additionalInfo).to.contain("Alergia al metal.");
    expect(sheet.expPenalizator).to.equal(-5);
  })

  it('female nephilim duk\'zarist should add his own advantages', () => {
    const sheet: Sheet = this.sheetBuilder
      .withSex(Sex.FEMALE)
      .withNephilim(Nephilim.DUK_ZARIST)
      .build();

    expect(fold<Nephilim, any>(undefined, identity)(sheet.nephilim)).to.equal(Nephilim.DUK_ZARIST);

    expect(sheet.regen).to.equal(1);
    expect(sheet.rf).to.equal(25);
    expect(sheet.re).to.equal(25);
    expect(sheet.rv).to.equal(25);
    expect(sheet.rm).to.equal(70);
    expect(sheet.rp).to.equal(75);
    expect(sheet.additionalInfo).to.contain("Desequilibrio hacia la oscuridad.");
    expect(sheet.additionalInfo).to.contain("Aguante a la muerte.");
    expect(sheet.additionalInfo).to.contain("Necesidades limitadas.");
    expect(sheet.additionalInfo).to.contain("Presentir lo oscuro y lo luminoso.");
    expect(sheet.additionalInfo).to.contain("Vision nocturna.");
    expect(sheet.additionalInfo).to.contain("Devoción al Fuego: Si desarrolla sus habilidades mentales, tiene la obligación de adquirir como primera disciplina la Piroquinesis.");
    expect(sheet.additionalInfo).to.contain("Cuerpos perfectos: La esencia de los Duk´zarist impide que el cuerpo desarrolle ningún tipo de malformación natural. El Nephilim no puede elegir ninguna de las siguientes desventajas: Miembro atrofiado, Salud enfermiza, Vulnerabilidad a los venenos, Miopía, Debilidad física, Enfermedad grave, Mudo, Ciego o Sordo.");
    expect(sheet.additionalInfo).to.contain("Alergia al metal.");
    expect(sheet.expPenalizator).to.equal(-5);
  })

  it('nephilim turak should add his own advantages', () => {
    const sheet: Sheet = this.sheetBuilder
      .withNephilim(Nephilim.TURAK)
      .build();

    expect(fold<Nephilim, any>(undefined, identity)(sheet.nephilim)).to.equal(Nephilim.TURAK);

    expect(sheet.iniciative).to.equal(-30);
    expect(sheet.additionalInfo).to.contain("Armas naturales: Obtiene armas naturales con daño base 30+bono de FUE y atacan en FIL.");
    expect(sheet.additionalInfo).to.contain("Memoria racial.");
    expect(sheet.additionalInfo).to.contain("Piel resistente: Obtiene armadura natural 1 contra FIL, CON, PEN, CAL.");
    expect(sheet.additionalInfo).to.contain("Sangre fría");
    expect(sheet.expPenalizator).to.equal(-3);
  })

  it('nephilim devah should add his own advantages', () => {
    const sheet: Sheet = this.sheetBuilder
      .withNephilim(Nephilim.DEVAH)
      .build();

    expect(fold<Nephilim, any>(undefined, identity)(sheet.nephilim)).to.equal(Nephilim.DEVAH);

    expect(sheet.rf).to.equal(0);
    expect(sheet.re).to.equal(0);
    expect(sheet.rv).to.equal(10);
    expect(sheet.rm).to.equal(60);
    expect(sheet.rp).to.equal(70);
    expect(sheet.additionalInfo).to.contain("El ojo del alma.");
    expect(sheet.additionalInfo).to.contain("Lazos existenciales: +10 a Convocar y Desconvocar.");
    expect(sheet.expPenalizator).to.equal(-3);
  })

  it('nephilim vetala should add his own advantages', () => {
    const sheet: Sheet = this.sheetBuilder
      .withNephilim(Nephilim.VETALA)
      .build();

    expect(fold<Nephilim, any>(undefined, identity)(sheet.nephilim)).to.equal(Nephilim.VETALA);
    
    expect(sheet.regen).to.equal(1);
    expect(sheet.re).to.equal(-10);
    expect(sheet.additionalInfo).to.contain("Aguante al daño crítico.");
    expect(sheet.additionalInfo).to.contain("Éxtasis sanguíneo.");
    expect(sheet.additionalInfo).to.contain("Piel fotosensible.");
    expect(sheet.additionalInfo).to.contain("Obsesión por la sangre.");
    expect(sheet.expPenalizator).to.equal(-3);
  })
}
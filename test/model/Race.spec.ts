import { expect } from 'chai';
import 'mocha';
import { Race } from "../../src/model/Race";
import { Sex } from "../../src/model/Sex";
import { Sheet } from "../../src/model/Sheet";
import { Clazz } from '../../src/model/Clazz';

export default function suite() {

  beforeEach(() => {
    this.sheetBuilder = Sheet.builder()
      .withName("BANANA NAME")
      .withSex(Sex.MALE)
      .withAppearance(10)
      .withAgi(5)
      .withCon(5)
      .withDes(5)
      .withFue(5)
      .withInt(5)
      .withPer(5)
      .withPod(5)
      .withVol(5)
      .withLevel(1)
      .withClazz(Clazz.GUERRERO)
      .withGnosis(10)
  });

  it('sylvain should add his own advantages', () => {
    const sheet: Sheet = this.sheetBuilder
      .withRace(Race.SYLVAIN)
      .build();

    expect(sheet.race).to.equal(Race.SYLVAIN);

    expect(sheet.desFinal).to.equal(6);
    expect(sheet.agiFinal).to.equal(6);
    expect(sheet.podFinal).to.equal(6);
    expect(sheet.intFinal).to.equal(6);
    expect(sheet.fueFinal).to.equal(4);
    expect(sheet.conFinal).to.equal(4);

    expect(sheet.rm).to.equal(65);
    expect(sheet.rp).to.equal(60);
    expect(sheet.rv).to.equal(35);
    expect(sheet.re).to.equal(45);

    expect(sheet.regen).to.equal(2);
    
    expect(sheet.additionalInfo).to.contain("Un Sylvain no puede elegir las desventajas de Vulnerabilidad a la magia o Fácil posesión, Salud enfermiza, Vulnerable a los venenos o enfermedad grave incurable.");
    expect(sheet.additionalInfo).to.contain("Inhumano en todas las caracteristicas.");
    expect(sheet.additionalInfo).to.contain("Presentir lo oscuro y lo luminososo.");
    expect(sheet.additionalInfo).to.contain("Necesidades limitadas.");
    expect(sheet.additionalInfo).to.contain("Lazo hacia la luz.");
    expect(sheet.additionalInfo).to.contain("Obligación mágica o puede no cogerlo y ser Paria.");
    
    expect(sheet.expPenalizator).to.equal(-3);
    expect(sheet.levelMod).to.equal(2);
    expect(sheet.naturaPlus).to.equal(5);
  })

  //   it('jayan should add his own advantages', () => {
  //     const sheet: Sheet = this.sheetBuilder
  //       .withRace(Race.JAYAN)
  //       .build();

  //     expect(sheet.race).to.equal(Race.JAYAN);

  //     expect(sheet.size).to.equal(9);
  //     expect(sheet.fatiguePoints).to.equal(3);
  //     expect(sheet.rf).to.equal(25);
  //     expect(sheet.fueFinal).to.equal(5);
  //     expect(sheet.rm).to.equal(40);

  //     expect(sheet.additionalInfo).to.contain("No puede escoger tamaño desigual para disminuir su tamaño.");
  //     expect(sheet.additionalInfo).to.contain("No puede escoger reducir FUE dos puntos.");
  //     expect(sheet.additionalInfo).to.contain("Visión espiritual.");
  //     expect(sheet.expPenalizator).to.equal(-3);
  //   })

    it('d\'anjayni should add his own advantages', () => {
      const sheet: Sheet = this.sheetBuilder
        .withRace(Race.D_ANJAYNI)
        .build();

      expect(sheet.race).to.equal(Race.D_ANJAYNI);

      expect(sheet.additionalInfo).to.contain("Indetectibilidad: Aprende la habilidad Ocultacion del Ki.");
      expect(sheet.additionalInfo).to.contain("Olvido.");
      expect(sheet.additionalInfo).to.contain("Susurros silenciosos.");
      expect(sheet.additionalInfo).to.contain("Pasar sin dejar rastro.");
      expect(sheet.additionalInfo).to.contain("Nunca puede tener una apariencia inferior a 3 o superior a 7.");
      expect(sheet.expPenalizator).to.equal(-3);
      expect(sheet.levelMod).to.equal(1);
      expect(sheet.naturaPlus).to.equal(5);
    })

    it('ebudan should add his own advantages', () => {
      const sheet: Sheet = this.sheetBuilder
        .withRace(Race.EBUDAN)
        .build();

      expect(sheet.race).to.equal(Race.EBUDAN);

      expect(sheet.additionalInfo).to.contain("Or'inie.");
      expect(sheet.additionalInfo).to.contain("Alas de Serafín.");
      expect(sheet.additionalInfo).to.contain("Esencia celestial.");
      expect(sheet.levelMod).to.equal(1);
      expect(sheet.naturaPlus).to.equal(0);
    })

  //   it('daimah should add his own advantages', () => {
  //     const sheet: Sheet = this.sheetBuilder
  //       .withRace(Race.DAIMAH)
  //       .build();

  //     expect(sheet.race).to.equal(Race.DAIMAH);

  //     expect(sheet.additionalInfo).to.contain("Sentir el bosque.");
  //     expect(sheet.additionalInfo).to.contain("Movimiento por los bosques.");
  //     expect(sheet.additionalInfo).to.contain("Ver la esencia.");
  //     expect(sheet.additionalInfo).to.contain("Naturaleza curativa.");
  //     expect(sheet.size).to.equal(5);
  //     expect(sheet.expPenalizator).to.equal(-3);
  //   })

  //   it('male duk\'zarist should add his own advantages', () => {
  //     const sheet: Sheet = this.sheetBuilder
  //       .withRace(Race.DUK_ZARIST)
  //       .build();

  //     expect(sheet.race).to.equal(Race.DUK_ZARIST);

  //     expect(sheet.regen).to.equal(1);
  //     expect(sheet.rf).to.equal(30);
  //     expect(sheet.re).to.equal(25);
  //     expect(sheet.rv).to.equal(25);
  //     expect(sheet.rm).to.equal(65);
  //     expect(sheet.rp).to.equal(75);
  //     expect(sheet.additionalInfo).to.contain("Desequilibrio hacia la oscuridad.");
  //     expect(sheet.additionalInfo).to.contain("Aguante a la muerte.");
  //     expect(sheet.additionalInfo).to.contain("Necesidades limitadas.");
  //     expect(sheet.additionalInfo).to.contain("Presentir lo oscuro y lo luminoso.");
  //     expect(sheet.additionalInfo).to.contain("Vision nocturna.");
  //     expect(sheet.additionalInfo).to.contain("Devoción al Fuego: Si desarrolla sus habilidades mentales, tiene la obligación de adquirir como primera disciplina la Piroquinesis.");
  //     expect(sheet.additionalInfo).to.contain("Cuerpos perfectos: La esencia de los Duk´zarist impide que el cuerpo desarrolle ningún tipo de malformación natural. El Race no puede elegir ninguna de las siguientes desventajas: Miembro atrofiado, Salud enfermiza, Vulnerabilidad a los venenos, Miopía, Debilidad física, Enfermedad grave, Mudo, Ciego o Sordo.");
  //     expect(sheet.additionalInfo).to.contain("Alergia al metal.");
  //     expect(sheet.expPenalizator).to.equal(-5);
  //   })

  //   it('female duk\'zarist should add his own advantages', () => {
  //     const sheet: Sheet = this.sheetBuilder
  //       .withSex(Sex.FEMALE)
  //       .withRace(Race.DUK_ZARIST)
  //       .build();

  //     expect(sheet.race).to.equal(Race.DUK_ZARIST);

  //     expect(sheet.regen).to.equal(1);
  //     expect(sheet.rf).to.equal(25);
  //     expect(sheet.re).to.equal(25);
  //     expect(sheet.rv).to.equal(25);
  //     expect(sheet.rm).to.equal(70);
  //     expect(sheet.rp).to.equal(75);
  //     expect(sheet.additionalInfo).to.contain("Desequilibrio hacia la oscuridad.");
  //     expect(sheet.additionalInfo).to.contain("Aguante a la muerte.");
  //     expect(sheet.additionalInfo).to.contain("Necesidades limitadas.");
  //     expect(sheet.additionalInfo).to.contain("Presentir lo oscuro y lo luminoso.");
  //     expect(sheet.additionalInfo).to.contain("Vision nocturna.");
  //     expect(sheet.additionalInfo).to.contain("Devoción al Fuego: Si desarrolla sus habilidades mentales, tiene la obligación de adquirir como primera disciplina la Piroquinesis.");
  //     expect(sheet.additionalInfo).to.contain("Cuerpos perfectos: La esencia de los Duk´zarist impide que el cuerpo desarrolle ningún tipo de malformación natural. El Race no puede elegir ninguna de las siguientes desventajas: Miembro atrofiado, Salud enfermiza, Vulnerabilidad a los venenos, Miopía, Debilidad física, Enfermedad grave, Mudo, Ciego o Sordo.");
  //     expect(sheet.additionalInfo).to.contain("Alergia al metal.");
  //     expect(sheet.expPenalizator).to.equal(-5);
  //   })

  //   it('turak should add his own advantages', () => {
  //     const sheet: Sheet = this.sheetBuilder
  //       .withRace(Race.TURAK)
  //       .build();

  //     expect(sheet.race).to.equal(Race.TURAK);

  //     expect(sheet.iniciative).to.equal(-30);
  //     expect(sheet.additionalInfo).to.contain("Armas naturales: Obtiene armas naturales con daño base 30+bono de FUE y atacan en FIL.");
  //     expect(sheet.additionalInfo).to.contain("Memoria racial.");
  //     expect(sheet.additionalInfo).to.contain("Piel resistente: Obtiene armadura natural 1 contra FIL, CON, PEN, CAL.");
  //     expect(sheet.additionalInfo).to.contain("Sangre fría");
  //     expect(sheet.expPenalizator).to.equal(-3);
  //   })

  //   it('devah should add his own advantages', () => {
  //     const sheet: Sheet = this.sheetBuilder
  //       .withRace(Race.DEVAH)
  //       .build();

  //     expect(sheet.race).to.equal(Race.DEVAH);

  //     expect(sheet.rf).to.equal(0);
  //     expect(sheet.re).to.equal(0);
  //     expect(sheet.rv).to.equal(10);
  //     expect(sheet.rm).to.equal(60);
  //     expect(sheet.rp).to.equal(70);
  //     expect(sheet.additionalInfo).to.contain("El ojo del alma.");
  //     expect(sheet.additionalInfo).to.contain("Lazos existenciales: +10 a Convocar y Desconvocar.");
  //     expect(sheet.expPenalizator).to.equal(-3);
  //   })

  //   it('vetala should add his own advantages', () => {
  //     const sheet: Sheet = this.sheetBuilder
  //       .withRace(Race.VETALA)
  //       .build();

  //     expect(sheet.race).to.equal(Race.VETALA);

  //     expect(sheet.regen).to.equal(1);
  //     expect(sheet.re).to.equal(-10);
  //     expect(sheet.additionalInfo).to.contain("Aguante al daño crítico.");
  //     expect(sheet.additionalInfo).to.contain("Éxtasis sanguíneo.");
  //     expect(sheet.additionalInfo).to.contain("Piel fotosensible.");
  //     expect(sheet.additionalInfo).to.contain("Obsesión por la sangre.");
  //     expect(sheet.expPenalizator).to.equal(-3);
  //   })
}
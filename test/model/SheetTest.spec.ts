import { Sheet } from "../../src/model/Sheet";
import { Clazz } from "../../src/model/Clazz";
import { Race } from "../../src/model/Race";
import { Nephilim } from "../../src/model/Nephilim";
import { expect } from 'chai';
import { fold } from 'fp-ts/lib/Option'
import 'mocha';
import { Sex } from "../../src/model/Sex";

function identity<A>(a: A): A { return a; }

describe('Sheet', () => {

  it('should set basic data correctly', () => {
    const sheet: Sheet = Sheet.builder
      .withName("BANANA NAME")
      .withSex(Sex.MALE)
      .withAppearance(10)
      .withAgi(1)
      .withCon(2)
      .withDes(3)
      .withFue(4)
      .withInt(20)
      .withPer(8)
      .withPod(12)
      .withVol(15)
      .withLevel(1)
      .withClazz(Clazz.GUERRERO)
      .withRace(Race.HUMANO)
      .withGnosis(10)
      .build();
    expect(sheet.agiFinal).to.equal(1);
    expect(sheet.conFinal).to.equal(2);
    expect(sheet.desFinal).to.equal(3);
    expect(sheet.fueFinal).to.equal(4);
    expect(sheet.intFinal).to.equal(20);
    expect(sheet.perFinal).to.equal(8);
    expect(sheet.podFinal).to.equal(12);
    expect(sheet.volFinal).to.equal(15);

    expect(sheet.agiBonus).to.equal(-30);
    expect(sheet.conBonus).to.equal(-20);
    expect(sheet.desBonus).to.equal(-10);
    expect(sheet.fueBonus).to.equal(-5);
    expect(sheet.intBonus).to.equal(45);
    expect(sheet.perBonus).to.equal(10);
    expect(sheet.podBonus).to.equal(20);
    expect(sheet.volBonus).to.equal(30);

    expect(sheet.name).to.equal("BANANA NAME");
    expect(sheet.sex).to.equal(Sex.MALE);
    expect(sheet.appearance).to.equal(10);
    expect(sheet.race).to.equal(Race.HUMANO);
    expect(sheet.clazz).to.equal(Clazz.GUERRERO);
    expect(sheet.level).to.equal(1);
    expect(sheet.size).to.equal(6);
    expect(sheet.gnosis).to.equal(10);
    expect(sheet.naturaPlus).to.equal(10);

    expect(sheet.totalLifePoints).to.equal(20);
    expect(sheet.currentLifePoints).to.equal(20);
    expect(sheet.regen).to.equal(0);
    expect(sheet.iniciative).to.equal(-20);
    expect(sheet.fatiguePoints).to.equal(2);
    expect(sheet.currentFatiguePoints).to.equal(2);

    expect(sheet.presence).to.equal(30);
    expect(sheet.rf).to.equal(10);
    expect(sheet.re).to.equal(10);
    expect(sheet.rv).to.equal(10);
    expect(sheet.rm).to.equal(50);
    expect(sheet.rp).to.equal(60);

    expect(sheet.exp).to.equal(0);
    expect(sheet.totalPDs).to.equal(600);
    expect(sheet.availablePcs).to.equal(3);
    expect(sheet.availableAttributeUp).to.equal(0);
    expect(sheet.expPenalizator).to.equal(0);
    expect(sheet.additionalInfo).to.be.empty;
  })

  it('nephilim sylvain should add his own advantages', () => {
    const sheet: Sheet = Sheet.builder
      .withName("BANANA NAME")
      .withSex(Sex.MALE)
      .withAppearance(10)
      .withAgi(1)
      .withCon(2)
      .withDes(3)
      .withFue(4)
      .withInt(20)
      .withPer(8)
      .withPod(12)
      .withVol(15)
      .withLevel(1)
      .withClazz(Clazz.GUERRERO)
      .withRace(Race.HUMANO)
      .withNephilim(Nephilim.SYLVAIN)
      .withGnosis(10)
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
    const sheet: Sheet = Sheet.builder
      .withName("BANANA NAME")
      .withSex(Sex.MALE)
      .withAppearance(10)
      .withAgi(1)
      .withCon(2)
      .withDes(3)
      .withFue(4)
      .withInt(20)
      .withPer(8)
      .withPod(12)
      .withVol(15)
      .withLevel(1)
      .withClazz(Clazz.GUERRERO)
      .withRace(Race.HUMANO)
      .withNephilim(Nephilim.JAYAN)
      .withGnosis(10)
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
    const sheet: Sheet = Sheet.builder
      .withName("BANANA NAME")
      .withSex(Sex.MALE)
      .withAppearance(10)
      .withAgi(1)
      .withCon(2)
      .withDes(3)
      .withFue(4)
      .withInt(20)
      .withPer(8)
      .withPod(12)
      .withVol(15)
      .withLevel(1)
      .withClazz(Clazz.GUERRERO)
      .withRace(Race.HUMANO)
      .withNephilim(Nephilim.D_ANJAYNI)
      .withGnosis(10)
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
    const sheet: Sheet = Sheet.builder
      .withName("BANANA NAME")
      .withSex(Sex.MALE)
      .withAppearance(10)
      .withAgi(1)
      .withCon(2)
      .withDes(3)
      .withFue(4)
      .withInt(20)
      .withPer(8)
      .withPod(12)
      .withVol(15)
      .withLevel(1)
      .withClazz(Clazz.GUERRERO)
      .withRace(Race.HUMANO)
      .withNephilim(Nephilim.EBUDAN)
      .withGnosis(10)
      .build();

    expect(fold<Nephilim, any>(undefined, identity)(sheet.nephilim)).to.equal(Nephilim.EBUDAN);

    expect(sheet.additionalInfo).to.contain("Or'inie.");
    expect(sheet.additionalInfo).to.contain("Alas de Serafín.");
    expect(sheet.additionalInfo).to.contain("Esencia celestial.");
    expect(sheet.expPenalizator).to.equal(-3);
  })

  it('nephilim daimah should add his own advantages', () => {
    const sheet: Sheet = Sheet.builder
      .withName("BANANA NAME")
      .withSex(Sex.MALE)
      .withAppearance(10)
      .withAgi(1)
      .withCon(2)
      .withDes(3)
      .withFue(4)
      .withInt(20)
      .withPer(8)
      .withPod(12)
      .withVol(15)
      .withLevel(1)
      .withClazz(Clazz.GUERRERO)
      .withRace(Race.HUMANO)
      .withNephilim(Nephilim.DAIMAH)
      .withGnosis(10)
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
    const sheet: Sheet = Sheet.builder
      .withName("BANANA NAME")
      .withSex(Sex.MALE)
      .withAppearance(10)
      .withAgi(1)
      .withCon(2)
      .withDes(3)
      .withFue(4)
      .withInt(20)
      .withPer(8)
      .withPod(12)
      .withVol(15)
      .withLevel(1)
      .withClazz(Clazz.GUERRERO)
      .withNephilim(Nephilim.DUK_ZARIST)
      .withRace(Race.HUMANO)
      .withGnosis(10)
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
    const sheet: Sheet = Sheet.builder
      .withName("BANANA NAME")
      .withSex(Sex.FEMALE)
      .withAppearance(10)
      .withAgi(1)
      .withCon(2)
      .withDes(3)
      .withFue(4)
      .withInt(20)
      .withPer(8)
      .withPod(12)
      .withVol(15)
      .withLevel(1)
      .withClazz(Clazz.GUERRERO)
      .withNephilim(Nephilim.DUK_ZARIST)
      .withRace(Race.HUMANO)
      .withGnosis(10)
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
    const sheet: Sheet = Sheet.builder
      .withName("BANANA NAME")
      .withSex(Sex.FEMALE)
      .withAppearance(10)
      .withAgi(1)
      .withCon(2)
      .withDes(3)
      .withFue(4)
      .withInt(20)
      .withPer(8)
      .withPod(12)
      .withVol(15)
      .withLevel(1)
      .withClazz(Clazz.GUERRERO)
      .withNephilim(Nephilim.TURAK)
      .withRace(Race.HUMANO)
      .withGnosis(10)
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
    const sheet: Sheet = Sheet.builder
      .withName("BANANA NAME")
      .withSex(Sex.FEMALE)
      .withAppearance(10)
      .withAgi(1)
      .withCon(2)
      .withDes(3)
      .withFue(4)
      .withInt(20)
      .withPer(8)
      .withPod(12)
      .withVol(15)
      .withLevel(1)
      .withClazz(Clazz.GUERRERO)
      .withNephilim(Nephilim.DEVAH)
      .withRace(Race.HUMANO)
      .withGnosis(10)
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
    const sheet: Sheet = Sheet.builder
      .withName("BANANA NAME")
      .withSex(Sex.FEMALE)
      .withAppearance(10)
      .withAgi(1)
      .withCon(2)
      .withDes(3)
      .withFue(4)
      .withInt(20)
      .withPer(8)
      .withPod(12)
      .withVol(15)
      .withLevel(1)
      .withClazz(Clazz.GUERRERO)
      .withNephilim(Nephilim.VETALA)
      .withRace(Race.HUMANO)
      .withGnosis(10)
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
  
});
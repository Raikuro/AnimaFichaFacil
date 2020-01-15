import { Sheet } from "../../src/model/Sheet";
import { Clazz } from "../../src/model/Clazz";
import { Race } from "../../src/model/Race";
import { Nephilim } from "../../src/model/Nephilim";
import { Level } from "../../src/model/Level";
import { expect } from 'chai';
import 'mocha';

 
describe('Sheet', () => {
 
  it('should set basic data correctly', () => {
    const sheet:Sheet = Sheet.builder
      .withName("BANANA NAME")
      .withAppearance(10)
      .withAgi(1)
      .withCon(2)
      .withDes(3)
      .withFue(4)
      .withInt(20)
      .withPer(8)
      .withPod(12)
      .withVol(15)
      .withLevel(new Level(1))
      .withClazz(Clazz.GUERRERO)
      .withRace(Race.HUMANO)
      .withNephilim(Nephilim.NO)
      .build();
    expect(sheet.agiBonus).to.equal(-30);
    expect(sheet.conBonus).to.equal(-20);
    expect(sheet.desBonus).to.equal(-10);
    expect(sheet.fueBonus).to.equal(-5);
    expect(sheet.intBonus).to.equal(45);
    expect(sheet.perBonus).to.equal(10);
    expect(sheet.podBonus).to.equal(20);
    expect(sheet.volBonus).to.equal(30);

    expect(sheet.name).to.equal("BANANA NAME");
    expect(sheet.appearance).to.equal(10);
    expect(sheet.race).to.equal(Race.HUMANO);
    expect(sheet.nephilim).to.equal(Nephilim.NO);
    expect(sheet.clazz).to.equal(Clazz.GUERRERO);
    expect(sheet.level.level).to.equal(new Level(1).level);
    expect(sheet.size).to.equal(6);

    expect(sheet.agiFinal).to.equal(1);
    expect(sheet.conFinal).to.equal(2);
    expect(sheet.desFinal).to.equal(3);
    expect(sheet.fueFinal).to.equal(4);
    expect(sheet.intFinal).to.equal(20);
    expect(sheet.perFinal).to.equal(8);
    expect(sheet.podFinal).to.equal(12);
    expect(sheet.volFinal).to.equal(15);

    expect(sheet.totalLifePoints).to.equal(20);
    expect(sheet.currentLifePoints).to.equal(20);

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
  })
});
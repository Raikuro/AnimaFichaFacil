import { expect } from 'chai';
import { fold } from 'fp-ts/lib/Option';
import 'mocha';
import { Nephilim } from "../../src/model/Nephilim";
import { Sex } from "../../src/model/Sex";
import { Sheet } from "../../src/model/Sheet";
import { identity } from 'fp-ts/lib/function';
import { Clazz, GUERRERO, GUERRERO_ACROBATA } from '../../src/model/Clazz';
import { Race } from '../../src/model/Race';
import { InvestedPdsForm } from '../../src/model/InvestedPdsForm';

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
        .withClasses([new Clazz(GUERRERO, 1, new InvestedPdsForm())])
        .withRace(Race.HUMANO)
        .withGnosis(10)
    });
  
    it('clazz should set its PDs in the correct way', () => {
      const sheet: Sheet = this.sheetBuilder
        .withClasses([new Clazz(GUERRERO, 0, new InvestedPdsForm(100, 100, 100, 20, 5, 4, 3, 2, 1, 6, 10, 20, 30, 40, 50, 60))])
        .build();
  
      expect(sheet.classes[0].clazz.baseForm.hAtaque).to.equal(2);
      expect(sheet.classes[0].clazz.baseForm.hParada).to.equal(2);
      expect(sheet.classes[0].clazz.baseForm.hEsquiva).to.equal(2);
      expect(sheet.classes[0].clazz.baseForm.llevarArmadura).to.equal(2);

      expect(sheet.classes[0].clazz.baseForm.kiAgi).to.equal(2);
      expect(sheet.classes[0].clazz.baseForm.kiCon).to.equal(2);
      expect(sheet.classes[0].clazz.baseForm.kiDes).to.equal(2);
      expect(sheet.classes[0].clazz.baseForm.kiFue).to.equal(2);
      expect(sheet.classes[0].clazz.baseForm.kiPod).to.equal(2);
      expect(sheet.classes[0].clazz.baseForm.kiVol).to.equal(2);

      expect(sheet.classes[0].clazz.baseForm.acuAgi).to.equal(20);
      expect(sheet.classes[0].clazz.baseForm.acuCon).to.equal(20);
      expect(sheet.classes[0].clazz.baseForm.acuDes).to.equal(20);
      expect(sheet.classes[0].clazz.baseForm.acuFue).to.equal(20);
      expect(sheet.classes[0].clazz.baseForm.acuPod).to.equal(20);
      expect(sheet.classes[0].clazz.baseForm.acuVol).to.equal(20);

      expect(sheet.abilities.hAtaque).to.equal(50);
      expect(sheet.abilities.hParada).to.equal(50);
      expect(sheet.abilities.hEsquiva).to.equal(50);
      expect(sheet.abilities.llevarArmadura).to.equal(10);

      expect(sheet.abilities.kiAgi).to.equal(7);
      expect(sheet.abilities.kiCon).to.equal(7);
      expect(sheet.abilities.kiDes).to.equal(6);
      expect(sheet.abilities.kiFue).to.equal(6);
      expect(sheet.abilities.kiPod).to.equal(5);
      expect(sheet.abilities.kiVol).to.equal(8);

      expect(sheet.abilities.acuAgi).to.equal(1);
      expect(sheet.abilities.acuCon).to.equal(2);
      expect(sheet.abilities.acuDes).to.equal(2);
      expect(sheet.abilities.acuFue).to.equal(3);
      expect(sheet.abilities.acuPod).to.equal(3);
      expect(sheet.abilities.acuVol).to.equal(4);
    })

    it('clazz Guerrero should set bonusses in the correct way', () => {
      const sheet: Sheet = this.sheetBuilder
        .withClasses([new Clazz(GUERRERO, 1, new InvestedPdsForm(100, 100, 100, 20, 5, 4, 3, 2, 1, 6, 10, 20, 30, 40, 50, 60))])
        .build();
  
      expect(sheet.abilities.hAtaque).to.equal(55);
      expect(sheet.abilities.hParada).to.equal(55);
      expect(sheet.abilities.llevarArmadura).to.equal(15);
      expect(sheet.abilities.hEsquiva).to.equal(50);

      const sheet2: Sheet = this.sheetBuilder
        .withClasses([new Clazz(GUERRERO, 2, new InvestedPdsForm(100, 100, 100, 20, 5, 4, 3, 2, 1, 6, 10, 20, 30, 40, 50, 60))])
        .build();
  
      expect(sheet2.abilities.hAtaque).to.equal(60);
      expect(sheet2.abilities.hParada).to.equal(60);
      expect(sheet2.abilities.llevarArmadura).to.equal(20);
      expect(sheet2.abilities.hEsquiva).to.equal(50);

      const sheet3: Sheet = this.sheetBuilder
        .withClasses([new Clazz(GUERRERO, 11, new InvestedPdsForm(100, 100, 100, 20, 5, 4, 3, 2, 1, 6, 10, 20, 30, 40, 50, 60))])
        .build();
  
      expect(sheet3.abilities.hAtaque).to.equal(100);
      expect(sheet3.abilities.hParada).to.equal(100);
      expect(sheet3.abilities.llevarArmadura).to.equal(65);
      expect(sheet3.abilities.hEsquiva).to.equal(50);
    })

    it('clazz Guerrero Acrobata should set bonusses in the correct way', () => {
      const sheet: Sheet = this.sheetBuilder
        .withClasses([new Clazz(GUERRERO_ACROBATA, 1, new InvestedPdsForm(100, 150, 100, 20, 5, 4, 3, 2, 1, 6, 10, 20, 30, 40, 50, 60))])
        .build();
  
      expect(sheet.abilities.hAtaque).to.equal(55);
      expect(sheet.abilities.hEsquiva).to.equal(55);
      expect(sheet.abilities.hParada).to.equal(50);
      expect(sheet.abilities.llevarArmadura).to.equal(10);

      const sheet2: Sheet = this.sheetBuilder
        .withClasses([new Clazz(GUERRERO_ACROBATA, 2, new InvestedPdsForm(100, 150, 100, 20, 5, 4, 3, 2, 1, 6, 10, 20, 30, 40, 50, 60))])
        .build();
  
      expect(sheet2.abilities.hAtaque).to.equal(60);
      expect(sheet2.abilities.hEsquiva).to.equal(60);
      expect(sheet2.abilities.hParada).to.equal(50);
      expect(sheet2.abilities.llevarArmadura).to.equal(10);

      const sheet3: Sheet = this.sheetBuilder
        .withClasses([new Clazz(GUERRERO_ACROBATA, 11, new InvestedPdsForm(100, 150, 100, 20, 5, 4, 3, 2, 1, 6, 10, 20, 30, 40, 50, 60))])
        .build();
  
        expect(sheet3.abilities.hAtaque).to.equal(100);
        expect(sheet3.abilities.hEsquiva).to.equal(100);
        expect(sheet3.abilities.hParada).to.equal(50);
        expect(sheet3.abilities.llevarArmadura).to.equal(10);
    })

    it('clazz should set its abilities with characteristics bonus', () => {
      const sheet: Sheet = this.sheetBuilder
        .withClasses([new Clazz(GUERRERO, 0, new InvestedPdsForm(100, 100, 100, 20, 5, 4, 3, 2, 1, 6, 10, 20, 30, 40, 50, 60))])
        .withDes(10)
        .withAgi(9)
        .withFue(4)
        .withCon(11)
        .withPod(13)
        .withVol(16)
        .build();
  
      expect(sheet.abilities.hAtaque).to.equal(65);
      expect(sheet.abilities.hParada).to.equal(65);
      expect(sheet.abilities.hEsquiva).to.equal(60);
      expect(sheet.abilities.llevarArmadura).to.equal(5);

      expect(sheet.abilities.kiAgi).to.equal(11);
      expect(sheet.abilities.kiCon).to.equal(14);
      expect(sheet.abilities.kiDes).to.equal(11);
      expect(sheet.abilities.kiFue).to.equal(5);
      expect(sheet.abilities.kiPod).to.equal(16);
      expect(sheet.abilities.kiVol).to.equal(25);

      expect(sheet.abilities.acuAgi).to.equal(1);
      expect(sheet.abilities.acuCon).to.equal(3);
      expect(sheet.abilities.acuDes).to.equal(3);
      expect(sheet.abilities.acuFue).to.equal(3);
      expect(sheet.abilities.acuPod).to.equal(5);
      expect(sheet.abilities.acuVol).to.equal(7);
    })

    it('clazz combination should work as expected', () => {
      const sheet: Sheet = this.sheetBuilder
        .withClasses([
          new Clazz(GUERRERO, 3, new InvestedPdsForm(100, 100, 100, 20, 5, 4, 3, 2, 1, 6, 10, 20, 30, 40, 50, 60)),
          new Clazz(GUERRERO_ACROBATA, 3, new InvestedPdsForm(100, 150, 100, 20, 5, 4, 3, 2, 1, 6, 10, 20, 30, 40, 50, 60))
        ])
        .build();
  
      expect(sheet.abilities.hAtaque).to.equal(130);
      expect(sheet.abilities.hParada).to.equal(115);
      expect(sheet.abilities.hEsquiva).to.equal(115);
      expect(sheet.abilities.llevarArmadura).to.equal(35);

      expect(sheet.abilities.kiAgi).to.equal(10);
      expect(sheet.abilities.kiCon).to.equal(9);
      expect(sheet.abilities.kiDes).to.equal(8);
      expect(sheet.abilities.kiFue).to.equal(7);
      expect(sheet.abilities.kiPod).to.equal(6);
      expect(sheet.abilities.kiVol).to.equal(11);

      expect(sheet.abilities.acuAgi).to.equal(2);
      expect(sheet.abilities.acuCon).to.equal(3);
      expect(sheet.abilities.acuDes).to.equal(4);
      expect(sheet.abilities.acuFue).to.equal(5);
      expect(sheet.abilities.acuPod).to.equal(6);
      expect(sheet.abilities.acuVol).to.equal(7);
    })
}
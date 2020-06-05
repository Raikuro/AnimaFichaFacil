import { PdsForm } from "./PdsForm";
import { Sheet } from "./Sheet";

export class AbilitiesForm extends PdsForm {

  private _bonusHAtaque;
  private _bonusHParada;
  private _bonusHEsquiva;
  private _bonusLlevarArmadura;

  get bonusHAtaque() { return Math.min(50, this._bonusHAtaque); }
  get bonusHParada() { return Math.min(50, this._bonusHParada); }
  get bonusHEsquiva() { return Math.min(50, this._bonusHEsquiva); }
  get bonusLlevarArmadura() { return this._bonusLlevarArmadura; }

  set bonusHAtaque(newBonus) { this._bonusHAtaque = newBonus; }
  set bonusHParada(newBonus) { this._bonusHParada = newBonus; }
  set bonusHEsquiva(newBonus) { this._bonusHEsquiva = newBonus; }
  set bonusLlevarArmadura(newBonus) { this._bonusLlevarArmadura = newBonus; }

  constructor(private _sheet: Sheet) {
    super();
    this._bonusHAtaque = 0;
    this._bonusHParada = 0;
    this._bonusHEsquiva = 0;
    this._bonusLlevarArmadura = 0;
  }

  get hAtaque() { return Math.trunc(super.hAtaque + this.bonusHAtaque + this._sheet.desBonus); };
  get hParada() { return Math.trunc(super.hParada + this.bonusHParada + this._sheet.desBonus); };
  get llevarArmadura() { return Math.trunc(super.llevarArmadura + this.bonusLlevarArmadura + this._sheet.fueBonus); };
  get hEsquiva() { return Math.trunc(super.hEsquiva + this.bonusHEsquiva +  this._sheet.agiBonus); };
  get kiAgi() { return Math.trunc(super.kiAgi) + AbilitiesForm.getKiPoints(this._sheet.agi); }
  get kiDes() { return Math.trunc(super.kiDes) + AbilitiesForm.getKiPoints(this._sheet.des); }
  get kiCon() { return Math.trunc(super.kiCon) + AbilitiesForm.getKiPoints(this._sheet.con); }
  get kiFue() { return Math.trunc(super.kiFue) + AbilitiesForm.getKiPoints(this._sheet.fue); }
  get kiPod() { return Math.trunc(super.kiPod) + AbilitiesForm.getKiPoints(this._sheet.pod); }
  get kiVol() { return Math.trunc(super.kiVol) + AbilitiesForm.getKiPoints(this._sheet.vol); }
  get acuAgi() { return Math.trunc(super.acuAgi) + AbilitiesForm.getKiAcu(this._sheet.agi); }
  get acuDes() { return Math.trunc(super.acuDes) + AbilitiesForm.getKiAcu(this._sheet.des); }
  get acuCon() { return Math.trunc(super.acuCon) + AbilitiesForm.getKiAcu(this._sheet.con); }
  get acuFue() { return Math.trunc(super.acuFue) + AbilitiesForm.getKiAcu(this._sheet.fue); }
  get acuPod() { return Math.trunc(super.acuPod) + AbilitiesForm.getKiAcu(this._sheet.pod); }
  get acuVol() { return Math.trunc(super.acuVol) + AbilitiesForm.getKiAcu(this._sheet.vol); }
  
  set hAtaque(newHAtaque) { super.hAtaque += newHAtaque; }
  set hParada(newhParada) { super.hParada += newhParada; }
  set llevarArmadura(newLlevarArmadura) { super.llevarArmadura += newLlevarArmadura; }
  set hEsquiva(newHEsquiva) { super.hEsquiva += newHEsquiva; }
  set kiAgi(newValue) { super.kiAgi += newValue; }
  set kiDes(newValue) { super.kiDes += newValue; }
  set kiCon(newValue) { super.kiCon += newValue; }
  set kiFue(newValue) { super.kiFue += newValue; }
  set kiVol(newValue) { super.kiVol += newValue; }
  set kiPod(newValue) { super.kiPod += newValue; }
  set acuAgi(newValue) { super.acuAgi += newValue; }
  set acuDes(newValue) { super.acuDes += newValue; }
  set acuCon(newValue) { super.acuCon += newValue; }
  set acuFue(newValue) { super.acuFue += newValue; }
  set acuVol(newValue) { super.acuVol += newValue; }
  set acuPod(newValue) { super.acuPod += newValue; }

  private static getKiPoints(charValue: number) {
    return charValue + Math.max(0, (charValue - 10))
  }

  private static getKiAcu(charValue: number) {
    return charValue < 10 ? 1 :
      charValue < 12 ? 2 :
        charValue < 16 ? 3 :
          4
  }

}
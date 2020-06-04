import { PdsForm } from "./PdsForm";

export class InvestedPdsForm extends PdsForm {

    constructor(
       _hAtaque: number = 0,
       _hParada: number = 0,
       _hEsquiva: number = 0,
       _llevarArmadura: number = 0,
       _kiAgi: number = 0,
       _kiCon: number = 0,
       _kiDes: number = 0,
       _kiFue: number = 0,
       _kiPod: number = 0,
       _kiVol: number = 0,
       _acuAgi: number = 0,
       _acuCon: number = 0,
       _acuDes: number = 0,
       _acuFue: number = 0,
       _acuPod: number = 0,
       _acuVol: number = 0
     ) {
        super(_hAtaque, _hParada, _hEsquiva, _llevarArmadura, _kiAgi, _kiCon, _kiDes, _kiFue, _kiPod, _kiVol, _acuAgi, _acuCon, _acuDes, _acuFue, _acuPod, _acuVol)
       }

    public get investedOnCombatPrimaries():number {
        return this.hAtaque + this.hParada + this.hEsquiva + this.llevarArmadura +
        this.kiAgi + this.kiCon + this.kiDes + this.kiFue + this.kiPod + this.kiVol +
        this.acuAgi + this.acuCon + this.acuDes + this.acuFue + this.acuPod + this.acuVol;
    }
}
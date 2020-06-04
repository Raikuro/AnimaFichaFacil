export class PdsForm {
    constructor(
        private _hAtaque,
        private _hParada,
        private _hEsquiva,
        private _llevarArmadura,
        private _kiAgi,
        private _kiCon,
        private _kiDes,
        private _kiFue,
        private _kiPod,
        private _kiVol,
        private _acuAgi,
        private _acuCon,
        private _acuDes,
        private _acuFue,
        private _acuPod,
        private _acuVol
    ) { }

    get hAtaque() { return this._hAtaque };
    get hParada() { return this._hParada };
    get hEsquiva() { return this._hEsquiva };
    get llevarArmadura() { return this._llevarArmadura };
    get kiAgi() { return this._kiAgi };
    get kiCon() { return this._kiCon };
    get kiDes() { return this._kiDes };
    get kiFue() { return this._kiFue };
    get kiPod() { return this._kiPod };
    get kiVol() { return this._kiVol };
    get acuAgi() { return this._acuAgi };
    get acuCon() { return this._acuCon };
    get acuDes() { return this._acuDes };
    get acuFue() { return this._acuFue };
    get acuPod() { return this._acuPod };
    get acuVol() { return this._acuVol };

    set hAtaque(newHAtaque) { this._hAtaque = newHAtaque };
    set hParada(hParada) { this._hParada = hParada };
    set hEsquiva(hEsquiva) { this._hEsquiva = hEsquiva };
    set llevarArmadura(llevarArmadura) { this._llevarArmadura = llevarArmadura };
    set kiAgi(kiAgi) { this._kiAgi = kiAgi };
    set kiCon(kiCon) { this._kiCon = kiCon };
    set kiDes(kiDes) { this._kiDes = kiDes };
    set kiFue(kiFue) { this._kiFue = kiFue };
    set kiPod(kiPod) { this._kiPod = kiPod };
    set kiVol(kiVol) { this._kiVol = kiVol };
    set acuAgi(acuAgi) { this._acuAgi = acuAgi };
    set acuCon(acuCon) { this._acuCon = acuCon };
    set acuDes(acuDes) { this._acuDes = acuDes };
    set acuFue(acuFue) { this._acuFue = acuFue };
    set acuPod(acuPod) { this._acuPod = acuPod };
    set acuVol(acuVol) { this._acuVol = acuVol };

}
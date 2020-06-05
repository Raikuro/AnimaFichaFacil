import { PdsForm } from "./PdsForm";

export class PdsFormBuilder{
    public build(){
        return new PdsForm(
            this._hAtaque,
            this._hParada,
            this._hEsquiva,
            this._llevarArmadura,
            this._kiAgi,
            this._kiCon,
            this._kiDes,
            this._kiFue,
            this._kiPod,
            this._kiVol,
            this._acuAgi,
            this._acuCon,
            this._acuDes,
            this._acuFue,
            this._acuPod,
            this._acuVol
        );
    }

    constructor(
        private _hAtaque?:number,
        private _hParada?:number,
        private _hEsquiva?:number,
        private _llevarArmadura?:number,
        private _kiAgi?:number,
        private _kiCon?:number,
        private _kiDes?:number,
        private _kiFue?:number,
        private _kiPod?:number,
        private _kiVol?:number,
        private _acuAgi?:number,
        private _acuCon?:number,
        private _acuDes?:number,
        private _acuFue?:number,
        private _acuPod?:number,
        private _acuVol?:number
        ){}

    public withHAtaque(hAtaque:number){
        this._hAtaque = hAtaque;
    }
    public withHParada(hParada:number){
        this._hParada = hParada;
    }
    public withHEsquiva(hEsquiva:number){
        this._hEsquiva = hEsquiva;
    }
    public withLlevarArmadura(llevarArmadura:number){
        this._llevarArmadura = llevarArmadura;
    }
    public withKiAgi(kiAgi:number){
        this._kiAgi = kiAgi;
    }
    public withKiCon(kiCon:number){
        this._kiCon = kiCon;
    }
    public withKiDes(kiDes:number){
        this._kiDes = kiDes;
    }
    public withKiFue(kiFue:number){
        this._kiFue = kiFue;
    }
    public withKiPod(kiPod:number){
        this._kiPod = kiPod;
    }
    public withKiVol(kiVol:number){
        this._kiVol = kiVol;
    }
    public withAcuAgi(acuAgi:number){
        this._acuAgi = acuAgi;
    }
    public withAcuCon(acuCon:number){
        this._acuCon = acuCon;
    }
    public withAcuDes(acuDes:number){
        this._acuDes = acuDes;
    }
    public withAcuFue(acuFue:number){
        this._acuFue = acuFue;
    }
    public withAcuPod(acuPod:number){
        this._acuPod = acuPod;
    }
    public withAcuVol(acuVol:number){
        this._acuVol = acuVol;
    }
}
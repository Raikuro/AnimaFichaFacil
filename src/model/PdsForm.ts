import { setter, getter } from "../utils/SheetDecorators";

export class PdsForm {

    @getter @setter public hAtaque: number;
    @getter @setter public hParada: number;
    @getter @setter public hEsquiva: number;
    @getter @setter public llevarArmadura: number;
    @getter @setter public kiAgi: number;
    @getter @setter public kiCon: number;
    @getter @setter public kiDes: number;
    @getter @setter public kiFue: number;
    @getter @setter public kiPod: number;
    @getter @setter public kiVol: number;
    @getter @setter public acuAgi: number;
    @getter @setter public acuCon: number;
    @getter @setter public acuDes: number;
    @getter @setter public acuFue: number;
    @getter @setter public acuPod: number;
    @getter @setter public acuVol: number;

    constructor(
        private _hAtaque: number = 0,
        private _hParada: number = 0,
        private _hEsquiva: number = 0,
        private _llevarArmadura: number = 0,
        private _kiAgi: number = 0,
        private _kiCon: number = 0,
        private _kiDes: number = 0,
        private _kiFue: number = 0,
        private _kiPod: number = 0,
        private _kiVol: number = 0,
        private _acuAgi: number = 0,
        private _acuCon: number = 0,
        private _acuDes: number = 0,
        private _acuFue: number = 0,
        private _acuPod: number = 0,
        private _acuVol: number = 0
    ) { }

}
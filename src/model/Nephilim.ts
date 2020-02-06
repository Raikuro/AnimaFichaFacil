import { BaseCommand } from "./BaseCommand";
import { Sheet } from "./Sheet";
import { sylvain }  from "./Nephilim/Sylvain"
import { jayan } from "./Nephilim/jayan";
import { dAnjayni } from "./Nephilim/DAnjayni";
import { ebudan } from "./Nephilim/Ebudan";
import { daimah } from "./Nephilim/Daimah";
import { dukZarist } from "./Nephilim/Dukzarist";
import { devah } from "./Nephilim/Devah";
import { vetala } from "./Nephilim/Vetala";
import { turak } from "./Nephilim/Turak";

export class Nephilim implements BaseCommand {
   private constructor(public readonly apply: (sheet: Sheet) => Sheet) {}
   
   public static readonly SYLVAIN: Nephilim = new Nephilim(sylvain);
   public static readonly JAYAN: Nephilim = new Nephilim(jayan);
   public static readonly D_ANJAYNI: Nephilim = new Nephilim(dAnjayni);
   public static readonly EBUDAN: Nephilim = new Nephilim(ebudan);
   public static readonly DAIMAH: Nephilim = new Nephilim(daimah);
   public static readonly DUK_ZARIST: Nephilim = new Nephilim(dukZarist);
   public static readonly DEVAH: Nephilim = new Nephilim(devah);
   public static readonly VETALA: Nephilim = new Nephilim(vetala);
   public static readonly TURAK: Nephilim = new Nephilim(turak);
}
import { Sheet } from "../Sheet";
import { PdsForm } from "../PdsForm";

export class BaseClazz{
    public constructor(public naturalBonuses: (sheet:Sheet) => Sheet, public baseForm:PdsForm) {}
}
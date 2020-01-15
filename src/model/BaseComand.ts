import { Sheet } from "./Sheet";

export interface BaseComand {
    readonly apply: (sheet:Sheet) => Sheet
    readonly unapply: (sheet:Sheet) => Sheet
}
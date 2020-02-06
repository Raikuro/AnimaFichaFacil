import { Sheet } from "./Sheet";

export interface BaseCommand {
    readonly apply: (sheet:Sheet) => Sheet
}
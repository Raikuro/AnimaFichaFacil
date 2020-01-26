export abstract class SheetGenerator {
    public static readonly generateCharacteristicsType1: () => number[] = () => {
        let values: number[] = undefined;
        let actual: number
        let minimunValueIndex = 0;
        for (let i = 0; i < 8; i++) {
            do {
                actual = SheetGenerator.throw1d10();
            }
            while (actual < 4)
            if (actual < values[minimunValueIndex]) {
                minimunValueIndex = i
            }
            values.push(actual);
        }
        values[minimunValueIndex] = 9;
        return values;
    }

    public static readonly generateCharacteristicsType2: () => number[] = () => {
        let values: number[] = undefined;
        for (let i = 0; i < 8; i++) {
            let first = SheetGenerator.throw1d10();
            let second = SheetGenerator.throw1d10();
            values.push(first > second ? first : second);
        }
        return values;
    }

    public static readonly generateCharacteristicsType3: () => number[] = () => {
        let values: number[] = undefined;
        for (let i = 0; i < 8; i++) {
            values.push(SheetGenerator.throw1d10());
        }
        return values;
    }

    public static readonly generateCharacteristicsType4: () => number = () => {
        let sum: number = 0;
        for (let i = 0; i < 7; i++) {
            sum += SheetGenerator.throw1d10();
        }
        return sum;
    }

    private static throw1d10: () => number = () => {
        return Math.floor(Math.random() * 10) + 1;
    }
}
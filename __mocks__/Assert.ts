export default class Assert {
    static format(message: string | null, expected: string, actual: string) {
        return `expected: ${expected} but was: ${actual}`;
    }
}

import Assert from '../../__mocks__/Assert';

export default class ComparisonCompactor {
    static readonly ELLIPSIS = '...';
    static readonly DELTA_END = ']';
    static readonly DELTA_START = '[';

    private fContextLength: number;
    private fExpected: string;
    private fActual: string;
    private fPrefix: number = 0;
    private fSuffix: number = 0;

    constructor(contextLength: number, expected: string, actual: string) {
        this.fContextLength = contextLength;
        this.fExpected = expected;
        this.fActual = actual;
    }

    public compact(message: string | null) {
        if (this.fExpected === null || this.fActual === null || this.areStringsEqual()) {
            return Assert.format(message, this.fExpected, this.fActual);
        }

        this.findCommonPrefix();
        this.findCommonSuffix();
        const expected = this.compactString(this.fExpected);
        const actual = this.compactString(this.fActual);

        return Assert.format(message, expected, actual);
    }

    private compactString(source: string) {
        let result =
            ComparisonCompactor.DELTA_START +
            source.substring(this.fPrefix, source.length - this.fSuffix + 1) +
            ComparisonCompactor.DELTA_END;

        if (this.fPrefix > 0) {
            result = this.computeCommonPrefix() + result;
        }
        if (this.fSuffix > 0) {
            result = result + this.computeCommonSuffix();
        }

        return result;
    }

    private findCommonPrefix() {
        this.fPrefix = 0;
        const end = Math.min(this.fExpected.length, this.fActual.length);
        for (; this.fPrefix < end; this.fPrefix++) {
            if (this.fExpected.charAt(this.fPrefix) !== this.fActual.charAt(this.fPrefix)) {
                break;
            }
        }
    }

    private findCommonSuffix() {
        let expectedSuffix = this.fExpected.length - 1;
        let actualSuffix = this.fActual.length - 1;
        for (; actualSuffix >= this.fPrefix && expectedSuffix >= this.fPrefix; actualSuffix--, expectedSuffix--) {
            if (this.fExpected.charAt(expectedSuffix) !== this.fActual.charAt(actualSuffix)) {
                break;
            }
        }
        this.fSuffix = this.fExpected.length - expectedSuffix;
    }

    private computeCommonPrefix() {
        return (
            (this.fPrefix > this.fContextLength ? ComparisonCompactor.ELLIPSIS : '') +
            this.fExpected.substring(Math.max(0, this.fPrefix - this.fContextLength), this.fPrefix)
        );
    }

    private computeCommonSuffix() {
        const end = Math.min(this.fExpected.length - this.fSuffix + 1 + this.fContextLength, this.fExpected.length);
        return (
            this.fExpected.substring(this.fExpected.length - this.fSuffix + 1, end) +
            (this.fExpected.length - this.fSuffix + 1 < this.fExpected.length - this.fContextLength
                ? ComparisonCompactor.ELLIPSIS
                : '')
        );
    }

    private areStringsEqual() {
        return this.fExpected === this.fActual;
    }
}

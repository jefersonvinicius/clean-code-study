import Assert from '../../__mocks__/Assert';

export default class ComparisonCompactor {
    static readonly ELLIPSIS = '...';
    static readonly DELTA_END = ']';
    static readonly DELTA_START = '[';

    private contextLength: number;
    private expected: string;
    private actual: string;
    private prefix: number = 0;
    private suffix: number = 0;
    private compactExpected: string = '';
    private compactActual: string = '';

    constructor(contextLength: number, expected: string, actual: string) {
        this.contextLength = contextLength;
        this.expected = expected;
        this.actual = actual;
    }

    public formatCompactedComparison(message: string | null) {
        if (this.canBeCompacted()) {
            this.compactExpectedAndActual();
            return Assert.format(message, this.compactExpected, this.compactActual);
        } else {
            return Assert.format(message, this.expected, this.actual);
        }
    }

    private compactExpectedAndActual() {
        this.findCommonPrefix();
        this.findCommonSuffix();
        this.compactExpected = this.compactString(this.expected);
        this.compactActual = this.compactString(this.actual);
    }

    private canBeCompacted() {
        return this.expected !== null && this.actual !== null && !this.areStringsEqual();
    }

    private compactString(source: string) {
        let result =
            ComparisonCompactor.DELTA_START +
            source.substring(this.prefix, source.length - this.suffix + 1) +
            ComparisonCompactor.DELTA_END;

        if (this.prefix > 0) {
            result = this.computeCommonPrefix() + result;
        }
        if (this.suffix > 0) {
            result = result + this.computeCommonSuffix();
        }

        return result;
    }

    private findCommonPrefix() {
        this.prefix = 0;
        const end = Math.min(this.expected.length, this.actual.length);
        for (; this.prefix < end; this.prefix++) {
            if (this.expected.charAt(this.prefix) !== this.actual.charAt(this.prefix)) {
                break;
            }
        }
    }

    private findCommonSuffix() {
        let expectedSuffix = this.expected.length - 1;
        let actualSuffix = this.actual.length - 1;
        for (; actualSuffix >= this.prefix && expectedSuffix >= this.prefix; actualSuffix--, expectedSuffix--) {
            if (this.expected.charAt(expectedSuffix) !== this.actual.charAt(actualSuffix)) {
                break;
            }
        }
        this.suffix = this.expected.length - expectedSuffix;
    }

    private computeCommonPrefix() {
        return (
            (this.prefix > this.contextLength ? ComparisonCompactor.ELLIPSIS : '') +
            this.expected.substring(Math.max(0, this.prefix - this.contextLength), this.prefix)
        );
    }

    private computeCommonSuffix() {
        const end = Math.min(this.expected.length - this.suffix + 1 + this.contextLength, this.expected.length);
        return (
            this.expected.substring(this.expected.length - this.suffix + 1, end) +
            (this.expected.length - this.suffix + 1 < this.expected.length - this.contextLength
                ? ComparisonCompactor.ELLIPSIS
                : '')
        );
    }

    private areStringsEqual() {
        return this.expected === this.actual;
    }
}

class ArgsExpection extends Error {
    private errorArgumentId = '\0';
    private errorParameter: string | null = null;
    private errorCode = ErrorCode.OK;

    constructor(errorCode: ErrorCode, errorArgumentId: string, errorParameter: string | null) {
        super();
        Object.setPrototypeOf(this, ArgsExpection.prototype);

        this.errorCode = errorCode;
        this.errorArgumentId = errorArgumentId;
        this.errorParameter = errorParameter;

        this.message = this.getErrorMessage();
    }

    private getErrorMessage() {
        switch (this.errorCode) {
            case ErrorCode.OK:
                return 'TILT: Should not get here';
            case ErrorCode.UNEXPECTED_ARGUMENT:
                return `Argument -${this.errorArgumentId} unexpected.`;
            case ErrorCode.MISSING_STRING:
                return `Could not find string parameter for -${this.errorArgumentId}`;
            case ErrorCode.INVALID_INTEGER:
                return `Argument -${this.errorArgumentId} expects an integer but was '${this.errorParameter}'`;
            case ErrorCode.MISSING_INTEGER:
                return `Could not find integer parameter for -${this.errorArgumentId}`;
            case ErrorCode.INVALID_DOUBLE:
                return `Argument -${this.errorArgumentId} expects an double but was '${this.errorParameter}'`;
            case ErrorCode.MISSING_DOUBLE:
                return `Could not find double parameter for -${this.errorArgumentId}`;
            case ErrorCode.INVALID_ARGUMENT_NAME:
                return `'${this.errorArgumentId}' is not a valid argument name.`;
            case ErrorCode.INVALID_ARGUMENT_FORMAT:
                return `'${this.errorArgumentId}' is not a valid argument format.`;
            default:
                return '';
        }
    }
}

export enum ErrorCode {
    OK,
    INVALID_ARGUMENT_FORMAT,
    UNEXPECTED_ARGUMENT,
    INVALID_ARGUMENT_NAME,
    MISSING_STRING,
    MISSING_INTEGER,
    INVALID_INTEGER,
    MISSING_DOUBLE,
    INVALID_DOUBLE,
}

export default ArgsExpection;

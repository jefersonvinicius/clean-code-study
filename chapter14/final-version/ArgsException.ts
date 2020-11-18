class ArgsExpection extends Error {
    constructor(code: ErrorCode, elementId: string, elementTail: string) {
        throw new Error();
    }
}

enum ErrorCode {
    OK,
    INVALID_ARGUMENT_FORMAT,
}

export default ArgsExpection;
export { ErrorCode };

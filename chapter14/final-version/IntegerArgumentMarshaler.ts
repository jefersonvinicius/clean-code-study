import ArgsExpection, { ErrorCode } from './ArgsException';
import ArgumentMarshaler from './ArgumentMarshaler';

class IntegerArgumentMarshaler implements ArgumentMarshaler {
    private intValue = 0;

    set(currentArgument: Iterator<string, string, string>) {
        try {
            const parameter = parseInt(currentArgument.next().value);
            this.intValue = parameter;
        } catch (error) {
            throw new ArgsExpection(ErrorCode.MISSING_STRING, '', null);
        }
    }

    static getValue(am: ArgumentMarshaler) {
        if (am !== null && am instanceof IntegerArgumentMarshaler) {
            return (am as IntegerArgumentMarshaler).intValue;
        } else {
            return '';
        }
    }
}

export default IntegerArgumentMarshaler;

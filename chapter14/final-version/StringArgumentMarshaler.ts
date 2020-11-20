import ArgsExpection, { ErrorCode } from './ArgsException';
import ArgumentMarshaler from './ArgumentMarshaler';

class StringArgumentMarshaler implements ArgumentMarshaler {
    private stringValue = '';

    set(currentArgument: Iterator<string, string, string>) {
        try {
            this.stringValue = currentArgument.next().value;
        } catch (error) {
            throw new ArgsExpection(ErrorCode.MISSING_STRING, '', null);
        }
    }

    static getValue(am: ArgumentMarshaler) {
        if (am !== null && am instanceof StringArgumentMarshaler) {
            return (am as StringArgumentMarshaler).stringValue;
        } else {
            return '';
        }
    }
}

export default StringArgumentMarshaler;

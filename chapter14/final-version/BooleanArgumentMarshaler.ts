import ArgumentMarshaler from './ArgumentMarshaler';

class BooleanArgumentMarshaler implements ArgumentMarshaler {
    private booleanValue = false;

    set(currentArgument: Iterator<string, string, string>) {
        this.booleanValue = true;
    }

    static getValue(am: ArgumentMarshaler) {
        if (am !== null && am instanceof BooleanArgumentMarshaler) {
            return (am as BooleanArgumentMarshaler).booleanValue;
        } else {
            return false;
        }
    }
}

export default BooleanArgumentMarshaler;

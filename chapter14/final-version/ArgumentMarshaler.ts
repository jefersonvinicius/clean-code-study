interface ArgumentMarshaler {
    set: (currentArgument: Iterator<string, string, string>) => void;
}

export default ArgumentMarshaler;

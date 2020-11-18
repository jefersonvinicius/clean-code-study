import ArgumentMarshaler from './ArgumentMarshaler';

class Args {
    private marshalers: Map<string, ArgumentMarshaler> = [];

    constructor(shema: string, args: string[]) {
        this.marshalers = new Map<string, ArgumentMarshaler>();
    }
}

export default Args;

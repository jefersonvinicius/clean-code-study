import ArgsExpection, { ErrorCode } from './ArgsException';
import ArgumentMarshaler from './ArgumentMarshaler';

class Args {
    private marshalers: Map<string, ArgumentMarshaler>;
    private argsFound: Set<string>;

    constructor(shema: string, args: string[]) {
        this.marshalers = new Map<string, ArgumentMarshaler>();
        this.argsFound = new Set<string>();
    }

    private parseSchema(schema: string) {
        for (let element of schema.split(',')) {
            if (element.length > 0) {
            }
        }
    }

    private parseSchemaElement(element: string) {
        const elementId = element.charAt(0);
        const elementTail = element.substring(1);
    }

    private validateSchemaElementId(elementId: string) {
        const regExpIsLetter = /^\wÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð$/;
        if (!elementId.match(regExpIsLetter)) {
            throw new ArgsExpection(ErrorCode.INVALID_ARGUMENT_NAME, elementId, null);
        }
    }
}

export default Args;

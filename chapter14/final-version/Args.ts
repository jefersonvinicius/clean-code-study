import ArgsExpection, { ErrorCode } from './ArgsException';
import ArgumentMarshaler from './ArgumentMarshaler';
import BooleanArgumentMarshaler from './BooleanArgumentMarshaler';
import StringArgumentMarshaler from './StringArgumentMarshaler';
import IntegerArgumentMarshaler from './IntegerArgumentMarshaler';

class Args {
    private marshalers: Map<string, ArgumentMarshaler>;
    private argsFound: Set<string>;
    private currentArgument: string | undefined;

    constructor(schema: string, args: string[]) {
        this.marshalers = new Map<string, ArgumentMarshaler>();
        this.argsFound = new Set<string>();

        this.parseSchema(schema);
    }

    private parseSchema(schema: string) {
        for (let element of schema.split(',')) {
            if (element.length > 0) {
                this.parseSchemaElement(element.trim());
            }
        }
    }

    private parseSchemaElement(element: string) {
        const elementId = element.charAt(0);
        const elementTail = element.substring(1);
        this.validateSchemaElementId(elementId);
        if (elementTail.length === 0) {
            this.marshalers.set(elementId, new BooleanArgumentMarshaler());
        } else if (elementTail === '*') {
            this.marshalers.set(elementId, new StringArgumentMarshaler());
        } else if (elementTail === '#') {
            this.marshalers.set(elementId, new IntegerArgumentMarshaler());
        } else {
            throw new ArgsExpection(ErrorCode.INVALID_ARGUMENT_FORMAT, elementId, elementTail);
        }
    }

    private validateSchemaElementId(elementId: string) {
        const regExpIsLetter = /^\wÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð$/;
        if (!elementId.match(regExpIsLetter)) {
            throw new ArgsExpection(ErrorCode.INVALID_ARGUMENT_NAME, elementId, null);
        }
    }

    private parseArgumentStrings(argsList: string[]) {
        for (const [index, argString] of argsList.entries()) {
            this.currentArgument = argString[index];
            if (argString.startsWith('-')) {
                this.parseArgumentCharacters(argString.substring(1));
            } else {
                this.currentArgument = argsList[index - 1];
                break;
            }
        }
    }

    private parseArgumentCharacters(argChars: string) {
        for (let i = 0; i < argChars.length; i++) {
            this.parseArgumentCharacter(argChars.charAt(i));
        }
    }

    private parseArgumentCharacter(argChar: string) {
        const m = this.marshalers.get(argChar);
        if (m === undefined) {
            throw new ArgsExpection(ErrorCode.UNEXPECTED_ARGUMENT, argChar, null);
        } else {
            this.argsFound.add(argChar);
            try {
                m.set(this.currentArgument);
            } catch (error) {
                throw error;
            }
        }
    }
}

export default Args;

/**
 * Exemplo de classe coesa
 */

class Stack {
    private topOfStack = 0;
    private elements = Array<number>();

    public size() {
        return this.topOfStack;
    }

    public push(element: number) {
        this.topOfStack++;
        this.elements.push(element);
    }

    public pop() {
        if (this.topOfStack === 0) {
            throw new Error('Pilha vazia!');
        }
        this.topOfStack--;
        const element = this.elements.pop();
        return element;
    }
}

const stack = new Stack();
stack.push(1);
console.log('Stack size: ', stack.size());
stack.push(5);
const topElement = stack.pop();
console.log('Top element removed: ', topElement);

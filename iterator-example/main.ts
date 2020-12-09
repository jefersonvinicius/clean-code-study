/**
 * Estudo Pessoal sobre Iterators (não tem nada a ver com o livro)
 */

const list = ['Jeferson', 'Vinícius', 'de', 'Oliveira', 'Santos'];

const iterableList = list.entries();
console.log(iterableList.next().value);
console.log(iterableList.next().value);

import {findIndex, createList, render} from "/functions.js";
import {Task, List} from "/classes.js";
const list = [];
function test(x) {
    console.log(x);
}

function getText() {
    let textEntry = document.getElementById('list-text-area').value;
    console.log(textEntry);
}

let listAddButton = document.getElementById('add-button');
//listAddButton.addEventListener('click', test);

let listTextArea = document.getElementById('list-text-area');
let listCreateButton = document.getElementById('list-add-button');
//listTextArea.addEventListener('click', test, 'does this work');

listCreateButton.addEventListener('click', function() {
    createList('list-text-area', list);
    console.log(list)
    render();
});
export {list};
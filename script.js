//Import from Function Declarations
import {findIndex, createList, render, revealButton, test, getText} from "/functions.js";
//Import from Class Declarations
import {Task, List} from "/classes.js";

//Variables
//Main List of Data
const list = [];
//Elements by ID
let listAddButton = document.getElementById('add-button');
let listTextArea = document.getElementById('list-text-area');
let listCreateButton = document.getElementById('list-add-button');


//Event Listeners
//Reveals text entry and button to create new list
listAddButton.addEventListener('click', function() {
    revealButton('reveal-button');
})
//Takes text and creates new list
listCreateButton.addEventListener('click', function() {
    createList('list-text-area', list);
    console.log(list)
    render();
});


export {list, listAddButton};
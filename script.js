//Import from Function Declarations
import {findIndex, createList, render, revealButton, test, getText, getObject} from "/functions.js";
//Import from Class Declarations
import {Task, List} from "/classes.js";

//Variables
//Main List of Data
const list = [];
//Elements by ID
let listAddButton = document.getElementById('add-button');
let listAddButton2 = document.getElementById('add-button-2');
let listTextArea = document.getElementById('list-text-area');
let listCreateButton = document.getElementById('list-add-button');
let taskCreateButton = document.getElementById('text-button');


//Event Listeners
//Reveals text entry and button to create new list
listAddButton.addEventListener('click', function() {
    if (document.getElementById('reveal-button').style.display =="flex") {
        document.getElementById('reveal-button').style.display ="none"
    } else {
    revealButton('reveal-button');
    }
})
listAddButton2.addEventListener('click', function() {
    if (document.getElementById('reveal-button-2').style.display =="flex") {
        document.getElementById('reveal-button-2').style.display ="none"
    } else {
    revealButton('reveal-button-2');
    }
})
//Takes text and creates new list
listCreateButton.addEventListener('click', function() {
    createList('list-text-area', list);
    console.log(list)
    render();
});
taskCreateButton.addEventListener('click', function() {
    let selected = getObject(list);
    selected.addTask(document.getElementById('text-input').value);
    render();
})


export {list, listAddButton};
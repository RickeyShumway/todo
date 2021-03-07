//Import from Function Declarations
import {findIndex, createList, render, revealButton, test, getText, getSelected} from "/functions.js";
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
let leftList = document.getElementById('listAppendTo');
let rightList = document.getElementById('space-to-do');


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
//Event Delegation for Left List
leftList.addEventListener('click', function (e) {
    
    let currentSelection;
    //let selectList = (x) => console.log("Select List" + x);
    let selectList = function(id, arr) {
        for (let i=0; i<arr.length; i++) {
            if (arr[i].id == id) {
                arr[i].updateSelected(true);
                console.log(arr[i]);
            } else {
                arr[i].updateSelected(false);
            }
        }render();
    }
    let editList = function(id, arr) {
        console.log("gonna edit" + id);
        let splitId = id.split("_");
        splitId.shift();
        console.log(splitId);
        for (let i=0; i < arr.length; i++) {
            if(arr[i].id == splitId) {
                arr[i].editing = true;
                console.log(arr[i].editing);
            } else {
                arr[i].editing = false;
                console.log(arr[i].editing)
            }
        }render();
    }
    let submitEdit = function(id, arr) {
        let splitId = id.split("_");
        splitId.shift();
        let edit = document.getElementById("edit-text_"+ splitId[0]).value;
        console.log(splitId[0]);
        for (let i = 0; i < arr.length; i++) {
             arr[i].editing = false;
            if (arr[i].id == splitId[0]) {
                arr[i].title = edit;
            }
        
        }render();
    }
    let deleteList = function(id, arr) {
        console.log("gonna delete" + id);
        let splitId = id.split("_");
        splitId.shift();
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id == splitId) {
                arr.splice(i, 1);
            }
        }render();
    }
    if (e.target.className == 'list-item') {
        selectList(e.target.id, list);
    } else if (e.target.className == 'fa fa-edit edit') {
        editList(e.target.id, list);
    } else if (e.target.className == 'fa fa-close delete') {
        deleteList(e.target.id, list);
    } else if (e.target.className == 'edit-button') {
        submitEdit(e.target.id, list);
    }
    
})
//right side event listener
rightList.addEventListener('click', function(e) {
    let currentSelection;
    console.log("Big picture works");
    let markComplete = function(id, obj) {
        console.log("this mark complete"+ id);
        console.log(obj.task.length);
        for (let i = 0; i < obj.task.length; i++) {
            if (obj.task[i].id == id)
                if (obj.task[i].complete == false) {
                obj.task[i].complete = true;
                console.log(obj.task[i].complete)
                } else {
                obj.task[i].complete = false;
                console.log(obj.task[i].complete)
            }
        }render();
    }
    let editTask = function(id, arr) {
        console.log('this will edit the task');
        for (let i = 0; i < obj.task.length; i++) {
            if (obj.task[i].id == id) {
                obj.task[i].editing = true;
                } else {
                obj.task[i].complete = false;
            }
        }render();
    }
    let deleteTask = function(id, obj) {
        console.log("This will delete the task");
        for (let i = 0; i < obj.task.length; i++) {
            if (obj.task[i].id == id) {
                obj.task.splice(i, 1);
            }
        }render();
    }
    let splitShift = function (id) {
        let splitId = id.split("_");
        splitId.shift();
        return splitId;
    };
    if(e.target.className == "check") {
        markComplete(splitShift(e.target.id), getSelected(list));
    } else if (e.target.className == "fa fa-edit") {
        editTask(splitShift(e.target.id), getSelected(list));
    } else if (e.target.className == "fa fa-close") {
        deleteTask(splitShift(e.target.id), getSelected(list));
    }
})
//Takes text and creates new list
listCreateButton.addEventListener('click', function() {
    createList('list-text-area', list);
    console.log(list)
    render();
});
taskCreateButton.addEventListener('click', function() {
    let selected = getSelected(list);
    selected.addTask(document.getElementById('text-input').value);
    render();
})


export {list, listAddButton};
import {Task, List} from "/classes.js";
import {list, listAddButton} from "/script.js";

function test(x) {
    console.log(x);
}

function findIndex (obj, id, list) {
    let index = obj.map(function (list) {
        return list.id;}).index(id)
}

function createList (tagId, arr) {
    let id = Date.now();
    let textVal = document.getElementById(tagId).value;
    let newList = new List (id, textVal);
    arr.push(newList);
}

function selectList(arr) {
    arr.forEach((item) => {
        item.selected = false;
    }) 
}
function getText() {
    let textEntry = document.getElementById('list-text-area').value;
    console.log(textEntry);
}
function revealButton (element) {
    document.getElementById(element).style.display="flex";
}
function render () {
    //Create Left List
    let appendTo = document.getElementById('listAppendTo');
    let html = '';
    list.forEach((list) => {
        let openTag = `<div class='list-item' id=${list.id}>`;
        let title = `<div class="title-item">${list.title}</div>`;
        let edit = `<div class="edit-icon">\
                    <i class="fa fa-edit"></i>\
                    <i class="fa fa-close"></i>\                         
                    </div>`;
        let closeTag = `</div>`;
        html+=openTag + title + edit + closeTag;
    })
    //Adding to the DOM
    document.getElementById('listAppendTo').innerHTML = html;
    //Reseting: Text area gone and words removed.
    document.getElementById('reveal-button').style.display="none";
    document.getElementById('list-text-area').value = '';
}
export {findIndex, createList, render, revealButton, test, getText}
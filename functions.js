import {Task, List} from "/classes.js";
import {list} from "/script.js";
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
function render () {
    //List of List Titles
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
    document.getElementById('listAppendTo').innerHTML = html;
    //List of todos

    // list.forEach((list) => {
    //     appendTo = document.getElementById('empty-title');
    //     html = '';
    //     forEach((list) => {

    //     })

    // })

}
export {findIndex, createList, render}
import {Task, List} from "/classes.js";
import {list, listAddButton} from "/script.js";

function test(x) {
    console.log(x);
}

function findIndex (obj, id, list) {
    let index = obj.map(function (list) {
        return list.id;}).index(id)
}
function selectList (id, arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i].id == id) {
            arr[i].updateSelected(true);
        } else {
            arr[i].updateSelected(false);
        }
    }

}
function deleteList() {

}
function editList(id) {
    console.log(works, id)
}
function getObject (arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].selected == true) {
            //console.log('func', arr[i]);
            return arr[i];
            
        } 
        
    }
}
function createList (tagId, arr) {
    let id = Date.now();
    let textVal = document.getElementById(tagId).value;
    let newList = new List (id, textVal);
    arr.push(newList);
}

// function selectList(arr) {
//     arr.forEach((item) => {
//         item.selected = false;
//     }) 
// }
function getText() {
    let textEntry = document.getElementById('list-text-area').value;
    //console.log(textEntry);
}
function revealButton (element) {
    document.getElementById(element).style.display="flex";
}
function render () {
    let selected = getObject(list);
    let selectedTask = selected.task;
    // console.log(list);
    // console.log("selected", selected);
    console.log('selectedTask', selectedTask);
    
    //Create Left List
    let appendTo = document.getElementById('listAppendTo');
    let htmlList = '';
    let htmlTask = '';
    list.forEach((list) => {
        let openTag = `<div class='list-item' id=${list.id}>`;
        let title = `<div class="title-item">${list.title}</div>`;
        let edit = `<div class="edit-icon">\
                    <i class="fa fa-edit" id='edit${list.id}' onclick='editList(${list.id})'></i>\
                    <i class="fa fa-close" onclick='deleteList()'></i>\                         
                    </div>`;
        let closeTag = `</div>`;
        htmlList+=openTag + title + edit + closeTag;
    })
    selectedTask.forEach((selectedTask) => {
        let openTag=`<div class="to-do-item" id='${selectedTask.id}'>`;
        let input =`<input type="checkbox">`;
        let task =`<div>${selectedTask.item}</div>`;
        let otherTags =`<i class="fa fa-edit"></i>\
                    <i class="fa fa-close"></i>
                    </div>`;
        htmlTask += openTag + input + task + otherTags;
        // console.log('chee', selected)
        console.log('hoo', selectedTask['item'], selectedTask['id'])
    })

    //Adding to the DOM
    document.getElementById('listAppendTo').innerHTML = htmlList;
    document.getElementById('space-to-do').innerHTML = htmlTask;
    //Adding Event Listeners to Generated Elements
    //List-Items
    let listItems = document.getElementsByClassName('list-item');
        for (let i=0; i < listItems.length; i++) {
            listItems[i].addEventListener('click', function() {
            //console.log("hello", listItems[i]);
            selectList(listItems[i].id, list);
            //console.log(list);
            document.getElementById('empty-title').innerHTML = getObject(list).title;
            //console.log(getObject(list))
            render();
    
            });
    }
    let taskTags = document.getElementsByClassName('to-do-item');
        for (let i=0; i < taskTags.length; i++) {
            taskTags[i].addEventListener('click', function() {

            })
        }
    //Reseting: Text area gone and words removed.
    document.getElementById('reveal-button').style.display="none";
    document.getElementById('list-text-area').value = '';
    document.getElementById('reveal-button-2').style.display="none";
    document.getElementById('text-input').value = '';


}
export {findIndex, createList, render, revealButton, test, getText, getObject}
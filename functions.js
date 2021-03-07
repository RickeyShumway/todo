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
function getSelected (arr) {
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
    // newList.addTask("groceries");
    // newList.addTask('battroom');
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
    let currentSelection;
    for (let i = 0; i < list.length; i++) {
        if (list[i].selected == true) {
            currentSelection = list[i];
        } else if (list.length = 0){
            document.getElementById('listAppendTo').innerHTML = '';
            document.getElementById('empty-title').innerHTML = "No list selected.";
            return;
        }
    }
    //Create Left List
    let appendTo = document.getElementById('listAppendTo');
    
    let htmlList = '';
    let htmlTask = '';
    list.forEach((list) => {
        if (list.editing == true) {
            let openTag = `<div class="list-input list-item" id="edit-reveal_${list.id}">`
            let inputs = `<input type="text" class="edit-list" value="${list.title}" id="edit-text_${list.id}">\
            <input type="button" class="edit-button" id="list-add-button_${list.id}" value="DONE">`
            let closeTag = `</div>`;
            htmlList+=openTag + inputs + closeTag;
        } else {
            let openTag = `<div class='list-item' id=${list.id}>`;
            let title = `<div class="title-item">${list.title}</div>`;
            let edit = `<div class="edit-icon">\
                        <i class="fa fa-edit edit" id='edit_${list.id}'></i>\
                        <i class="fa fa-close delete" id='delete_${list.id}'></i>\                         
                        </div>`;
            let closeTag = `</div>`;
            htmlList+=openTag + title + edit + closeTag;
        }
    })
    //console.log("This is my current selection",currentSelection)
    
        currentSelection.task.forEach((element) => {
            //console.log("Im a task" + element.item);
            if(element.editing) {
                console.log("editing is true")
                let openTag1 = `<div class="task-edit list-item">`
                let input1 = `<input id='edit-task_${element.id}' value="${element.item}"type='textarea'>\
                <input type="button" class="submit-button-edit" id='button_${element.id}' value="DONE"></div>`
                htmlTask += openTag1 + input1;
           } else {
               //console.log('editing is false')
                let openTag=`<div class="to-do-item" id='${element.id}'>`;
                let input =`<input class="check" id="check_${element.id}" type="checkbox">`;
                let task =`<div>${element.item}</div>`;
                let otherTags =`<i class="fa fa-edit" id="edit_${element.id}"></i>\
                            <i class="fa fa-close" id="delete_${element.id}"></i>
                            </div>`;
                htmlTask += openTag + input + task + otherTags;
                console.log(element.id)
            }
        })

    // currentSelection.item.forEach(() => {
    //     let openTag=`<div class="to-do-item" id='${currentSelection.item.id}'>`;
    //     let input =`<input type="checkbox">`;
    //     let task =`<div>${currentSelection.item}</div>`;
    //     let otherTags =`<i class="fa fa-edit"></i>\
    //                 <i class="fa fa-close"></i>
    //                 </div>`;
    //     htmlTask += openTag + input + task + otherTags;
    //     // console.log('chee', selected)
    //     console.log('hoo', currentSelection.task.item, currentSelection.task.id)
    // })

    //Adding to the DOM
    document.getElementById('listAppendTo').innerHTML = htmlList;
    document.getElementById('space-to-do').innerHTML = htmlTask;
    document.getElementById('empty-title').innerHTML = currentSelection.title;
    
    //Reseting: Text area gone and words removed.
    document.getElementById('reveal-button').style.display="none";
    document.getElementById('list-text-area').value = '';
    document.getElementById('reveal-button-2').style.display="none";
    document.getElementById('text-input').value = '';


}
export {findIndex, createList, render, revealButton, test, getText, getSelected}
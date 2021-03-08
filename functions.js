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
        } else if (arr[i].id != id) {
            arr[i].updateSelected(false);
        } else if (arr == []) {
            return false;
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
    arr.push(newList);
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i].id != id) {
    //         arr[i].selected = false;
    //     }
    // }
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
    let currentSelection = getSelected(list);
    //Create Left List
    let appendTo = document.getElementById('listAppendTo');
    
    let htmlList = '';
    let htmlTask = '';
    list.forEach((list) => {
        console.log("what happens?")
        if (list.editing == true) {
            let openTag0 = `<div class="list-input list-item" id="edit-reveal_${list.id}">`
            let inputs0 = `<input type="text" class="edit-list" value="${list.title}" id="edit-text_${list.id}">\
            <input type="button" class="edit-button" id="list-add-button_${list.id}" value="DONE">`
            let closeTag0 = `</div>`;
            htmlList+=openTag0 + inputs0 + closeTag0;
        } else {
            let openTag = `<div class='list-item' id=${list.id}>`;
            let title = `<div class="title-item" id="title_${list.id}">${list.title}</div>`;
            let edit = `<div class="edit-icon">\
                        <i class="fa fa-edit edit" id='edit_${list.id}'></i>\
                        <i class="fa fa-close delete" id='delete_${list.id}'></i>\                         
                        </div>`;
            let closeTag = `</div>`;
            htmlList+=openTag + title + edit + closeTag;
        }
    })
   
    //console.log("This is my current selection",currentSelection)
    if (currentSelection) {
        currentSelection.task.forEach((element) => {
            //console.log("Im a task" + element.item);
            // console.log(list.task)
            if(element.editing || list.length < 0) {
                console.log("editing is true")
                let openTag1 = `<div class="task-edit list-item">`
                let input1 = `<input id='edit-task_${element.id}' value="${element.item}"type='textarea'>\
                <input type="button" class="submit-button-edit" id='button_${element.id}' value="DONE"></div>`
                htmlTask += openTag1 + input1;
           } else if (element.complete == true) {
                let openTag4=`<div class="to-do-item" id='${element.id}'>`;
                let input4 =`<input class="check" id="check_${element.id}" type="checkbox"checked>`;
                let task4 =`<div class="checked-task">${element.item}</div>`;
                let otherTags4 =`<i class="fa fa-edit" id="edit_${element.id}"></i>\
                            <i class="fa fa-close" id="delete_${element.id}"></i>
                            </div>`;
                htmlTask += openTag4 + input4 + task4 + otherTags4;
           } else {
               //console.log('editing is false')
                let openTag2=`<div class="to-do-item" id='${element.id}'>`;
                let input2 =`<input class="check" id="check_${element.id}" type="checkbox">`;
                let task2 =`<div>${element.item}</div>`;
                let otherTags2 =`<i class="fa fa-edit" id="edit_${element.id}"></i>\
                            <i class="fa fa-close" id="delete_${element.id}"></i>
                            </div>`;
                htmlTask += openTag2 + input2 + task2 + otherTags2;
                console.log(element.id)
                
            }
        })
    } else {
        document.getElementById('empty-title').innerHTML = 'No List Selected';
    }
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
    document.getElementById(currentSelection.id).style.borderRight = 'none';
    document.getElementById(currentSelection.id).style.backgroundColor = 'white';
    document.getElementById(currentSelection.id).style.color = 'black';
    
    //Reseting: Text area gone and words removed.
    document.getElementById('reveal-button').style.display="none";
    document.getElementById('list-text-area').value = '';
    document.getElementById('reveal-button-2').style.display="none";
    document.getElementById('text-input').value = '';
    window.localStorage.setItem('list', JSON.stringify(list));

}
export {findIndex, createList, render, revealButton, test, getText, getSelected}
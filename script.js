let htmlLeft = {
    openTag: "<div class='list-item'>",
    listName: "List Name",
    closeTag: "</div>",
}

function makeString (...string) {
    let div = "";
    for (let i=0; i < string.length; i++) {
        div.push(i);
        element.append(div);
        console.log(div);
    }
}
let addButton = document.getElementById('listlist');
//$('#add-button').click(appendDom([htmlLeft.openTag, htmlLeft.listName, htmlLeft.closeTag], addButton));
console.log(addButton);

addButton.appendChild()
//addButton.innerHTML = htmlLeft.openTag +htmlLeft.listName + htmlLeft.closeTag;

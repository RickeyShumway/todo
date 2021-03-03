//Constructor for new Task
function findIndex (obj, id, list) {
    let index = obj.map(function (list) {
        return list.id;}).index(id)
}
function createList (tagId) {
    let id = Date.now();
    let textVal = document.getElementById(tagId).value;
    let newList = new List (id, textVal);
}
class Task {
    
    constructor(id, item) {
        this.id = id;
        this.item = item;
        this.complete = false;
    }

    editTask (string) {
        this.item = string;
    }

    completeTask () {
        this.complete = true;
    }
    
}
//Constructor for new List
class List {
    
    constructor(id, title) {
        this.title = title;
        this.id = Date.now();
        this.selected = false;
        this.task = [];
    }

    addTask(string) {
        let taskId = Date.now();
        let newTask = new Task (taskId, string);
        this.tasks.push(newTask);  
    }
    
    deleteTask (id) {
        this.task.splice(id);
    }

    clearCompletedTask () {
        let completedTasks = this.task.find(completedTasks => this.task.completed == true);
        this.task.splice(completedTasks);
    }


}
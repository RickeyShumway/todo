//Constructor for new Task
class Task {
    
    constructor(id, item) {
        this.id = id;
        this.item = item;
        this.complete = false;
        this.editing = false;
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
        this.id = id;
        this.selected = true;
        this.task = [];
        this.editing = false;
    }

    updateSelected(bool) {
        this.selected = bool;
    }
    
    addTask(string) {
        let taskId = Date.now();
        let newTask = new Task (taskId, string);
        this.task.push(newTask);  
    }
    
    deleteTask (id) {
        this.task.splice(id);
    }

    clearCompletedTask () {
        let completedTasks = this.task.find(completedTasks => this.task.completed == true);
        this.task.splice(completedTasks);
    }


}
export {Task, List}
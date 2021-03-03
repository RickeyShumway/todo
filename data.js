//Constructor for new Task
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
    
    constructor(title) {
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
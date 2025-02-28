import _ from 'lodash';

export function addTask(tasks, task){
    const taskObject = {
        "name": task, //String
        "done": false // Boolean
    }
    tasks.push(taskObject)
    console.log(`New Task Added: ${taskObject.name}`);
    return tasks;
}

export function markTaskAsDone(tasks, index){
    if (tasks[index]) {
        tasks[index].done = true;
        console.log(`Task marked as done ${tasks[index].name}`)
    } else {
        console.log("Tasks does not exist. Please check index value.")
    }
    return tasks;
}

export function deleteTask(tasks, index){
    if (tasks[index]) {
        const deletedTask = tasks.splice(index, 1)
        console.log(`Task removed: ${deletedTask[1].name}`)
    } else{
console.log("Task does not exist. Please check index value.")
    }
    return tasks;
}

export function viewTasks(tasks){
    const groupedTasks = _.groupBy(tasks, "done");
    console.log("\n\n\n Pending Tasks:");
    if (groupedTasks[false]) {
        groupedTasks[false].forEach((task, i) =>
            console.log(`${i}. ${task.name}`)
        );
    } else {
        console.log("No pending tasks.");
    }
    
    console.log("\n\n Completed Tasks")
    if (groupedTasks[true]) {
        groupedTasks[true].forEach((task, i) =>
            console.log(`${i}. ${task.name}`)
        );
    } else {
        console.log("No completed tasks.");
    }
}

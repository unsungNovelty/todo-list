const createATodoObject = (todoProjectName, todoTitle, todoDescription, todoDueDate, todoPriority) => {
    
    let todoProject = [];
    let todoItem = [];
    let todoObject = {};
    
    todoProject.push(todoProjectName);
    todoObject.title = todoTitle;
    todoObject.description = todoDescription;
    todoObject.dueDate = todoDueDate;
    todoObject.priority = todoPriority;
    
    return todoItem.push(todoObject);

}

export default createATodoObject;


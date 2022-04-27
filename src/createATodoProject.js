const createAProjectObject = (todoProjectName) => {
    
    let todoProject = [];
    let todoObject = {};
    
    todoObject.projectName = todoProjectName;
    todoObject.title = todoTitle;
    todoObject.description = todoDescription;
    todoObject.dueDate = todoDueDate;
    todoObject.priority = todoPriority;
    
    return todoProject.push(todoObject);

}

export default createATodoObject;


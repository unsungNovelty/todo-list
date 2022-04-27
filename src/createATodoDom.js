const createATodoDom = (titleOfTodo, priorityOfTodo, duedateOfTodo) => {
    const todoContainer = document.createElement('div');
    todoContainer.className = 'todoContainer';
    
    const todoCheckbox = document.createElement('input');
    todoCheckbox.type = 'checkbox';
    todoCheckbox.id = 'checkbox'
    
    const todoLabel = document.createElement('label');
    todoLabel.htmlFor = 'checkbox';
    todoLabel.innerText = titleOfTodo;

    const priorityInfo = document.createElement('span');
    priorityInfo.className = 'p1';
    priorityInfo.innerText = priorityOfTodo;

    const duedateInfo = document.createElement('span');
    duedateInfo.innerText = duedateOfTodo;
    
    todoContainer.append(todoCheckbox, todoLabel, '\t' , priorityInfo, '\t', duedateInfo);
    

    return todoContainer; 
}

export default createATodoDom;

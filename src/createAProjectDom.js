const createAProjectDom = (projectTitleOfTodo) => {
    
    // Create a container for project name for sidebar section
    const projectContainer = document.createElement('div');
    projectContainer.className = 'todoContainer';
    
    // Create a span for the project title
    const projectTitle = document.createElement('span');
    projectTitle.innerText = projectTitleOfTodo;
    
    // Append the project title on to the project container
    projectContainer.append(projectTitleOfTodo);
    
    return projectContainer; 
}

export default createAProjectDom;

import './style.css';
import todoForm from './todoForm';

const frontPage = (() => {

    const frontPageBody = document.createElement('article');
    frontPageBody.id = 'frontPageBody';
    
    const titleSection = document.createElement('h1');
    titleSection.innerText = 'The ultimate todo list app';
    titleSection.className = 'titleSection';
    frontPageBody.appendChild(titleSection);

    const container = document.createElement('section');
    container.className = 'container';

    const sidebarSection = document.createElement('div');
    sidebarSection.className = 'mainSection sidebarSection';
    container.appendChild(sidebarSection);

    const addProjectButton = document.createElement('div');
    addProjectButton.className = 'sidebarItem';
    addProjectButton.innerText = 'Add a project';
    sidebarSection.appendChild(addProjectButton);
    
    const todoListSection = document.createElement('div');
    todoListSection.className = 'mainSection todoListSection';
    container.appendChild(todoListSection);
    frontPageBody.appendChild(container);

    const addTodoButton = document.createElement('div');
    addTodoButton.className = 'sidebarItem';
    addTodoButton.innerText = 'Add a todo item';
    todoListSection.appendChild(addTodoButton);

    const openFormFunction = () => {
        addTodoButton.addEventListener('click', () => {
            todoForm.myForm.reset();
            todoForm.myForm.style.display = 'grid';
            frontPageBody.style.filter = 'blur(5px)';
        });
    };

    openFormFunction();
    
    return {frontPageBody, todoListSection, sidebarSection};

})();
  
document.body.appendChild(frontPage.frontPageBody);
document.body.appendChild(todoForm.myForm);

export default frontPage;

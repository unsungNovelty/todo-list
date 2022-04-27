import createATodoObject from "./createATodoObject";
import createATodoDom from "./createATodoDom";
import frontPage from ".";
import createAProjectDom from "./createAProjectDom";


const todoForm = (() => {
    
    // Create the parent form
    const myForm = document.createElement('form');
    myForm.className = 'form-container';
    myForm.id = 'form';

    const formTitle = document.createElement('h3');
    formTitle.innerText = 'Provide information';
    formTitle.className = 'form-item';

    myForm.appendChild(formTitle);
    
    // Create label elements and input elements for form
    const projectLabel = document.createElement('label');
    projectLabel.htmlFor = 'project';
    projectLabel.className = 'form-item';
    projectLabel.innerText = 'Project:';
    
    const projectInput = document.createElement('input');
    projectInput.type = 'text';
    projectInput.id = 'project';
    projectInput.name = 'project';
    projectInput.value = '';
    projectInput.required = true;
    
    myForm.appendChild(projectLabel);
    myForm.appendChild(projectInput);
    
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.name = 'Title';
    titleInput.value = '';
    titleInput.required = true;

    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = 'title';
    titleLabel.innerText = 'Title:';
    titleLabel.className = 'form-item';
    
    myForm.appendChild(titleLabel);
    myForm.appendChild(titleInput);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = 'description';
    descriptionLabel.innerText = 'Description:';
    descriptionLabel.className = 'form-item';

    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.id = 'description';
    descriptionInput.name = 'Description';
    descriptionInput.value = '';
    descriptionInput.required = true;

    myForm.appendChild(descriptionLabel);
    myForm.appendChild(descriptionInput);

    const dueDateLabel = document.createElement('label');
    dueDateLabel.htmlFor = 'duedate';
    dueDateLabel.innerText = 'Due date:';
    dueDateLabel.className = 'form-item';

    let dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'duedate';
    dueDateInput.name = 'duedate';
    dueDateInput.value = '';
    dueDateInput.required = true;

    myForm.appendChild(dueDateLabel);
    myForm.appendChild(dueDateInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.htmlFor = 'priority';
    priorityLabel.innerText = 'Priority:';
    priorityLabel.className = 'form-item';

    const priorityList = document.createElement('select');
    priorityList.id = 'priority';
    priorityList.name = 'priority';
    priorityList.required = true;

    const option1 = document.createElement('option');
    option1.value = 'P5';
    option1.innerText = 'Priority 5 (P5)';
    priorityList.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = 'P4';
    option2.innerText = 'Priority 4 (P4)';
    priorityList.appendChild(option2);

    const option3 = document.createElement('option');
    option3.value = 'P3';
    option3.innerText = 'Priority 3 (P3)';
    priorityList.appendChild(option3);

    const option4 = document.createElement('option');
    option4.value = 'P2';
    option4.innerText = 'Priority 2 (P2)';
    priorityList.appendChild(option4);

    const option5 = document.createElement('option');
    option5.value = 'P1';
    option5.innerText = 'Priority 1 (P1)';
    priorityList.appendChild(option5);

    myForm.appendChild(priorityLabel);
    myForm.appendChild(priorityList);


    const submitButton = document.createElement('div');
    submitButton.id = 'submitButton';
    submitButton.innerText = 'Add a task';
    myForm.appendChild(submitButton);

    
    // Function which adds form data
    const addFormData = () => {
        
        // Form validation when you focusout of text fields without input
        projectInput.addEventListener('focusout', () => {
        if (projectInput.validity.valueMissing) {
            projectInput.placeholder = 'Please provide a project name';
            projectInput.setCustomValidity('Please provide a project name');
            projectInput.style.borderRadius = '3px';
            projectInput.style.boxShadow = '0 0 0 2px red';
        } else {
                projectInput.style.boxShadow = 'none';
            }
        });
        
        titleInput.addEventListener('focusout', () => {
            if (titleInput.validity.valueMissing) {
                titleInput.placeholder = 'Please provide a title';
                titleInput.setCustomValidity('Provide proper title');
                titleInput.style.borderRadius = '3px';
                titleInput.style.boxShadow = '0 0 0 2px red';
            } else {
                titleInput.style.boxShadow = 'none';
            }
        });


        descriptionInput.addEventListener('focusout', () => {
            if (descriptionInput.validity.valueMissing) {
                descriptionInput.placeholder = 'Please provide a description';
                descriptionInput.setCustomValidity('Provide proper description');
                descriptionInput.style.borderRadius = '3px';
                descriptionInput.style.boxShadow = '0 0 0 2px red';
            } else {
                descriptionInput.style.boxShadow = 'none';
            }
        });
        
        dueDateInput.addEventListener('focusout', () => {
            if(dueDateInput.validity.valueMissing) {
                dueDateInput.setCustomValidity('Provide proper due date');
                dueDateInput.style.borderRadius = '3px';
                dueDateInput.style.boxShadow = '0 0 0 2px red';
            } else {
                titleInput.style.boxShadow = 'none';
            }
        });

        // Form validation when clicking on the submit button
        submitButton.addEventListener('click', () => {

            if (titleInput.validity.valueMissing) {
                    titleInput.setCustomValidity('Provide proper title');
                    titleInput.placeholder = 'Please provide a title';
                    titleInput.style.borderRadius = '3px';
                    titleInput.style.boxShadow = '0 0 0 2px red';
            } else {
                titleInput.style.boxShadow = 'none';
            }

            if (descriptionInput.validity.valueMissing) {
                descriptionInput.placeholder = 'Please provide a description';
                descriptionInput.setCustomValidity('Provide proper description');
                descriptionInput.style.borderRadius = '3px';
                descriptionInput.style.boxShadow = '0 0 0 2px red';
            } else {
                descriptionInput.style.boxShadow = 'none';
            }

            if(priorityList.validity.valueMissing) {
                priorityList.setCustomValidity('Please choose an appropriate priority');
                priorityList.style.borderRadius = '3px';
                priorityList.style.boxShadow = '0 0 0 2px red';
            } 
            
            if(dueDateInput.validity.valueMissing) {
                dueDateInput.setCustomValidity('Please provide a due date');
                dueDateInput.style.borderRadius = '3px';
                dueDateInput.style.boxShadow = '0 0 0 2px red';
            } else {
                priorityList.style.boxShadow = '0 0 0 2px red';
                // Creates the object so that it can be displayed later when 'createATodoDom' function is run
                createATodoObject(projectInput.value, titleInput.value, descriptionInput.value, dueDateInput.value, priorityList.value, dueDateInput.value);
                console.log(createATodoObject(projectInput.value, titleInput.value, descriptionInput.value, dueDateInput.value, priorityList.value));
                // Since frontPage is a secure/private function, 
                // you have to call frontPage.todoListSection to get the todoListSection information.
                // Other wise you could've just used todoListSection.appendChild(...) 
                // instead of frontPage.todoListSection.appendChild(...) 
                frontPage.todoListSection.appendChild(createATodoDom(titleInput.value,priorityList.value, dueDateInput.value));
                frontPage.sidebarSection.appendChild(createAProjectDom(projectInput.value));
                myForm.reset();
                myForm.style.display = 'none';
                alert('Data has been added successfully!');
                // frontPage is a private/secure function hence we have to call  
                // frontPage.frontPageBody.style.filter innstead of just frontPageBody.style.filter
                frontPage.frontPageBody.style.filter = 'blur(0px)';
            }

        });
    }

    addFormData();

    let closeButton = document.createElement('div');
    closeButton.id = 'closeButton';
    closeButton.innerText = 'Close';
    myForm.appendChild(closeButton);

    const closeFormFunction = () => {
        closeButton.addEventListener('click', () => {
            myForm.style.display = 'none';
            frontPage.frontPageBody.style.filter = 'blur(0px)';
            document.getElementById('form').reset();
        });

    };

    closeFormFunction();

    return {myForm};


})();

export default todoForm;

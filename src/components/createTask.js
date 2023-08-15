import data from "../data.js";
/*import // deletehandler
import // edit handler*
*/


const createTask = (userInput) => {
    //Create task item
    const taskContainer = document.createElement('div');
    taskContainer.innerHTML = 'id = ' + `${data.items.length + 1}`;
        

    //Create task item text
    const taskText = document.createElement('p');
    taskText.innerText = userInput;

    //Create edit button
    const taskEditBtn = document.createElement('button');
    taskEditBtn.classList.add = 'editTaskBtn';

    //Create delete button
    const taskDeleteBtn = document.createElement('button');
    taskEditBtn.classList.add = 'deleteTaskBtn';

    //append all together
    taskContainer.append(taskText, taskEditBtn, taskDeleteBtn);
     

    //Event for the edit (i don't remember why put it here).
    //taskEditBtn.addEventListener('click', editHandler);

    //Event for the delete (i don't remember why put it here).
    // taskDeleteBtn.addEventListener('click', delHandler);
    
    return taskContainer; 
};

export default createTask;

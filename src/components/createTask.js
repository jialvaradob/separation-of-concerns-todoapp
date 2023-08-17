import data from "../data.js";
/*import // deletehandler
import // edit handler*
*/


const createTask = (userInput) => {
    debugger
    //Create task item
    const taskContainer = document.createElement('div');
    taskContainer.id = userInput.id;
    console.log(taskContainer.id); 

    //Create task item text
    const taskText = document.createElement('p');
    taskText.innerText = userInput.text;
    console.log(String(taskText)); 

    //Create edit button
    const taskEditBtn = document.createElement('button');
    taskEditBtn.className = 'editTaskBtn';
    taskEditBtn.innerText = 'edit';
    

    //Create delete button
    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.className = 'deleteTaskBtn';
    taskDeleteBtn.innerText = 'delete';
    
    //append all together
    taskContainer.append(taskText, taskEditBtn, taskDeleteBtn);
    
     
    // Trying to use the event bubbling way.

    //Event for the edit

    //taskEditBtn.addEventListener('click', editHandler);

    //Event for the delete
    //taskDeleteBtn.addEventListener('click', deleteHandler);
    
    return taskContainer; 
};

export default createTask;

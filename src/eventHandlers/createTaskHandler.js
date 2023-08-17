import data from '../data.js';
import dom from '../dom.js';
import createTask  from '../components/createTask.js';


// This one just creates the task, depending on the input parameters.
//const value1 = dom.input.value;
const createTaskHandler = function (value) {
    debugger;
    console.log(value);
    // if Empty input field
    if (value === '') {
        alert('Write smth you procrastinator'); // To ensure the user writes something, simple but effective.

        // using input to define the name of the task.
    } else  {
        const newTask = {
            id: data.id++,    //Used this one because the +1 didn't work, gives the next id available
            text: value,    //Simply puts the string value on the text property.
        }

        const newTaskDom = createTask(newTask); // Running builder with the info entered 
        //newTaskDom.taskText.innerText = value;
        dom.taskList.append(newTaskDom); // Adding the built task to the designated div
        dom.input.value = ''; // Return input field back to normal
    }
    return createTaskHandler;
};
    


export default createTaskHandler;
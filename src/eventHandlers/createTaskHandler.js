import data from '../data.js';
import dom from '../dom.js';
import createTask  from '../components/createTask.js';


// This one just creates the task, depending on the input parameters.
const value1 = dom.input.value;
const createTaskHandler = (input) => {
    debugger
    // if Empty input field
    if (dom.input.value === '') {
        alert ('Write smth you procrastinator');
        return;
    // using input to define the name of the task.
    }else {
        const newTask = 
            { 
            id: data.id + 1,
            text: input.value
            };
        
        const newTaskDom = createTask(newTask);
        newTaskDom.taskText.innerText = value1;
        dom.taskList.prepend (newTaskDom);

    }
    return createTaskHandler;

};

export default createTaskHandler;
import dom from '../dom.js';
import createTaskHandler from '../eventHandlers/createTaskHandler.js';

function createTaskListener() {
    dom.submitBtn.addEventListener('click', createTaskHandler);
}


export default createTaskListener;
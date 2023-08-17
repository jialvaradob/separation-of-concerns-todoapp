import dom from '../dom.js';
import createTaskHandler from '../eventHandlers/createTaskHandler.js';

const createTaskListener = function () {
    dom.submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        createTaskHandler(dom.input.value);
});
};

export default createTaskListener;
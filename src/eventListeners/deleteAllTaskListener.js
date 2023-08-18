import dom from '../dom.js';
import deleteAllTaskHandler from '../eventHandlers/deleteAllTaskHandler.js';

const deleteAllTaskListener = () => {
    dom.clearBtn.addEventListener('click', deleteAllTaskHandler);

}

export default deleteAllTaskListener;
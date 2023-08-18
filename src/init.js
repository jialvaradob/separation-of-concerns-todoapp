//All functions

import createTaskListener from "./eventListeners/createTaskListener.js";
import deleteAllTaskListener from "./eventListeners/deleteAllTaskListener.js";
import deleteTaskListener from "./eventListeners/deleteTaskListener.js";
import editTaskListener from "./eventListeners/editTaskListener.js";

createTaskListener();
deleteTaskListener();
editTaskListener();
deleteAllTaskListener();

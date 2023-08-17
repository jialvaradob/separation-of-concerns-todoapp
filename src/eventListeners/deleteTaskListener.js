import deleteTaskHandler from "../eventHandlers/deleteTaskHandler.js";



const divTask = document.getElementById("div-task");

  // Event delegation on the parent.
  const deleteTaskListener = () => {
    divTask.addEventListener("click", deleteTaskHandler);
  };

export default deleteTaskListener;
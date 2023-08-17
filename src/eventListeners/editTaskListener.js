import editTaskHandler from "../eventHandlers/editTaskHandler.js";

const divTask = document.getElementById("div-task");

  // Event delegation on the parent.
  const editTaskListener = () => {
    divTask.addEventListener("click", editTaskHandler);
    //divTask.addEventListener("enter", editTaskHandler);
  };

export default editTaskListener;
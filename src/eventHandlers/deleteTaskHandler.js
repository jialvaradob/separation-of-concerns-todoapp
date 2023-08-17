

const deleteTaskHandler = (event) => {
  debugger
        if (event.target.classList.contains("deleteTaskBtn")) {
          const parentDiv = event.target.closest("div");
          parentDiv.remove();
        }
      };
    

export default deleteTaskHandler;
// This handler recognizes pinpoints the button and then locates the div of the target.
//Then it locates the text inside the p, removes it and then adds a field instead.
//Keeping the values stored, in case the user doesn't change it.


const editTaskHandler = (event) => {

    if (event.target.classList.contains("editTaskBtn")) {
      debugger
      const parentDiv = event.target.closest("div");
      const childP = parentDiv.childNodes[0];
      const storeValue = childP.innerText;
      childP.remove();
      const newEdit = document.createElement('input');
      newEdit.type = 'text';//I tried to do this with .innerHTML but created an input inside.
      newEdit.className = 'editField';
      newEdit.placeholder = storeValue;
      newEdit.innerText = storeValue;
      
      
      parentDiv.prepend(newEdit);

      //Now the button has another class to bypass the first loop.
      event.target.classList.remove("editTaskBtn");
      event.target.classList.add("editingTaskBtn");
     
      
      }else if (event.target.classList.contains("editingTaskBtn")) {
        const parentDiv = event.target.closest("div");
        let inputValue = event.target.previousElementSibling.value.trim();
        
        
        if (inputValue !== "") {
            inputValue = inputValue;
            
        }else {
          inputValue = parentDiv.childNodes[0].placeholder;

        };

        const newEditValue = document.createElement('p');
        newEditValue.innerText = inputValue;
        parentDiv.childNodes[0].replaceWith(newEditValue);
        event.target.classList.remove("editingTaskBtn");
        event.target.classList.add("editTaskBtn");
    };
    
    /*else if (event.target.classList.contains("editingTaskBtn")){
        const parentDiv = event.target.closest("div");
        const storeValue = event.target.previousElementSibling.value; // Trying to keep the value if the user doesn't add anything else
        const newEditValue = document.createElement('p');
        newEditValue.innerText = storeValue;
        
        parentDiv.childNodes[0].replaceWith(newEditValue); 

        event.target.classList.remove("editingTaskBtn");
      event.target.classList.add("editTaskBtn");
      }*/
        //

    

      };
      
    
    


export default editTaskHandler;
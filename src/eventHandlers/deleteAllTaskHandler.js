
const deleteAllTaskHandler = () => {
    debugger
    const container = document.getElementById('div-task');
    const containerChildren = container.children.length;
    
    for (let i = 0; i < containerChildren ; i++){
        container.removeChild(container.firstChild);
        
    }
    return;
};

export default deleteAllTaskHandler;
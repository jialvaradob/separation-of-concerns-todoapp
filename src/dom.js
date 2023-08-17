//All dom elements present in the html file

const dom = {
    submitBtn: document.querySelector('#btn-write'),
    input: document.getElementById('inp-field'),
    clearBtn: document.querySelector('#btn-clear-all'),
    taskList: document.querySelector('#div-task'),
};
console.log(String(dom.submitBtn.value));

export default dom;

/*<body>
<div id = div-container>
    <h2 id = div-title> Todo list </h2>
        <input id = inp-field placeholder = 'Write your tasks here'>
            <button class = 'btn-write'>Submit</button>
        </input>

    <div id = 'div-task'> </div>
        <button id = 'btn-clear-all'></button>
    
</div>
<script type="module" src="./src/init.js"></script>
 

</body>*/
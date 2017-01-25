window.onload =  function(){
    var columnArea = document.getElementById('container');

    var addColumnButton = document.getElementById('add_column');

    function newColumn (){
        columnArea.innerHTML += '<div class="column">' +
            '                           <div class="title_column"><h3>Titre</h3></div>' +
            '                           <input type="text" name="title"/>' +
            '                           <a href="#" id="addTask"><img src="img/add_task.png" alt="add_task"/></a>' +
            '                           <a id="deleteColumn" href="#">Delete</a>' +
            '                   </div>';
    }
    function newTask(){
        this.innerHTML += '<div class="task"></div>'
    }

    addColumnButton.onclick = function(){
        newColumn();
    }
};
window.onload =  function(){
    var columnArea = document.getElementById('container');

    var addColumnButton = document.getElementById('add_column');

    function newColumn (){
        columnArea.innerHTML += '<div class="column"><input type="text" name="title"/><a href="#" id="addTask">Nouveau Post-It</a><a id="deleteColumn" href="#">Delete</a></div>';
    }
    function newTask(){
        this.innerHTML += '<div class="task"></div>'
    }

    addColumnButton.onclick = function(){
        newColumn();
    }
};

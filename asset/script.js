window.onload =  function(){
    var columnArea = document.getElementById('container');
    var column = document.getElementsByClassName('column');

    var addColumnButton = document.getElementById('add_column');
    var addPostitButton = document.getElementById('addTask');

    function newColumn (){
        columnArea.innerHTML += '<div class="column"><input type="text" name="title"/><a href="#" id="addTask">Nouveau Post-It</a><a id="deleteColumn" href="#">Delete</a></div>';
    }
    function newTask(){
        columnArea.innerHTML += '<div class="task">Salut</div>';
        console.log('yo');
    }

    addPostitButton.onclick = function(){
        newTask();
    }

    addColumnButton.onclick = function(){
        newColumn();
    }
};

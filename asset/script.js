window.onload =  function(){
    var columnArea = document.getElementById('container');

    var addColumnButton = document.getElementById('add_column');

    function newColumn (){
        columnArea.innerHTML += '<div class="column">TEST</div>';
    }
    function newTask(){

    }

    addColumnButton.onclick = function(){
        newColumn();
    }
};

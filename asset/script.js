window.onload =  function(){
    console.log("slt");
    var columnArea = document.getElementById('container');

    var addColumnButton = document.getElementById('add_column');

    function newColumn (){
        columnArea.innerHTLM += '<div class="column"></div>';
    }
    function newTask(){

    }

    addColumnButton.onclick = function(){
        newColumn();
    }

};
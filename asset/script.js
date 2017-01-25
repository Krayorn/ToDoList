window.onload =  function(){
    console.log("slt");
    var columnArea = document.getElementById('container');

    var addColumnButton = document.getElementById('add_column');

    function newColumn (){
        columnArea.innerHTML += '<div class="column">yo</div>';
        console.log("yo");
    }
    function newTask(){

    }

    addColumnButton.onclick = function(){
        newColumn();
    }

};

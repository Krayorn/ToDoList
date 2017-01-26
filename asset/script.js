window.onload =  function(){
    var columnArea = document.querySelector('#container');

    var addColumnButton = document.querySelector('#add_column');
    var addPostitButton = document.querySelectorAll('.addTask');

    function addTask(currentDiv){
        currentDiv.innerHTML += '<div>yo</div>';
    }

    function addColumn(){
        columnArea.innerHTML += '<div class="column">' +
            '<input type="text" name="title"/>' +
            '<a href="#" class="addTask"><img class="icon" src="../asset/img/add_task.png"/></a>' +
            '<a href="#" class="deleteColumn" href="#">' +
            '<img class="icon" src="../asset/img/remove_task.png"/>' +
            '</a>' +
            '</div>';
    }

    addColumnButton.onclick = function(){
        addColumn();
    }


    for(var i = 0; i < addPostitButton.length; i++){
        addPostitButton[i].onclick = function () {
            addTask(this.parentElement);
        }
    }
};
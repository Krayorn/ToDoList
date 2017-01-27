window.onload =  function(){
    var columnArea = document.querySelector('#container');

    var addColumnButton = document.querySelector('#add_column');

    function addTask(currentDiv){
        var d=document.createElement("div");
        d.classList.add("tasks");
        currentDiv.appendChild(d);
    }

    function addColumn(){
        columnArea.innerHTML += '<div class="column">' +
            '<input type="text" name="title"/>' +
            '<a href="#" class="addTask"><img class="icon" src="../asset/img/add_task.png"/></a>' +
            '<a href="#" class="deleteColumn" href="#">' +
            '<img class="icon icon_border_left" src="../asset/img/remove_task.png"/>' +
            '</a>' +
            '</div>';
            addPostitButton = document.querySelectorAll('.addTask');
            deleteColumnButton = document.querySelectorAll('.deleteColumn');
            refresh_for();
    }

    function deleteColumn(currentDiv){
        columnArea.removeChild(currentDiv);
    }

    addColumnButton.onclick = function(){
        addColumn();
    }

function refresh_for(){
    for(var i = 0; i < addPostitButton.length; i++){
        addPostitButton[i].onclick = function () {
            addTask(this.parentElement);
        }
    }
    for(var i = 0; i < deleteColumnButton.length; i++){
        deleteColumnButton[i].onclick = function(){
            deleteColumn(this.parentElement);
        }
    }
}
};
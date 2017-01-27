window.onload =  function(){
    var columnArea = document.querySelector('#container');
    var addColumnButton = document.querySelector('#add_column');

    function addTask(currentDiv){
        var d=document.createElement("div");
        d.classList.add("tasks");
        currentDiv.appendChild(d);
        d.innerHTML +=  '<span class="titletask">Title</span>' +
            '<input class="hide_title" type="text"/><input class="tasktitle_button" type="submit"/>';
    }

    function addColumn(){
        columnArea.innerHTML += '<div class="column">' +
            '<span class="titlecolumn">Title</span>' +
            '<input class="hide_input" type="text" name="title"/><input class="hide_button" type="submit"/>' +
            '<a class="addTask"><img class="icon" src="../asset/img/add_task.png"/></a>' +
            '<a class="deleteColumn"><img class="icon icon_border_left" src="../asset/img/remove_task.png"/></a>' +
            '</div>';
        addPostitButton = document.querySelectorAll('.addTask');
        deleteColumnButton = document.querySelectorAll('.deleteColumn');
        columntitle = document.querySelectorAll('.titlecolumn');
        refresh_for();
    }

    function deleteColumn(currentDiv){
        columnArea.removeChild(currentDiv);
    }

    function changetitle(currentDiv){
        element = currentDiv ;
        var myInput = element.childNodes[1];
        var myButton = element.childNodes[2];
        myInput.style.display= 'inline';
        myButton.style.display= 'inline';
        myButton.onclick = function(){
            if (myInput.value.length == ''){
                element.childNodes[0].innerHTML = 'Title';
            }
            else{
                element.childNodes[0].innerHTML = myInput.value;
            }
            myInput.style.display= 'none';
            myButton.style.display= 'none';
        }
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
        for(var i = 0; i < columntitle.length; i++){
            columntitle[i].onclick = function(){
                changetitle(this.parentElement);
            }
        }
    }
};
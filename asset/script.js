window.onload =  function(){
    var columnArea = document.querySelector('#container');
    var addColumnButton = document.querySelector('#add_column');



    function addColumn(){
        columnArea.innerHTML += '<div class="column">' +
            '<span class="title_column">Title</span>' +
            '<input class="hide_input" type="text" name="title"/><input class="hide_button" type="submit"/>' +
            '<a class="addTask"><img class="icon" src="../asset/img/add_task.png"/></a>' +
            '<a class="deleteColumn"><img class="icon icon_border_left" src="../asset/img/remove_task.png"/></a>' +
            '</div>';
        addPostitButton = document.querySelectorAll('.addTask');
        deleteColumnButton = document.querySelectorAll('.deleteColumn');
        columntitle = document.querySelectorAll('.title_column');
        refresh_for();
    }

    function addTask(currentDiv){
        var d=document.createElement("div");
        d.classList.add("tasks");
        currentDiv.appendChild(d);
        d.innerHTML +=  '<div class="taskTitle"></div>' +
            '<input class="hide_title" placeholder="Titre" type="text"/>' +
            '<div class="taskDescription"></div>' +
            '<textarea class="textarea" placeholder="Description..."></textarea>' +
            '<input class="task_button" type="submit"/>';

        task_button = document.querySelectorAll('.task_button');
        refresh_for();
    }

    function deleteColumn(currentDiv){
        columnArea.removeChild(currentDiv);
    }

    function publishTask(currentDiv){
        var title = currentDiv.childNodes[1];
        var description = currentDiv.childNodes[3];
        var submitButton = currentDiv.childNodes[4];

        if (title.value.length > 0){
            currentDiv.childNodes[0].innerHTML = title.value;
            if(description.value.length > 0){
                currentDiv.childNodes[2].innerHTML = description.value;
            }
            title.style.display= 'none';
            description.style.display= 'none';
            submitButton.style.display= 'none';
        }
    }

    function changetitle(currentDiv){
        var myInput = currentDiv.childNodes[1];
        var myButton = currentDiv.childNodes[2];
        myInput.style.display= 'inline';
        myButton.style.display= 'inline';
        myButton.onclick = function(){
            if (myInput.value.length == 0){
                currentDiv.childNodes[0].innerHTML = 'Title';
            }
            else{
                currentDiv.childNodes[0].innerHTML = myInput.value;
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
        for(var i = 0; i < task_button.length; i++){
            task_button[i].onclick = function(){
                publishTask(this.parentElement);
            }
        }

    }
};

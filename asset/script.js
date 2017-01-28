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
        d.innerHTML +=  '<div class="taskTitle">Titre de la tâche</div>' +
            '<input class="hide_title" placeholder="Titre" type="text"/>' +
            '<input class="input_title_task" value="Valider" type="submit"/>' +
            '<div class="taskDescription">Description de la tâche</div>' +
            '<textarea class="textarea" placeholder="Description..."></textarea>' +
            '<input class="input_textarea" value="Valider" type="submit"/>';

        taskTitle = document.querySelectorAll('.taskTitle');
        taskDescription = document.querySelectorAll('.taskDescription');
        refresh_for();
    }

    function deleteColumn(currentDiv){
        columnArea.removeChild(currentDiv);
    }

    function publishTitleTask(currentDiv){
        var titleTask = currentDiv.childNodes[1];
        var titleTaskButton = currentDiv.childNodes[2];
        titleTask.style.display= 'inline';
        titleTaskButton.style.display= 'inline';
        titleTaskButton.onclick = function(){
            if (titleTask.value.length > 0){
                currentDiv.childNodes[0].innerHTML = titleTask.value;
            }
            else{
                currentDiv.childNodes[0].innerHTML = 'Titre de la tâche';
            }
            titleTask.style.display= 'none';
            titleTaskButton.style.display= 'none';
        }
    }
    function publishDescriptionTask(currentDiv){
        var descriptionTask = currentDiv.childNodes[4];
        var descriptionTaskButton = currentDiv.childNodes[5];
        descriptionTask.style.display= 'inline';
        descriptionTaskButton.style.display= 'inline';
        descriptionTaskButton.onclick = function(){
            if (descriptionTask.value.length > 0){
                currentDiv.childNodes[3].innerHTML = descriptionTask.value;
            }
            else{
                currentDiv.childNodes[3].innerHTML = 'Description de la tâche';
            }
            descriptionTask.style.display= 'none';
            descriptionTaskButton.style.display= 'none';
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
        for(var i = 0; i < taskTitle.length; i++){
            taskTitle[i].onclick = function(){
                publishTitleTask(this.parentElement);
            }
        }
        for(var i = 0; i < taskDescription.length; i++){
            taskDescription[i].onclick = function(){
                publishDescriptionTask(this.parentElement);
            }
        }


    }
};

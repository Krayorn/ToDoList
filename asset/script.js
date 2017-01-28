window.onload =  function(){
    var columnArea = document.querySelector('#container');
    var addColumnButton = document.querySelector('#add_column');


    function addColumn(){
        columnArea.innerHTML += '<div class="column">' +
            '<span class="title_column">Title</span>' +
            '<input class="none" type="text" name="title"/><input class="none" type="submit"/>' +
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
            '<input class="hide_title none" placeholder="Titre" type="text"/>' +
            '<input class="none" value="Valider" type="submit"/>' +
            '<div class="taskDescription"><img src="../asset/img/empty.png"/></div>' +
            '<textarea class="textarea none" placeholder="Description..."></textarea>' +
            '<input class="none" value="Valider" type="submit"/>';

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
        titleTask.classList.remove('none');
        titleTaskButton.classList.remove('none');
        titleTaskButton.onclick = function(){
            if (titleTask.value.length > 0){
                currentDiv.childNodes[0].innerHTML = titleTask.value;
            }
            else{
                currentDiv.childNodes[0].innerHTML = 'Titre de la tâche';
            }
            titleTask.classList.add('none');
            titleTaskButton.classList.add('none');
        }
    }
    function publishDescriptionTask(currentDiv){
        var descriptionTask = currentDiv.childNodes[4];
        var descriptionTaskButton = currentDiv.childNodes[5];
        descriptionTask.classList.remove('none');
        descriptionTaskButton.classList.remove('none');
        descriptionTaskButton.onclick = function(){
            if (descriptionTask.value.length > 0){
                currentDiv.childNodes[3].innerHTML = '<img src="../asset/img/edit.png"/>'+ descriptionTask.value;
            }
            else{
                currentDiv.childNodes[3].innerHTML = '<img src="../asset/img/empty.png"/>Description';
            }
            descriptionTask.classList.add('none');
            descriptionTaskButton.classList.add('none');
        }
    }


    function changetitle(currentDiv){
        var myInput = currentDiv.childNodes[1];
        var myButton = currentDiv.childNodes[2];
        myInput.classList.remove('none');
        myButton.classList.remove('none');
        myButton.onclick = function(){
            if (myInput.value.length == 0){
                currentDiv.childNodes[0].innerHTML = 'Title';
            }
            else{
                currentDiv.childNodes[0].innerHTML = myInput.value;
            }
            myInput.classList.add('none');
            myButton.classList.add('none');
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

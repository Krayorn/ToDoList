window.onload =  function(){
    var columnArea = document.querySelector('#container');
    var addColumnButton = document.querySelector('#add_column');

// this function add a new column 
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

// this function add a new task in the right column
    function addTask(currentDiv){
        var d=document.createElement("div");
        d.classList.add("tasks");
        currentDiv.appendChild(d);
        d.innerHTML +=  '<div class="taskTitle">Titre de la tâche</div>' +
            '<input class="hide_title none" placeholder="Titre" type="text"/>' +
            '<input class="none" value="Valider" type="submit"/>' +
            '<div class="taskDescription"><img src="../asset/img/empty.png"/></div>' +
            '<textarea cols="10" rows="5" class="textarea none" placeholder="Description..."></textarea>' +
            '<input class="none" value="Valider" type="submit"/>';

        taskTitle = document.querySelectorAll('.taskTitle');
        taskDescription = document.querySelectorAll('.taskDescription');
        refresh_for();
    }

// this function delete a column and all the task in the column
    function deleteColumn(currentDiv){
        columnArea.removeChild(currentDiv);
    }

// this function change the title of a task
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

// this function change the description of a task
    function publishDescriptionTask(currentDiv){
        currentDiv.classList.add('zoom')
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

// this function change the title of a column
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

// this function is called when the user creat a new column or task, she actualise the variable wich take the number of button for delete add or change something
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

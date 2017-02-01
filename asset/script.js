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
        refresh_for_column();
    }

// this function add a new task in the right column
    function addTask(currentDiv){
        var d=document.createElement("div");
        d.classList.add("tasks");
        currentDiv.appendChild(d);
        d.innerHTML +=  '<div class="taskTitle">Titre de la tâche</div>' +
            '<input class="hide_title none" placeholder="Titre" type="text"/>' +
            '<input class="none" value="Valider" type="submit"/>' +
            '<img src="../asset/img/dezoom.png" class=" dezoomButton none" />' +
            '<img src="../asset/img/zoom.png" class="zoomButton" />' +
            '<img class="empty_task" src="../asset/img/empty.png"/>' +
            '<img class="empty_task none" src="../asset/img/edit.png"/>' +
            '<div class="taskDescription none">Description</div>' +
            '<textarea cols="100" rows="10" class="textarea none" placeholder="Description..."></textarea>' +
            '<input class="none" value="Valider" type="submit"/>'+
            '<img src="../asset/img/delete_task.png" class="deleteTask" />';


        taskTitle = document.querySelectorAll('.taskTitle');
        zoomButton = document.querySelectorAll('.zoomButton');
        dezoomButton = document.querySelectorAll('.dezoomButton');
        deleteTasks = document.querySelectorAll('.deleteTask');
        tasksDescription = document.querySelectorAll('.taskDescription');
        refresh_for_tasks();
    }

// this function delete a column and all the task in the column
    function deleteColumn(currentDiv){
        columnArea.removeChild(currentDiv);
    }

    function zoomTasks(currentTask){
        currentTask.classList.add('zoom');
        currentTask.classList.remove('tasks');
        currentTask.childNodes[3].classList.remove('none');
        currentTask.childNodes[4].classList.add('none');
        currentTask.childNodes[7].classList.remove('none');
        currentTask.childNodes[10].classList.add('none');

    }

    function dezoomTask(currentTask){
        currentTask.classList.remove('zoom');
        currentTask.classList.add('tasks');
        currentTask.childNodes[3].classList.add('none');
        currentTask.childNodes[4].classList.remove('none');
        currentTask.childNodes[7].classList.add('none');
        currentTask.childNodes[10].classList.remove('none');
    }

    function deleteTask(currentTask){
        currentTask.parentElement.removeChild(currentTask);
    }

// this function change the title of a task
    function changeTitleTask(currentDiv){
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

    function changeDescriptionTask(currentTask){
        var descriptionTask = currentTask.childNodes[7];
        var textarea = currentTask.childNodes[8];
        var descriptionTaskButton = currentTask.childNodes[9];
        textarea.classList.remove('none');
        descriptionTaskButton.classList.remove('none');
        descriptionTaskButton.onclick = function(){
            if(textarea.value == ""){
                descriptionTask.innerHTML = "Description";
                currentTask.childNodes[5].classList.remove('none');;
                currentTask.childNodes[6].classList.add('none');;
            }
            else{
                descriptionTask.innerHTML = textarea.value;
                currentTask.childNodes[6].classList.remove('none');;
                currentTask.childNodes[5].classList.add('none');;
            }
            textarea.classList.add('none');
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
    function refresh_for_column(){
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
    function refresh_for_tasks(){
        for(var i = 0; i < taskTitle.length; i++){
            taskTitle[i].onclick = function(){
                changeTitleTask(this.parentElement);
            }
        }
        for(var i = 0; i < zoomButton.length; i++){
            zoomButton[i].onclick = function(){
                zoomTasks(this.parentElement);
            }
        }
        for(var i = 0; i < dezoomButton.length; i++){
            dezoomButton[i].onclick = function(){
                dezoomTask(this.parentElement);
            }
        }
        for(var i = 0; i < deleteTasks.length; i++){
            deleteTasks[i].onclick = function(){
                deleteTask(this.parentElement);
            }
        }
        for(var i = 0; i < tasksDescription.length; i++){
            tasksDescription[i].onclick = function(){
                changeDescriptionTask(this.parentElement);
            }
        }
    }
};
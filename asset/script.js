window.onload =  function(){
    var columnArea = document.querySelector('#container');
    var addColumnButton = document.querySelector('#add_column');
    var arraycolumn = [];
    var arraytasks = [];
    localStorage.setItem("compteur", "0");
    var compteurColumns = 0;
    var columns = JSON.parse(localStorage.getItem("columns"));
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    
    function saved_column(){
        for(i = 0; i < columns.length;i++){
                compteurColumns++;
                columnArea.innerHTML += '<div class="column">' +
                '<span class="title_column">'+ columns[i].title +'</span>' +
                '<input class="none input_text" type="text" name="title" value="'+ columns[i].title +'"/>' +
                '<input class="none" type="submit"/>' +
                '<div class="all_icons_column">' +
                    '<a href="#" class="addTask icon"><img src="../asset/img/add_task.png"/></a>' +
                    '<a href="#" class="deleteColumn icon"><img src="../asset/img/remove_column.png"/></a>' +
                '</div>' +
                '<input class="none" type="text" name="idColumn" value="'+compteurColumns+'">' +
            '</div>' ;
            if(tasks){
                for (j = 0; j < tasks.length; j++){
                    if ( tasks[j].id == columns[i].id){
                        columnArea.childNodes[i+1].innerHTML +=  '<div class="tasks">'+
                                                    '<div class="taskTitle">' + tasks[j].title + '</div>' +
                                                    '<input class="hide_title none" placeholder="Titre" type="text"/>' +
                                                    '<input class="none input_text" value="Valider" type="submit"/>' +
                                                    '<div class="all_info_task">' +
                                                        '<div class="all_icons_task">' +
                                                            '<a href="#"  class="icon dezoomButton none"> <img src="../asset/img/dezoom.png"/></a>' +
                                                            '<a href="#" class="icon zoomButton"><img src="../asset/img/zoom.png"/></a>' +
                                                            '<a href="#" class="empty_task icon" ><img  src="../asset/img/empty.png"/></a>' +
                                                            '<a href="#" class="empty_task none icon"><img  src="../asset/img/edit.png"/></a>' +
                                                            '<a href="#" class="icon  deleteTask"><img src="../asset/img/remove_task.png"/></a>'+
                                                        '</div>' +
                                                        '<span class="title_column none">Titre de la colonne</span>' +
                                                        '<div class="taskDescription none">' + tasks[j].description + '</div>' +
                                                        '<textarea cols="100" rows="10" class="textarea none" placeholder="Description..."></textarea>' +
                                                        '<input class="none" value="Valider" type="submit"/>'+
                                                    '</div>' +
                                                    '</div>';

                        taskTitle = document.querySelectorAll('.taskTitle');
                        zoomButton = document.querySelectorAll('.zoomButton');
                        dezoomButton = document.querySelectorAll('.dezoomButton');
                        deleteTasks = document.querySelectorAll('.deleteTask');
                        tasksDescription = document.querySelectorAll('.taskDescription');
                        var array = {id:compteurColumns, title:tasks[j].title, description:tasks[j].description};
                        arraytasks.push(array);
                        localStorage.setItem("tasks", JSON.stringify(arraytasks));
                        refresh_for_tasks();
                    }
                }
            }
            localStorage.setItem("compteur", compteurColumns);
            addPostitButton = document.querySelectorAll('.addTask');
            deleteColumnButton = document.querySelectorAll('.deleteColumn');
            columntitle = document.querySelectorAll('.title_column');
            var array = {id:compteurColumns, title:columns[i].title};
            arraycolumn.push(array);
            localStorage.setItem("columns", JSON.stringify(arraycolumn));
            refresh_for_column(); 
        }
    }


 if(columns){
    saved_column();
 }


// this function add a new column
    function addColumn(){
        compteurColumns++;
        columnArea.innerHTML += '<div class="column">' +
                '<span class="title_column">Cliquez ici pour changer le titre !</span>' +
                '<input class="none input_text" type="text" name="title" value="Titre de la colonne"/>' +
                '<input class="none" type="submit"/>' +
                '<div class="all_icons_column">' +
                    '<a href="#" class="addTask icon"><img src="../asset/img/add_task.png"/></a>' +
                    '<a href="#" class="deleteColumn icon"><img src="../asset/img/remove_column.png"/></a>' +
                '</div>' +
                '<input class="none" type="text" name="idColumn" value="'+compteurColumns+'">' +
            '</div>' ;
        addPostitButton = document.querySelectorAll('.addTask');
        deleteColumnButton = document.querySelectorAll('.deleteColumn');
        columntitle = document.querySelectorAll('.title_column');
        refresh_for_column();
        localStorage.setItem("compteur", compteurColumns);
        var array = {id:compteurColumns, title:"Titre de la colonne"};
        arraycolumn.push(array);
        localStorage.setItem("columns", JSON.stringify(arraycolumn));
    }

// this function add a new task in the right column
    function addTask(currentDiv){
        var parent = currentDiv.parentNode;
        var d=document.createElement("div");
        d.classList.add("tasks");
        parent.appendChild(d);
        d.innerHTML +=  '<div class="taskTitle">Titre de la tâche</div>' +
            '<input class="hide_title none" placeholder="Titre" type="text"/>' +
            '<input class="none input_text" value="Valider" type="submit"/>' +
            '<div class="all_info_task">' +
                '<div class="all_icons_task">' +
                    '<a href="#"  class="icon dezoomButton none"> <img src="../asset/img/dezoom.png"/></a>' +
                    '<a href="#" class="icon zoomButton"><img src="../asset/img/zoom.png"/></a>' +
                    '<a href="#" class="empty_task icon" ><img  src="../asset/img/empty.png"/></a>' +
                    '<a href="#" class="empty_task none icon"><img  src="../asset/img/edit.png"/></a>' +
                    '<a href="#" class="icon  deleteTask"><img src="../asset/img/remove_task.png"/></a>'+
                '</div>' +
                '<span class="title_column none">Titre de la colonne</span>' +
                '<div class="taskDescription none">Description</div>' +
                '<textarea cols="100" rows="10" class="textarea none" placeholder="Description..."></textarea>' +
                '<input class="none" value="Valider" type="submit"/>'+
            '</div>';

        taskTitle = document.querySelectorAll('.taskTitle');
        zoomButton = document.querySelectorAll('.zoomButton');
        dezoomButton = document.querySelectorAll('.dezoomButton');
        deleteTasks = document.querySelectorAll('.deleteTask');
        tasksDescription = document.querySelectorAll('.taskDescription');
        refresh_for_tasks();
        var array = {id:parent.childNodes[4].value, title:"Titre de la tâche", description:"Description"};
        arraytasks.push(array);
        localStorage.setItem("tasks", JSON.stringify(arraytasks));
    }

// this function delete a column and all the task in the column
    function deleteColumn(currentDiv){
        var compteur = currentDiv.parentNode.childNodes[4].value;
        for(i=0; i < arraycolumn.length; i++){
            if(arraycolumn[i].id == compteur){
                delete arraycolumn[i];
            }
        }
        for (j=0; j < arraytasks.length; j++){
            if(arraytasks[j].id == compteur){
                delete arraytasks[j];
            }
        }
        arraycolumn = arraycolumn.filter(function(n){ return n != undefined }); 
        localStorage.setItem("columns", JSON.stringify(arraycolumn));
        arraytasks = arraytasks.filter(function(n){ return n != undefined }); 
        localStorage.setItem("tasks", JSON.stringify(arraytasks));
        compteurColumns--;
        localStorage.setItem("compteur", compteurColumns);
        columnArea.removeChild(currentDiv.parentNode);
    }

    function zoomTasks(currentTask){
        currentTask.parentNode.classList.add('zoom');
        currentTask.classList.remove('tasks');
        currentTask.childNodes[1].classList.add('none');
        currentTask.childNodes[3].classList.add('none');
        currentTask.childNodes[0].classList.remove('none');
        currentTask.childNodes[2].classList.remove('none');
        currentTask.parentNode.childNodes[1].classList.remove('none');
        currentTask.parentNode.childNodes[2].classList.remove('none');
        currentTask.parentNode.childNodes[1].innerHTML = currentTask.parentNode.parentNode.parentNode.childNodes[1].value;

        if(currentTask.parentNode.childNodes[2].innerHTML == '' ||
            currentTask.parentNode.childNodes[2].innerHTML == 'Description'){
            currentTask.childNodes[2].classList.remove('none');
            currentTask.childNodes[3].classList.add('none');
        }else{
            currentTask.childNodes[3].classList.remove('none');
            currentTask.childNodes[2].classList.add('none');
        }

    }

    function dezoomTask(currentTask){
        currentTask.parentNode.classList.remove('zoom');
        currentTask.childNodes[0].classList.add('none');
        currentTask.childNodes[1].classList.remove('none');
        currentTask.childNodes[2].classList.remove('none');
        currentTask.childNodes[4].classList.remove('none');
        currentTask.parentNode.childNodes[1].classList.add('none');

        if(currentTask.parentNode.childNodes[2].innerHTML == 'Description'){
            currentTask.childNodes[2].classList.remove('none');
            currentTask.childNodes[3].classList.add('none');
        }else{
            currentTask.childNodes[3].classList.remove('none');
            currentTask.childNodes[2].classList.add('none');
        }
        currentTask.parentNode.childNodes[2].classList.add('none');
    }

    function deleteTask(currentTask){
        var currentColumnId = currentTask.parentElement.parentElement.parentElement.childNodes[4].value;
        var currentTaskTitle = currentTask.parentElement.parentElement.childNodes[0].innerText;
        var currentTaskDescription = currentTask.parentElement.childNodes[2].innerText;
        for(i=0; i < arraytasks.length; i++){
            if(arraytasks[i].id == currentColumnId && arraytasks[i].title == currentTaskTitle && arraytasks[i].description == currentTaskDescription){
                delete arraytasks[i];
                break;
            }
        }
        arraytasks = arraytasks.filter(function(n){ return n != undefined }); 
        localStorage.setItem("tasks", JSON.stringify(arraytasks));
        currentTask.parentElement.parentNode.remove();
    }

// this function change the title of a task
    function changeTitleTask(currentDiv){
        var titleTask = currentDiv.childNodes[1];
        var titleTaskButton = currentDiv.childNodes[2];
        titleTask.classList.remove('none');
        titleTaskButton.classList.remove('none');
        titleTaskButton.onclick = function(){
            var currentColumnId = currentDiv.parentElement.childNodes[4].value;
            var currentTaskDescription = currentDiv.childNodes[3].childNodes[2].innerText;
            for(i=0; i < arraytasks.length; i++){
                if(arraytasks[i].id == currentColumnId && arraytasks[i].title == currentDiv.childNodes[0].innerText && arraytasks[i].description == currentTaskDescription){
                    delete arraytasks[i];
                    break;
                }
            }
            if (titleTask.value.length > 0){
                currentDiv.childNodes[0].innerHTML = titleTask.value;
                var array = {id:currentColumnId, title:titleTask.value, description:currentTaskDescription};
            }
            else{
                currentDiv.childNodes[0].innerHTML = 'Titre de la tâche';
                var array = {id:currentColumnId, title:"Titre de la tâche", description:currentTaskDescription};
            }
            arraytasks.push(array);
            arraytasks = arraytasks.filter(function(n){ return n != undefined }); 
            localStorage.setItem("tasks", JSON.stringify(arraytasks));
            titleTask.classList.add('none');
            titleTaskButton.classList.add('none');
        }
    }

    function changeDescriptionTask(currentTask){
        var descriptionTask = currentTask.childNodes[2];
        var textarea = currentTask.childNodes[3];
        var descriptionTaskButton = currentTask.childNodes[4];
        textarea.classList.remove('none');
        descriptionTaskButton.classList.remove('none');
        descriptionTaskButton.onclick = function(){
            var currentColumnId = currentTask.parentElement.parentElement.childNodes[4].value;
            var currentTaskTitle = currentTask.parentElement.childNodes[0].innerText;
            for(i=0; i < arraytasks.length; i++){
                if(arraytasks[i].id == currentColumnId && arraytasks[i].title == currentTaskTitle && arraytasks[i].description == descriptionTask.innerText){
                    delete arraytasks[i];
                    break;
                }
            }
            if(textarea.value == ""){
                descriptionTask.innerHTML = "Description";
                var array = {id:currentColumnId, title:currentTaskTitle, description:"Description"};
                currentTask.childNodes[4].classList.remove('none');
                currentTask.childNodes[3].classList.add('none');
            }
            else{
                descriptionTask.innerHTML = textarea.value;
                var array = {id:currentColumnId, title:currentTaskTitle, description:textarea.value};
                currentTask.childNodes[3].classList.remove('none');
                currentTask.childNodes[4].classList.add('none');
            }
            arraytasks.push(array);
            arraytasks = arraytasks.filter(function(n){ return n != undefined }); 
            localStorage.setItem("tasks", JSON.stringify(arraytasks));
            textarea.classList.add('none');
            descriptionTaskButton.classList.add('none');
        }
    }

// this function change the title of a column
    function changetitle(currentDiv){
        var compteur = currentDiv.childNodes[4].value;
        var myInput = currentDiv.childNodes[1];
        var myButton = currentDiv.childNodes[2];
        myInput.classList.remove('none');
        myButton.classList.remove('none');
        myButton.onclick = function(){
             for(i=0; i < arraycolumn.length; i++){
                if(arraycolumn[i].id == compteur){
                    delete arraycolumn[i];
                }
            }
            if (myInput.value.length == 0){
                currentDiv.childNodes[0].innerHTML = 'Title';
                var array = {id:compteur, title:"Title"};
            }
            else{
                currentDiv.childNodes[0].innerHTML = myInput.value;
                var array = {id:compteur, title:myInput.value};
            }
            arraycolumn.push(array);
            arraycolumn = arraycolumn.filter(function(n){ return n != undefined }); 
            localStorage.setItem("columns", JSON.stringify(arraycolumn));
            myInput.classList.add('none');
            myButton.classList.add('none');
        }
        refresh_for_tasks();
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
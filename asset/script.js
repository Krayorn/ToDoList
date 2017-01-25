window.onload =  function(){
    var columnArea = document.querySelector('#container');

    var addColumnButton = document.querySelector('#add_column');
    var addPostitButton = document.querySelectorAll('.addTask');

	for(var i = 0; i < addPostitButton.length; i++){
        addPostitButton[i].onclick = function(){
           this.parentElement.innerHTML += '<div>yo</div>';
        }
	}

    addColumnButton.onclick = function(){
        columnArea.innerHTML += '<div class="column"><input type="text" name="title"/><a href="#" class="addTask">Nouveau Post-It</a><a href="#" class="deleteColumn" href="#">Delete</a></div>';
    }
};

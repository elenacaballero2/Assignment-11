


$(document).ready(function(){
	
	$('button').click(function newTask() {
		var inputItem = document.getElementById("addTask").value;
		var i = document.createTextNode(inputItem);
		var newItem = document.createElement("li");
		newItem.appendChild(i);
		document.getElementById("myList").appendChild(newItem);
		
	});

	

	$('ul').on('dblclick', 'li', function(){
    	$(this).hide("quick");
    });

});
 	
    




function object(title,task,location){

	this.title=title;
	this.task=task;
	this.location=location;
}

function chkVal(){

	var taskslist=localStorage.getItem("tasks");

	if (taskslist !== null) {

		taskslist= JSON.parse(taskslist);

	}else{

		taskslist=[];
	}
	var title=document.getElementById("title").value;
	var task=document.getElementById("task").value;
	var location=document.getElementById("location").value;
	alert(title+task+location);

	var obj1=new object(title,task,location);

	taskslist.push(obj1);

	localStorage.setItem("tasks", JSON.stringify(taskslist));
	alert("done");
}
/*function view(){
var listview=JSON.parse(localStorage.getItem("tasks"));
	//debugger;
	var html="<div class='tasks'>";
	html+="TASk:"+listview[0].title;
	html+="</div>";

document.getElementById('view').innerHTML=html;
	alert("done view")
}*/
function view(){
var listview=JSON.parse(localStorage.getItem("tasks"));

alert(listview.length);
var index=listview.length-1;
alert("yes");
while(index < listview.length && index !== -1){
var html="<div class='tasks'>";
html+=listview[index].title;
html+="<span class='remove' '"+index+"'>close</span>";
html+="</div>";

document.getElementById('view').innerHTML+=html;

index--;
}
var remove=document.getElementsByClassName('remove');
for(var i=0; i<listview.length;i++){

	remove[i].addEventListener("click",close);

};
}
function close(){

	var id=this.getAttribute('id');
	var taskslist=JSON.parse(localStorage.getItem("tasks"));
	taskslist.splice(id,1);
	localStorage.setItem("tasks", JSON.stringify(taskslist));
	window.location.href ="file:///D:/E/work/shahab_4070/view.html";
}





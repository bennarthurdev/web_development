/**REDUCE GLOBAL SCOPE VARS **/
//antipatterns
function sum(x , y){	
	result = x + y;// create a implicity var
	//implicity var are in really, propities of global object
	return result;
}
function foo(){
	var a = b = 0; // b have global scop
}
//good pattern:
function sum_good(x,y){
	var result = x+y;//local scope
	return result;
}
function foo_good(){
	var a, b; //local scope
	a = b = 0;
}



//ACCSES GLOBAL OBJECT

var global = (function(){
	return this;
}());


//Single var pattern
function modifyStyle(){
	var element = document.getElementById("result"),
		style = el.style,
		colors = {
			'white':'#fff',
			'gray':'f2f2',
		}
	//set a color
}

//Hoisting
myname = "Global";
function func(){
	//var myname; -> var myname = undefined;
	alert(myname);//out:"UNDEFINED"
	myname = "local";
	alert(myname);//out:"LOCAL"
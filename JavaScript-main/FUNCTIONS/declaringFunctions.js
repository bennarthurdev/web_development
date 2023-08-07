//Declaração de função
function helloWorld(){
    console.log('Hello World!');
}                                                                                                                                                                                                                                                                                             
//First-class objects(Objetos de primeira classe)
//Arrow function
const iAmData = () => {
    console.log("Hello, I am data!");
}
// functions can execute other functions received as arg
function receiveFunction(func){
    func();
}
//As a method of object
const obj = {
    method : function(){
        console.log("Method called with sucssess!");
    }
}
// As a Method with shortcut
const obj2 = {
    method2(){
        console.log("Method with shortcut called with sucesses!");
    }
}
obj2.method2();












//return sum between a and b
function sum(a,b){
    return a+b;
}
//return objects
function createPerson(name, lastname){
    return {name, lastname};
}
const p1 = createPerson('Benn' , 'Amaral');
console.log(p1);
//is the same input of
const p2 = {
    name:'Benn',
    lastname:'Amaral'
}
console.log(p2)
//return somatory
function createSomatory(somatory){
    
    return function(x){
        return x + somatory;
    };
}
//Cloujures
const two = createSomatory(2); //remember scope of createSomatory() object
const three = createSomatory(3);
const four = createSomatory(4);

//calling functions
/*
console.log(two(2));
console.log(three(3));
console.log(four(4));*/
//console.log(sum(2,5));

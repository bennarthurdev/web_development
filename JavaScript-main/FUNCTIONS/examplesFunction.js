//Use for read props of objects
const object = {
    prop1 : "A name",
    prop2 : "A age" , 
    prop3 : function(){
        return "A method" //return primitive value, string type
    }
}
//Reading this object trough a function
function readObject(obj){
    for(var prop in obj){
        console.log(`${prop} have a value as a : ${obj[prop]} with type: ${typeof(obj[prop])}`);
    }
}
//readObject(object);

//Functions also can be used to implement math operations
//In this case, the parameters are a list with 3 operators
//This parameters are necessary to calculate the root of this equation
function RootOfSecondDegreeEquations(a,b,c){
    //Delta
    function calculateDeltaAndRoot(a,b,c){
        var delta = b**2 + ((-4) * a * c)
        var rootDelta = Math.sqrt(delta);
        return  {delta: delta, rootDelta: rootDelta};
    }
    console.log(calculateDeltaAndRoot(a,b,c));
}
//RootOfSecondDegreeEquations(1,2,0);//input: 4 , 2 

//Usage for implment recursive functions
//let's create a fatorial calculator by using recursivity javascript
function fatorial(n){
    if (n <= 1) {return 1};
    return n * fatorial(n-1);
  
}
//const fat = fatorial(1);


//Another way

function factorize(factorial){
    if(factorial == 0 | factorial == 1) {
        return 1
    }
    else{
        var result = factorial;
        while(factorial >= 1 ){

            if(factorial-1 == 0) {
                break
            };

            result = result * (factorial - 1);

            factorial = factorial-1;

            //DEBUG: console.log(factorial + ' ' +  result);
    };
    return(result);
    }
  
    
    
    
 }
console.log(factorize(6));
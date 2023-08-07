//arguments 
function myFunc(){
    //this functi;on dont receive any parameter
    console.log(arguments)
    //but we can call  with arguments in main
}

//Default Values Arguments
myFuncWithDefaultValues = function (a , b = 0 , c = 0){
    console.log(`${a}x²+${b}x+${c} = f(x)`);
}

//Argumentos via desestruturação
function destruturingFunc({data1 , data2 , data3, data4}){
    console.log(...arguments);
}

//Executor e variáveis locais
function main(){
    
    const newObj = {
        data1 : 'string' , 
        data2 : 0,
        data3 : true,
        data4 : [
            'arrEle1' , 'arrEle2'
        ]
    }
    myFunc('argument 1' , 2 , {object3_1 : 'value1' , object3_2:'value2'}, 'etc');
}

main();

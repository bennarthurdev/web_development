//Example with a game

hero = {
    mana : 1000 ,
    skill : 45
}
const func1 = () => {
    console.log('Cuspir bola de fogo');
    hero.mana -= 5
}
const func2 = () =>{
    console.log('Skill !')
    hero.skill -= 1
    console.log(`now you have ${hero.skill} skills to use!`);
}
function main(func1 , func2 ){

    let clickOnButton = true;
    let clickOnButton2 = true;
    if(clickOnButton == true ){
        func1();
    }
    if(clickOnButton2 == true){
        func2();
    }
    ///...
}
//main(func1 , func2 )
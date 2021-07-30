console.log("Hello World!!")
function printOdds(n){
    if(n < 0){
        n *= -1
    }
    for(let i = 0; i <= n; i++){
        if(i % 2 == 1){
            console.log(i)
        }
    }
}
let count = -53;
printOdds(count)

let userName = window.prompt("Enter your name!")
let age = window.prompt("Enter your age!!")
let aboveAge = (n) => {
    if(n >= 16){
        return true;
    }else{
        return false
    }
}
function alertUser(userAge){
    if(aboveAge(userAge) == true){
        alert(`${userName} your good to drive!!`)
    }else{
        alert(`${userName} wait till your 16!!`)
    }
}
alertUser(age);

function evaluateAge(age){
    if(age <= 18){
        return "You are a kid...";
    }
    else if(age > 18 & age <= 25){
        return "You are a Teen Agers...";
    }
    else{
        return "You are Adult...";
    }
    console.log("End Of Ladder");
}

result = evaluateAge(6)
console.log(result);
import { question } from "readline-sync";

function main(): void {
    const firstStr: string = question("enter first number\n"); //input is always in the form of string
    const secondStr: string = question("enter second number\n");
    const op: string = question("enter operation\n");
    let val: number = 0;
    if(!isNumber(firstStr)||!isNumber(secondStr)) {
        console.log("invalid numbers!");
    }
    else if(!isOperator(op)){
        console.log("invalid opertion!");
    }
    else{
        switch(op){
            case '+': 
                val = parseInt(firstStr)+parseInt(secondStr); // how to do converion of string to number?
                break;
            case '-':
                val = parseInt(firstStr)-parseInt(secondStr);  
                break;    
        }
        console.log(val);
    }
}

function isOperator(str: string){
    if(str=='+' || str=='-') return true;
    return false;
}

function isNumber(str: string): boolean{
    const isNum: number = parseInt(str);
    return !isNaN(isNum);
}

main();

/**
 * takeaways ~
 * readline-sync is used to get cmd line inputs
 */
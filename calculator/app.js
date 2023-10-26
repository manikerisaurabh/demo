const buttons = document.querySelectorAll(`button`);
let ans="";
let firstVal;
let secondVal;
let count=0;
let operator;
buttons.forEach(btn => {
    btn.addEventListener("click", ()=> {
        console.log(btn.innerText);
        let intext = btn.innerText;
             btn.classList.add(`light`);
        // setTimeout(() => {
            
        //   }, "1000");
        setTimeout(() => {
            btn.classList.remove(`light`);
            
          }, 1000)
        if(intext == "+" ||intext == "-" || intext == "x" || intext == "/" ||intext == "=") {
            console.log("operation hit");
            if(count == 0) {
                operator = intext;
                firstVal = ans;
                console.log(`this is firstvsl ${ans}`);
                ans="";
                setInput(operator);
            } else {
                secondVal = ans;
                console.log(`this is second ${ans}`);
                ans="";
            }
            count++;
        } else {
            ans+=intext;
            setInput(intext);
            
        }
    })
});


let output = document.querySelector("input");
console.log(output);

let equal = document.querySelector(`#equal`);
console.log(equal);
equal.addEventListener("click", ()=> {
    console.log("this is first fromequal "+firstVal);
    console.log("this is second fromequal "+secondVal);
    console.log(operator);
    firstVal = Number(firstVal);
    console.log(typeof(firstVal));
    secondVal = Number(secondVal);
    console.log(typeof(secondVal));
    if(operator == "+" ) {
        firstVal+=secondVal;
        output.value = firstVal;
    } else if(operator == "-") {
        firstVal-=secondVal;
        output.value = firstVal;
    } else if(operator == "x") {
        firstVal*=secondVal;
        output.value = firstVal;
    } else if(operator == "/") {
        firstVal/=secondVal;
        output.value = firstVal;
    }
});


function setInput(firstVal) {
    console.log(firstVal);
    console.log(typeof(firstVal));
    let presentText = document.querySelector("input").value;
    presentText+=firstVal;
    let s = presentText+firstVal;
    console.log(typeof(presentText));
    console.log(typeof(firstVal))
    output.value = presentText;
    
}


let clear = document.querySelector(`#c`);
clear.addEventListener("click", ()=> {
    output.value = "";
});

let backspace= document.querySelector(`#delete`);
backspace.addEventListener("click", ()=> {
    let present = output.value;
    console.log("this is present before edit "+present)
    console.log(present.length);
    present = present.substring(0,present.length-4);
    console.log("this is after before edit "+present)
    output.value = present;

})

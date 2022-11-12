const numButtons = document.querySelectorAll(".num");
const opButtons = document.querySelectorAll(".op");
const delButton =document.querySelector(".del-btn");
const cButton = document.querySelector(".C-btn");
const result = document.querySelector(".result p");
let recentNum = '0';
let nextNum = '0';
let operation = "";

function calculate(){
    if(operation =='=')
        return recentNum +'';
    const num1 = parseInt(recentNum,10);
    const num2 = parseInt(nextNum,10);
    switch (operation){
        case '+' :
            return num1 + num2 +'';
            break;
        case '-' :
            return num1-num2 +'';
            break;
        case '*' :
            return num1*num2 +'';
            break;
        case '/' :
            if(num2 == 0){
                alert("Khong the chia 1 so cho 0");
                return recentNum;
            }
            else
                return num1/num2 +'';
            break;
    }
}

function updateNum (event){
    if(result.innerHTML == "0"){
        result.innerHTML = this.dataset.num;
    }
    else{
        const rs = result.innerHTML + this.dataset.num;
        result.innerHTML =rs;
    }
}
function updateOp (event){
    if(operation==''){
        recentNum = result.innerHTML;
        operation=this.dataset.typeop;
        if(operation=='=')
            result.innerHTML=recentNum;
        else
            result.innerHTML ='0';
    }else{
        nextNum = result.innerHTML;
        recentNum = calculate();
        nextNum = '0';
        operation=this.dataset.typeop;
        if(operation == '=')
            result.innerHTML = recentNum;
        else    
            result.innerHTML = '0'
    }
    console.log(recentNum);
    console.log(operation);
}
function deleteNum (event){
    if(result.innerHTML.length>1){
        const rs = result.innerHTML;
        result.innerHTML = rs.slice(0,-1);
    }else if(result.innerHTML.length == 1 )
    {
        result.innerHTML = '0';
    }
}
function resetNum (event){
    recentNum ='0';
    nextNum = '0';
    operation='';
    result.innerHTML = '0';
}
cButton.addEventListener("click" , resetNum)
delButton.addEventListener("click",deleteNum);
opButtons.forEach(button=> button.addEventListener("click",updateOp))
numButtons.forEach(button => button.addEventListener("click",updateNum));

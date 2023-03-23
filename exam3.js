function filter(){
    let input=document.getElementById("userInput").value;
    let inputArr=[];
    inputArr=input.split(",");
    let newArr =[]
    for (let i = 0; i < inputArr.length; i++) {
        if (!newArr.includes(inputArr[i])) {
            newArr.push(inputArr[i]);
        }
    }
     alert(newArr);
}
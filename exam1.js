function swapButton(){
    let str=document.getElementById("userInput").value;
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    document.getElementById("print").innerHTML=newStr;
}

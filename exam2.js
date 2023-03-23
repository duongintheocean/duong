function upperCase(){
    let str = document.getElementById("userInput").value;
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (i == 0 || str[i-1] == " ") {
        newStr += str[i].toUpperCase();
      } else {
        newStr += str[i];
      }
    }
   document.getElementById("outPut").innerHTML=newStr;
}

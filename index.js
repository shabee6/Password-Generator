const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pswrd1El = document.getElementById("pswrd1")
let pswrd2El = document.getElementById("pswrd2")

let p1 =""
let p2 =""




function gnrtPswrd() {
    pswrd1El.textContent=""
    pswrd2El.textContent=""
    for(let i = 0; i < 10; i++) {
      pswrd1El.textContent +=  characters[Math.floor(Math.random() * characters.length)]  
      pswrd2El.textContent +=  characters[Math.floor(Math.random() * characters.length)]  
    }
}


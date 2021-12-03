function reverseString(s){
    return s.split("").reverse().join("");
}
console.log(reverseString("Hello you"));

function reverse(str){  
    let reversed = "";      
     for (var i = str.length - 1; i >= 0; i--){         
       reversed += str[i];  
     }     
    return reversed;
}
console.log(reverse("hello you"))

/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ['red', 'aqua', 'orange', 'purple', 'lightgreen'];


let text=prompt("Enter a text please.");
    
const div=document.querySelector("div");

let colorfulText="";
for(let i=0;i<text.length;i++){

const random=colors[Math.floor(Math.random()* colors.length)];

colorfulText += `<span style="color:${random}">${text[i]}</span>`;
}

div.innerHTML=colorfulText;
//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red

let arr=["orange","black","pink","white","blue","red","green","yellow","purpul","cream","brown"];
const h1=document.querySelector("h1");
setInterval(()=>{

let random=arr[Math.floor(Math.random()*arr.length)];
h1.style.color=`${random}`;
},1000);

const liEl=document.querySelectorAll("li");
liEl.forEach((li)=>{

    if(li.textContent.includes("Don")){
        li.style.backgroundColor="green";
    }else if(li.textContent.includes("Ongoing")){
        li.style.backgroundColor="yellow";
    }else if(li.textContent.includes("Coming")){

        li.style.backgroundColor="red";
    }

});

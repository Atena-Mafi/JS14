//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

//2/
const firstParagraph=document.querySelector("p");
console.log(firstParagraph);

//3


const  eachOfTheParagraph1=document.querySelector("#parone");
console.log(eachOfTheParagraph1);


const  eachOfTheParagraph2=document.querySelector("#partwo");
console.log(eachOfTheParagraph2);

const  eachOfTheParagraph3=document.querySelector("#parthree");
console.log(eachOfTheParagraph3);

const  eachOfTheParagraph4=document.querySelector("#parfour");
console.log(eachOfTheParagraph4);

//4
const  nodeList=document.querySelectorAll("p");
console.log(nodeList);
///5
nodeList.forEach((para)=>{
console.log(para.textContent);
});

///6

nodeList[3].textContent="I'm new.";
console.log(nodeList[3].textContent);

/////7

//way1👇👇👇
nodeList.forEach((ele,index)=>{
   ele.classList.add("newclass","newclass2");
    ele.classList.toggle("nweclass456")
    ele.id="newid"+ index;
   console.log(ele.classList);
   console.log(ele.getAttribute("id"));
   
});

///‼️‼️ I can use this className too but it deletes other classes.👇👇
// ele.className="newclas55";

//way2👇👇👇
///‼️‼️ I can use this method too but it replaces the class.
// nodeList.forEach((ele,index)=>{

//     ele.setAttribute("class",`newclass${index}`);
 
//      ele.setAttribute("id",`newid${index}`);
 
//     console.log(ele.getAttribute("class"));
//     console.log(ele.getAttribute("id"));
    
//  });


///8

nodeList.forEach((ele)=>{

    ele.style.caretColor="blue";
    ele.style.backgroundColor="orange";
    ele.style.fontSize="20px";
    ele.style.fontFamily="Nunito Sans, serif";
    ele.style.border="2px solid black";
 
    console.log(ele.classList);

 });


////9

nodeList.forEach((element,index)=>{


if(index %2===0){

    element.style.color="green"
}else{

        element.style.color="red";
};


});


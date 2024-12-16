//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops




const images=document.querySelectorAll("img");

images.forEach((image,index)=>{

if(index%2===0){
image.style.border="black solid 3px";

}else{

    image.style.border="blue dotted 5px";

}


});
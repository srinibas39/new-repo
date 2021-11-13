let left=document.querySelector(".left");
let right=document.querySelector(".right")
let center=document.querySelector(".center");

let p=document.querySelector("p");

center.addEventListener("click",()=>{
  p.style.textAlign="center";
    
})
left.addEventListener("click",()=>{
    p.style.textAlign="left";
      
  })
  right.addEventListener("click",()=>{
    p.style.textAlign="right";
      
  })

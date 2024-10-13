let main=document.querySelector("main")
let s=""
for(let i=1;i<=55;i++){
    s+=`<div id="card" class="w-[200px] h-[80px] m-2 border border-slate-900 bg-red-900 ">
    ${i}
   </div>`
}
main.innerHTML=s;



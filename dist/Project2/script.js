const main = document.querySelector("main");
let s = "";
let arrImages=["pokemon.jpeg","download.png","third.jpg","fourth.jpg"]
let random=0;
for (let i = 0; i <= 54; i++) {
    random=Math.floor(Math.random()*4)
    console.log(random)
    const newDiv = `
        <div class="w-[120px] h-[120px] border-2 border-black rounded-md shadow-lg flex items-center justify-center bg-white">
        <img class="object-cover overflow-hidden h-full w-full rounded-md"  src="${arrImages[random]}"/>
        </div>
    `;
    s += newDiv;
}

main.innerHTML = s;

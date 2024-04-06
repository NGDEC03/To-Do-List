
function creation(){
    let spanContent=document.createElement('span');
    let spanImg=document.createElement('span');
    spanContent.innerText=input.value;
    spanContent.style.fontSize='22px'
    spanContent.style.wordBreak='break-word'
    spanContent.style.marginRight='50px'
    spanImg.innerHTML="<span><img src='https://ngdec03.github.io/To-Do-List/assets/cross.svg' height='30px'></span>"
    spanImg.addEventListener('click',()=>{
        div.remove();
        localStorage.setItem("data", document.querySelector('#main-section').innerHTML);
    })
    div.appendChild(spanImg);
    div.appendChild(spanContent);
    div.style.margin='20px';
    div.style.display='flex';
    div.style.justifyContent='space-between';
    document.querySelector('#main-section').appendChild(div);
    localStorage.setItem("data", document.querySelector('#main-section').innerHTML);
}
document.querySelector('button').addEventListener('click',()=>{
    creation();
    console.log(2);
})
document.querySelector('#main-section').innerHTML=localStorage.getItem("data");
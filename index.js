let input=document.querySelector('input')
let div;
let spanContent;
let spanImg;
function creation(){
    div=document.createElement('div')
    spanContent=document.createElement('span');
     spanImg=document.createElement('span');
    if(input.value!='')spanContent.innerText=input.value;
    else {alert("Bhai Kuch Daaliye to Sahi");return;}
    spanContent.style.fontSize='22px'
    spanContent.style.wordBreak='break-word'
    spanContent.style.marginRight='50px'
    spanImg.innerHTML="<span><img src='https://ngdec03.github.io/To-Do-List/assets/cross.svg' height='30px'></span>"
    
    div.appendChild(spanContent);
    div.appendChild(spanImg);
    div.style.margin='20px';
    div.style.display='flex';
    div.style.justifyContent='space-between';
    document.querySelector('#main-section').appendChild(div);
    localStorage.setItem("data", document.querySelector('#main-section').innerHTML);
}
document.querySelector('button').addEventListener('click',()=>{
    creation();
})
spanImg.addEventListener('click',()=>{
    div.remove();
    localStorage.setItem("data", document.querySelector('#main-section').innerHTML);
})
document.querySelector('#main-section').innerHTML=localStorage.getItem("data");
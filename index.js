const button=document.querySelector('button')

function randomclr(){
   return Math.floor(Math.random()*256)
}
const body=document.querySelector('body')
button.addEventListener('click',()=>{
    body.style.background=`rgb(${randomclr()},${randomclr()},${randomclr()})`
})
let music=new Audio('my_music.mp3')
music.play()
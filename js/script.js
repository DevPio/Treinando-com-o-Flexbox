// efeito menu

const links = document.querySelectorAll('nav a')

for(let link of links){

    link.addEventListener("click",(e)=>{
        e.preventDefault()
        links.forEach((item)=>{
            item.classList.remove('selected')
        })
        link.classList.add('selected')
    })
        


}



// slide


// setInterval(passarS,7000)
// let slideItem = 0;




function passarS(){

let slidewidth = 100

if(slideItem>=2){

    slideItem = 0

}else{
    ++slideItem
}

if(slideItem==2){

}

const valor = document.querySelectorAll(".sliders")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"vw";



}



function mudarSlide(pos) {
	const slideItem = pos;
	const slidewidth = 100;
	const valor = document.querySelectorAll(".sliders")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"vw";
}

const btM = document.querySelector('.icosM')
let contador =0
btM.addEventListener('click',()=>{
    
    ++contador
    console.log(contador)
   
    const valor = document.querySelector(".sliders")
    const sei = valor.hasAttribute('style')
    const pos = valor.getAttribute('style')
    console.log(pos)
    if(sei==false || pos=="margin-left: 0vw;"){
        efeitoS()
        mudarSlide(1)
        
    }else if(pos=="margin-left: -100vw;"){
        
        mudarSlide(2)
        setTimeout(()=>{
            mudarSlide(0)
        },2000)
        
    }
    
})


const btMe = document.querySelector('.icosMe')

btMe.addEventListener('click',()=>{
    const valor = document.querySelector(".sliders")
    const sei = valor.hasAttribute('style')
    const pos = valor.getAttribute('style')

    if(pos=="margin-left: -200vw;"){
        
        mudarSlide(1)
    }else if(pos=="margin-left: -100vw;"){
        
        mudarSlide(0)
    }
})


// efeito letras

function efeitoS(){

    const letras = document.querySelector('.conteEs')
    letras.style.display = 'none'
    letras.style.opacity = 0
    setInterval(()=>{
        letras.style.display = 'flex'
        letras.style.opacity = 1
    },1000)

}

const acord = document.querySelectorAll('.cabe')
const acordE = document.querySelector('.contexto')

acord.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        e.target.parentElement.parentElement.querySelector('.contexto').classList.toggle('ativo')
    })
})
const linksInternos = document.querySelectorAll('.js a[href^="#"');
function scrollToSection(event){
 event.preventDefault();
 //Pega o endereço da section
 //usando o getAtribute pega o endereço sem o o localhost
 const href = event.currentTarget.getAttribute('href');   
 const section = document.querySelector(href);
 //Indica a quantidade de pixel do topo da section
 const topo = section.offsetTop;
 //  top: com o variavel no topo
 // behavior: faz o scroll suave; (a opção auto vai diretamenta para a página)
 window.scrollTo({
     top:topo,
     behavior: 'smooth'
 })
}
linksInternos.forEach((link)=>{
    link.addEventListener('click',scrollToSection);
})
console.log(linksInternos);
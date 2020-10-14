function scrollSuave(){
  const linksInternos = document.querySelectorAll("a[href^='#']");
  
  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

function mostraMenu(){
  document.querySelector('#menuIcon').addEventListener('click', (e) => {
    // menu.classList.toggle('menu-web');
    document.querySelector('.menu-web').classList.toggle('menu-mobile');
    
  })
}

window.addEventListener('scroll', (e)=> {
  let pos = window.pageYOffset > 300 && window.pageYOffset < 400 
  if (pos){
    document.querySelector('.voltar-topo').classList.add('ativa')
  } else if (window.pageYOffset < 300){
    document.querySelector('.voltar-topo').classList.remove('ativa')
  }
})

scrollSuave();
mostraMenu();
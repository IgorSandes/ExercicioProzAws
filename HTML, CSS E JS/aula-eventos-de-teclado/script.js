const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

// document.addEventListener('keyup',(e)=>{
//   console.log('abrir menu de perfil')
//   if(e.code == 'Digit1'){
//     navPerfil.style.display = "block";
//   }
// })

// document.addEventListener('keyup',(e)=>{
//   console.log(e.code)
//   if(e.code == 'Escape'){
//     navPerfil.style.display = "none";
//   }
// })

const linkPerfilDados = document.getElementById("link-perfil-dados");
document.addEventListener('keyup', (e) =>{
  if(navPerfil.style.display == 'block'){
    if (e.code == 'Digit1'){
      linkPerfilDados.click();
    }
  }else if (e.code == 'Digit1'){
    navPerfil.style.display = "block";
  }
})

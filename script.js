

if(!localStorage.getItem("theme")){
    localStorage.setItem("theme","light");
}
else if(localStorage.getItem("theme")=="dark"){
    document.body.classList.toggle("dark-theme");
    document.getElementById('theme-btn').classList.toggle("theme-btn-dark");
}



{ 
    let x=document.getElementById('more');
      x.addEventListener("click",()=>{
       x.style.display="none";
       document.getElementById('links').style.height="fit-content";
      });
  let y=document.getElementById('less');
      y.addEventListener("click",()=>{
       x.style.display="flex";
       document.getElementById('links').style.height="288px";
      });       
}
{
    let x=document.getElementById('close');
     x.addEventListener("click",()=>{
       document.getElementById('advertisement').style.display="none";
       document.getElementById('close-add').innerHTML="advertisement closed."
       document.getElementById('close-add').style.display="block";
     });
}
{
    let a=document.getElementById('close-chat');
    let b=document.getElementById('chatty');
    a.addEventListener("click",()=>{
        
        if(b.style.display==="none")
        {
            b.style.display="block";
            a.innerHTML="Hide Chat";
        }
        else
        {
          b.style.display="none";
          a.innerHTML="Show Chat";
        }
    });
}
{
  function set(){
      var x=document.getElementById('setting-menu');
      x.classList.toggle("setting-menu-display");
      // if(x.style.display=="none"){
      //     x.style.display="block";
      // }
      // else{
      //     x.style.display="none";
      // }
  }
 }
{
  function theme(){
     if(localStorage.getItem("theme")=="light"){
      document.getElementById('theme-btn').classList.toggle("theme-btn-dark");
      document.body.classList.toggle("dark-theme");
      localStorage.setItem("theme","dark");
     }
     else if(localStorage.getItem("theme")=="dark"){
      document.getElementById('theme-btn').classList.remove("theme-btn-dark");
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme","light");
     }
  }
 }



     

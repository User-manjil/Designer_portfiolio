function dribble(){
    window.open("https://dribbble.com/manzeelaryal1");
}function behance(){
    window.open("https://www.behance.net/manzeelaryal12");
}

function modder(){
    
  let  all= document.getElementById("container");
  let  navbar= document.getElementById("hero");
  

   
    all.classList.toggle("dark");
    navbar.classList.toggle("silver");
    
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

        else{
            entry.target.classList.remove("show");
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

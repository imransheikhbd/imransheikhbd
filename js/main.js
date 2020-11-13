
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for(let i=0; i< filterButtons.length; i++){
    filterButtons[i].addEventListener("click", function(){
        for (let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target=this.getAttribute("data-target")

        for (let k=0; k<items.length; k++ ){
            items[k].style.display="none";
            if(target==items[k].getAttribute("data-id")){
                items[k].style.display="block";
            }
            if(target=="all"){
                items[k].style.display="block";
            }
        }
    })
}


  

    let hamberger= document.querySelector('.hamberger');
    let times= document.querySelector('.times');
    let mobileNav= document.querySelector('.mobile-nav');

    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });
    







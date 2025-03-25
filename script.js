
document.addEventListener('DOMContentLoaded', () => {
    const orgItems = document.querySelectorAll('.st');
    const states = document.querySelectorAll('.state');
    const tooltip = document.getElementById('tooltip');
    const logo = document.getElementById('logo');
    const orgName = document.getElementById('org-name');

    orgItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const stateId = item.getAttribute('data-state');
            const logoSrc = item.getAttribute('data-logo');
            const name = item.textContent;

            states.forEach(state => {
                if (state.id === stateId) {
                    state.classList.add('highlight');
                    const bbox = state.getBBox();
                    tooltip.style.left = `${bbox.x + bbox.width / 2}px`;
                    tooltip.style.top = `${bbox.y}px`;
                    tooltip.style.display = 'block';
                    logo.src = logoSrc;
                    orgName.textContent = name;
                }
            });
        });

        item.addEventListener('mouseout', () => {
            states.forEach(state => state.classList.remove('highlight'));
            tooltip.style.display = 'none';
        });
    });
});


//new js

const tabs = document.querySelectorAll('.tab-btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=>{
        tabs.forEach(tab => {tab.classList.remove('active')});
        tab.classList.add('active');

        var line =document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        all_content.forEach(content => {content.classList.remove('active')});
        all_content[index].classList.add('active');
    })

})
    

//aditi js
var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()




gsap.to(".upd",{
    frame:frameCount-1,
    snap:"frame",
    ease:"none",
    scrollTrigger:{
        scrub:1.8,
        pin:true,
        trigger:".home",
    },
    onUpdate: render
});





function navBar(){


    
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
      
        nav.classList.toggle('show-menu')
       
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 
 const dropdownItems = document.querySelectorAll('.dropdown__item')
 
 
 dropdownItems.forEach((item) =>{
     const dropdownButton = item.querySelector('.dropdown__button') 
 
   
     dropdownButton.addEventListener('click', () =>{
       
         const showDropdown = document.querySelector('.show-dropdown')
         
       
         toggleItem(item)

         if(showDropdown && showDropdown!== item){
             toggleItem(showDropdown)
         }
     })
 })
 

 const toggleItem = (item) =>{
   
     const dropdownContainer = item.querySelector('.dropdown__container')
     if(item.classList.contains('show-dropdown')){
         dropdownContainer.removeAttribute('style')
         item.classList.remove('show-dropdown')
     } else{
         dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
         item.classList.add('show-dropdown')
     }
 }
 
 const mediaQuery = matchMedia('(min-width: 1118px)'),
       dropdownContainer = document.querySelectorAll('.dropdown__container')
 

 const removeStyle = () =>{
     
     if(mediaQuery.matches){
    
         dropdownContainer.forEach((e) =>{
             e.removeAttribute('style')
         })
         dropdownItems.forEach((e) =>{
             e.classList.remove('show-dropdown')
         })
     }
 }
 
 addEventListener('resize', removeStyle)

}



navBar()
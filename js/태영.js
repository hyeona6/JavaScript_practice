/* navbar크기 줄어들기 */
$(window).on('scroll', function() {
  if (window.scrollY > 250) {
    $('.navbar').addClass('scroll-ani');
  } else {
    $('.navbar').removeClass('scroll-ani');
  }
});

/* 한칸씩 내려가기 */
window.onload = function(){
    const elm = document.querySelectorAll('.section');
    const elmCount = elm.length;
    elm.forEach(function(item, index){
      item.addEventListener('mousewheel', function(event){
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let elmSelector = elm[index];

        // 휠 다운
        if (delta < 0){
          if (elmSelector !== elmCount-1){
            try{
              moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }
        // 휠 업
        else{
          if (elmSelector !== 0){
            try{
              moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }

        const body = document.querySelector('html');
        window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
      });
    });
  }


/* 뒤집기 카드 */  
document.addEventListener("DOMContentLoaded", function() {
const flip = document.querySelector('.flip-button');
flip.addEventListener("click", flipper)
  
  function flipper (event) {
    const target = document.querySelector('.section3-flip');
    target.style.transform = "rotateY(180deg)"
    target.addEventListener('click',reflipper);
  }
  
  function reflipper(event){
    const target = document.querySelector('close-button');
    target.style.transform = "rotateY(0deg)"
    target.addEventListener('click',flipper)
    target.removeEventListener('click',flipper)
  }
});
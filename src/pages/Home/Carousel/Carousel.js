import React from 'react'
import { TOKEN , DOMAIN} from '../../../ulti/setting'

let arrowLeft = document.querySelector('.slick-prev');
    let arrowRight = document.querySelector('.slick-next');

	let slickTrack = document.querySelector('.slick-track');
	let slickSlice = document.querySelectorAll('.slick-slide');
	let slickDots = document.querySelectorAll('.slick-dots li');

	let btn = document.querySelectorAll('.slick-dots button');
    let eleIsClicked = 0;

	let size = slickSlice[0].clientWidth; 
	let count = 1, time = 4000;
	let stateTab = true; 
	let stateTranslateOfSlickTrack = true; 
	let v_interval = ""; 
	let hidden, visibilityChange;
function CarouselBanner() {
    
    
  return (
    <div>

    </div>
  )
}
function run_setInterval(){
    v_interval = setInterval(()=>{
             slickDots[count-1].classList.remove('slick-active');
             slickTrack.style.transition ="transform 0.5s ease-in-out";
             slickTrack.style.transform = `translate3d(${-size*(++count)}px,0px,0px)`;
             eleIsClicked=count-1;
             if(count === slickSlice.length - 1){
                 slickDots[0].classList.add('slick-active');
             }else{
                 slickDots[count-1].classList.add('slick-active');
             }
         }, time);
     }
 
     function run_clearInterval(){
         clearInterval(v_interval);
     }
     if (typeof document.hidden !== "undefined") {
		hidden = "hidden";
		visibilityChange = "visibilitychange";
	} else if (typeof document.msHidden !== "undefined") {
		hidden = "msHidden";
		visibilityChange = "msvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
		hidden = "webkitHidden";
		visibilityChange = "webkitvisibilitychange";
	}
    
    // Hàm xử lý sự kiện visibilityChange cho document
    function handleVisibilityChange() {
		stateTab = (document[hidden])?false:true;
		if(stateTab){ // Nếu user ở trong tab.
			run_setInterval();
		}else{
			run_clearInterval();
		}
	}
    arrowLeft.addEventListener("click", function(e){
		if(stateTranslateOfSlickTrack){
			run_clearInterval();
			commonFuncBothArrows(true,false,e); 
			run_setInterval();
		}
	});

	arrowRight.addEventListener("click", function(e){
		if(stateTranslateOfSlickTrack){
			run_clearInterval();
			commonFuncBothArrows(false,true,e);
			run_setInterval();
		}
	});
    
    function commonFuncBothArrows(arrowL,arrowR,e){
    e.preventDefault();
    stateTranslateOfSlickTrack = false;
    if(arrowL){
        if(count <= 0 ){ return; }
    }else{
        if(arrowR){
            if(count >= slickSlice.length - 1){ return;}
        }
    }
    slickDots[count-1].classList.remove('slick-active'); 
    
    slickTrack.style.transition = `transform 0.5s ease-in-out`;
    count = arrowL?--count:++count; 

    slickTrack.style.transform = `translate3d(${-size*count}px,0px,0px)`;
    eleIsClicked=count-1; 
    switch (count) {
        case 0:
        slickDots[slickDots.length-1].classList.add('slick-active');
        break;
        case slickSlice.length-1: 
        slickDots[0].classList.add('slick-active');
        break;
        default:
        slickDots[count-1].classList.add('slick-active');
        break;
    }
}
btn.forEach((elem) => {
    elem.addEventListener('click', ()=>{
        if(stateTranslateOfSlickTrack){ 
            slickTrack.style.transition = `transform 0.5s ease-in-out`;
            count = Number(elem.textContent);
            slickDots[eleIsClicked].classList.remove('slick-active');
            slickDots[count-1].classList.add('slick-active');
            slickTrack.style.transform = `translate3d(${-size*count}px,0px,0px)`;
            eleIsClicked = count-1;
            run_setInterval();
        }
    });
});

export default CarouselBanner
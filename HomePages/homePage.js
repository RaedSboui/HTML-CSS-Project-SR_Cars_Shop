/* START TO TOP */
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 300){
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove("active");
    }
});
/* START TO TOP */


/* START HUMBURGER */
const humburgger = document.querySelector(".humburgger");
const container = document.querySelector(".container");

humburgger.addEventListener("click", () => {
    container.classList.toggle("active");
});
/* END HUMBURGER */


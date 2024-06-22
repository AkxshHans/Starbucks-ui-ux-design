var t1 = gsap.timeline()





let tl = gsap.timeline({scrollTrigger:{
    trigger:"#main2",
    start: "0% 95%",
    end:"50% 50%",
    scrub:2,
    markers:false,
}})

tl.to("#star",{
    top:"147%",
    left:"25%",
    scale : 1.2,
    rotate : "330deg",
    scrub:2,

})

let t2 = gsap.timeline({scrollTrigger:{
    trigger:"#main3",
    start: "0% 95%",
    end:"50% 50%",
    scrub:2,
    markers:false,
}})
t2.to("#star",{
    top:"250%",
    left:"70%",
    scale : 1,
    rotate : "30deg",
    scrub:2,

})











// ***************


document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');

    increaseButton.addEventListener('click', function() {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    decreaseButton.addEventListener('click', function() {
        if (parseInt(quantityInput.value) > 0) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });
});





Shery.makeMagnet("#main #nav #heading , #nav1 h4" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#main4 h6" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#main4 #imga , #main4 #imgb , #main4 #imgc " /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#main6 img " /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });




  const minus = document.querySelector("#minus")
  const num = document.querySelector("#num")
  const plus = document.querySelector("#plus")

  let a = 1;
  plus.addEventListener("click",()=>{
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log(a);
  })

  minus.addEventListener("click",()=>{
    a--;
    a = (a > 0) ? "0" + a : a;

    num.innerText = a;
    console.log(a);
  })








  const mainimg = document.querySelector("#mainimg")
  const imga = document.querySelector("#imga")
  const imgb = document.querySelector("#imgb")
  const imgc = document.querySelector("#imgc")



  mainimg.addEventListener("mouseenter", ()=>{
    imga.style.opacity = 1;
  })
//   mainimg.addEventListener("mouseleave", ()=>{
//      imga.style.opacity = 0;
//   })


  mainimg.addEventListener("mouseenter", ()=>{
    imgb.style.opacity = 1;
  })
//   mainimg.addEventListener("mouseleave", ()=>{
//      imgb.style.opacity = 0;
//   })


  mainimg.addEventListener("mouseenter", ()=>{
    imgc.style.opacity = 1;
  })
//   mainimg.addEventListener("mouseleave", ()=>{
//      imgc.style.opacity = 0;
//   })



  









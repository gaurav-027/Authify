let side1=document.querySelector(".side1");
let side2=document.querySelector(".side2");
let lftpt=document.querySelector(".leftpart");
let rtpt=document.querySelector(".rightpart");
let login=document.querySelector(".login")
let lftpt2=document.querySelector(".leftpart2");
let rtpt2=document.querySelector(".rightpart2");
let desc=document.querySelector(".desc");
let dets=document.querySelector(".details");
let desc2=document.querySelector(".desc2");
let dets2=document.querySelector(".details2");
let theme=document.querySelector(".theme");

side1.classList.add("clr");

side2.addEventListener("click",()=>{
    side1.classList.remove("clr");
    side2.classList.add("clr");
    desc.style.transform="scale(0.8)";
    dets.style.transform="scale(0.8)";
    lftpt.style.borderRadius="20px";
    rtpt.style.borderRadius="20px";
    lftpt.style.width="48%";
    rtpt.style.width="48%";
    setTimeout(() => {
        lftpt.style.width="0%";
        rtpt.style.width="0%";
    }, 500);
    
    setTimeout(() => {
        desc.style.display="none";
        dets.style.display="none";
    },600);
    
    setTimeout(() => {
        login.style.display="none";
        lftpt2.style.width="48%";
        rtpt2.style.width="48%";
        lftpt2.style.borderRadius="20px";
        rtpt2.style.borderRadius="20px"; 
    }, 1200);

    setTimeout(()=>{
        desc2.style.transform="scale(0.8)";
        dets2.style.transform="scale(0.8)"; 
        desc2.style.display="flex";
        dets2.style.display="flex";
    },1700);

    setTimeout(() => {
        lftpt2.style.width="50%";
        rtpt2.style.width="50%";
        lftpt2.style.borderRadius="20px 0px 0px 20px";
        rtpt2.style.borderRadius="0px 20px 20px 0px"; 
        desc2.style.transform="scale(1)";
        dets2.style.transform="scale(1)"; 
    },1900);
})

side1.addEventListener("click",()=>{
    side2.classList.remove("clr");
    side1.classList.add("clr");
    desc2.style.transform="scale(0.8)";
    dets2.style.transform="scale(0.8)";
    lftpt2.style.borderRadius="20px";
    rtpt2.style.borderRadius="20px";
    lftpt2.style.width="48%";
    rtpt2.style.width="48%";
    setTimeout(() => {
        lftpt2.style.width="0%";
        rtpt2.style.width="0%";
    }, 500);
    
    setTimeout(() => {
         desc2.style.display="none";
        dets2.style.display="none";
    },600);
    
    setTimeout(() => {
        login.style.display="flex";
    }, 1300);

    setTimeout(()=>{
        lftpt.style.width="48%";
        rtpt.style.width="48%";
        lftpt.style.borderRadius="20px";
        rtpt.style.borderRadius="20px"; 
    },1500)

    setTimeout(()=>{
        desc.style.transform="scale(0.8)";
        dets.style.transform="scale(0.8)"; 
        desc.style.display="flex";
        dets.style.display="flex";
    },2000);

    setTimeout(() => {
        lftpt.style.width="50%";
        rtpt.style.width="50%";
        lftpt.style.borderRadius="20px 0px 0px 20px";
        rtpt.style.borderRadius="0px 20px 20px 0px"; 
        desc.style.transform="scale(1)";
        dets.style.transform="scale(1)"; 
    },2200);
})


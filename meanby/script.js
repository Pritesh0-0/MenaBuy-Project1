const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

     var slide = document.getElementById("slider")
    var btn1 = document.getElementById("btn1")
    var btn2 = document.getElementById("btn2")
    var btn3 = document.getElementById("btn3")
    btn1.onclick = function(){
       slide.style.transform= "translateX(0vw)";
        btn1.classList.add("active");
        btn2.classList.remove("active")
        btn3.classList.remove("active")
    }
    btn2.onclick = function(){
        slide.style.transform= "translateX(-97vw)";
        btn2.classList.add("active");
        btn1.classList.remove("active")
        btn3.classList.remove("active")

    }
    btn3.onclick = function(){
        slide.style.transform= "translateX(-194vw)";
        btn3.classList.add("active");
        btn2.classList.remove("active")
        btn1.classList.remove("active")
    }
  
             
           var i =0 
            
             function slider()
             {
                 
                    if(i == 0 ){
                        slide.style.transform= "translateX(0vw)";
                  btn1.classList.add("active");
               btn2.classList.remove("active")
                btn3.classList.remove("active")
                    i++
                 setTimeout('slider()',5000);

                 }
                 else if(i==1){
                    slide.style.transform= "translateX(-97vw)";
        btn2.classList.add("active");
        btn1.classList.remove("active")
        btn3.classList.remove("active")
                    i++
                 setTimeout('slider()',5000);
                 }
                 else if(i==2){
                    slide.style.transform= "translateX(-194vw)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
                    i=0
                    setTimeout('slider()',5000);
                    

                 }
                 
                
               
                
           }
           function left()
           {
            if(i == 1 ){
                        slide.style.transform= "translateX(-97vw)";
                  btn1.classList.add("active");
               btn2.classList.remove("active")
                btn3.classList.remove("active")
                    i++
               

                 }
                 
                 else if(i==0){
                    slide.style.transform= "translateX(-194vw)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
                  
                   
                    

                 }
                 else if(i==2){
                    slide.style.transform= "translateX(0vw)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
                    i=0
                
                    

                 }
           }
           function right()
           {
          
            if(i == 0 ){
                        slide.style.transform= "translateX(0vw)";
                  btn1.classList.add("active");
               btn2.classList.remove("active")
                btn3.classList.remove("active")
                    i++
               

                 }
                  else if(i==1){
                    slide.style.transform= "translateX(-97vw)";
        btn2.classList.add("active");
        btn1.classList.remove("active")
        btn3.classList.remove("active")
                    i++
              
                 }
                 else if(i==2){
                    slide.style.transform= "translateX(-194vw)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
                    i=0
                    setTimeout('right()',4000);
                   
                    

                 }
           
           }
        

document.getElementById("h1_welcome").addEventListener("click",  new function(){
    
    let numClicks = 0;
    let h1 = document.getElementById("h1_welcome")

    return function(){
        numClicks++;
        switch(numClicks){
            case 1:
                h1.title = "click me once shame on you..."
                break;
            case 2:
                h1.title = "click me twice... err.. you can't click me again..."
                break;
            case 3:
                window.location.href= './crazy/crazy.html'
                break;
        }
        
    }
    

})



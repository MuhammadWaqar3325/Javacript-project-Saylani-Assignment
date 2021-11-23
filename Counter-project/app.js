(function (){
    const buttons = document.querySelectorAll('.counterBtn')
    let count = 0
    


    buttons.forEach(function (button){
        button.addEventListener('click', function(){
        if (button.classList.contains('preBtn')){
            count--
            
        } 
        else if (button.classList.contains('restBtn')){
            count = 0;
        }
        
        
        else if (button.classList.contains('nextBtn')){
            count++
          }
         


          const counter = document.querySelector('#counter')
          counter.textContent = count

          if (count < 0) {
            counter.style.color = "red";
          }
          if (count == 0) {
            counter.style.color = "yellow";
          }

          if (count > 0) {
            counter.style.color = "green";
          }


        
            
        })
        
    })
})()


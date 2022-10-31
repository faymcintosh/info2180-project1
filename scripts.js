/* Add your JavaScript to this file */

window.onload = function () {

    const button = document.querySelectorAll('.btn');
    
   button[1].addEventListener('click', function(event) {
       event.preventDefault();
       var  container = document.getElementsByClassName("message");
      
       var email= document.getElementById("email").value;
       var para = document.createElement("p") ;
       
       if(email!="")
       {
             msg = document.createTextNode('Thank You ' + '' (email) + ('your email has been send our mail'));
  
        }else
        {
         msg = document.createTextNode('Please enter a valid email address');
        }
        if (container.innerHTML=""){
            container.removeChild(container.lastElementChild);  
        }

     
        para.appendChild(msg)
       container[0].appendChild(para);
  })


  }

 

window.addEventListener('scroll', reveal);
window.addEventListener('scroll', revealXleft);
window.addEventListener('scroll', revealXright);
window.addEventListener('scroll', revealrightAbout);

function reveal(){
          var reveals = document.querySelectorAll('.reveal');

          for(var i = 0; i < reveals.length; i++){
                    var windowheight = window.innerHeight;
                    var revealtop = reveals[i].getBoundingClientRect().top;
                    var revealpoint = 97;

                    if(revealtop < windowheight - revealpoint){
                              reveals[i].classList.add('active');
                    } else{
                              reveals[i].classList.remove('active');
                    }
          }
}

function revealXleft(){
          var reveals = document.querySelectorAll('.revealXleft');

          for(var i = 0; i < reveals.length; i++){
                    var windowheight = window.innerHeight;
                    var revealtop = reveals[i].getBoundingClientRect().top;
                    var revealpoint = 150;

                    if(revealtop < windowheight - revealpoint){
                              reveals[i].classList.add('active');
                    } else{
                              reveals[i].classList.remove('active');
                    }
          }
}

function revealXright(){
          var reveals = document.querySelectorAll('.revealXright');

          for(var i = 0; i < reveals.length; i++){
                    var windowheight = window.innerHeight;
                    var revealtop = reveals[i].getBoundingClientRect().top;
                    var revealpoint = 120;

                    if(revealtop < windowheight - revealpoint){
                              reveals[i].classList.add('active');
                    } else{
                              reveals[i].classList.remove('active');
                    }
          }
}

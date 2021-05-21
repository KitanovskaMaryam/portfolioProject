var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 500 + 30 * i
   });

var textWrapper1 = document.querySelector('.ml16');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml16 .letter',
    translateY: [100,0],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 1400 + 30 * i
  });

var textWrapper2 = document.querySelector('.ml17');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml17 .letter',
    translateY: [100,0],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 2600 + 30 * i
  });

  var textWrapper3 = document.querySelector('.ml18');
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml18 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1600,
    delay: (el, i) => 3500 + 30 * i
   });

  var textWrapper4 = document.querySelector('.ml19');
textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml19 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 4400 + 30 * i
   });

   $(document).ready(function(){
          $('.nav-bar').slideDown(6000);
       })
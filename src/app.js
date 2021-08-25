let lst = document.querySelectorAll('.lst');

for (let i = 0; i < lst.length; i++) {
   lst[i].onclick = function(){
       let n = 0;
       while (n < lst.length) {
           lst[n++].className = 'lst';
       }

       lst[i].className = 'list active';
   }
    
}

//  toggle btn 
const navigation = document.querySelector('.sidebar');
const icon = document.querySelector('.tg-icon');
const overlay = document.querySelector('.overlay');

icon.onclick = function(){
   overlay.classList.toggle('overlayOn');
   icon.classList.toggle('active');
   navigation.classList.toggle('active');


} 
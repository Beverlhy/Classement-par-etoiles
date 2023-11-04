const starts = document.querySelectorAll('.start .etoile');
const btn = document.querySelector('button');

starts.forEach((debut, num) => {
   
   debut.addEventListener('click', () =>{
      starts.forEach((debut, num2) => {
         btn.style.visibility = 'visible';
         num >= num2 ? debut.classList.add('active') : debut.classList.remove('active');
      });
   });
});
btn.addEventListener('click', () =>{
   document.querySelector('p').innerHTML = "Vous avez choisi " +  document.querySelectorAll('.active').length + " etoile(s)";
})

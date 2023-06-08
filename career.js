// const moon = document.querySelector('.darkmode')
// // const sun = document.querySelector('.darkmode')



// moon.addEventListener('click', () =>{

//    moon.classList.toggle('active')
   
// } )
// console.log(moon)

function changeMode() {
   const body = document.body;
   
   // toggle the theme
   body.classList.toggle("dark-theme");
   let img = document.getElementById('img');
   
   // change the button text
   if (img.innerHTML == "Dark Mode") {
      img.innerHTML = "Normal Mode";
   } else {
      img.innerHTML = "Dark Mode"
   }
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

class menuImages{
    constructor(foods){
        this.foods = foods;
    }

    displayMenuImages(){
        const section = document.getElementById('menu-items');
        this.foods.forEach(food => {
            const img = document.createElement('img');
            img.src = food.src;
            img.style.width = '200px';
            img.style.margin = '10px';
            section.appendChild(img);
        });
    }
}
const foodImages = new menuImages([
    {day: 'mon', year: 2024, src:'images/meal1b.jpg'},
    {day: 'tue', year: 2024, src:'images/meal2b.jpg'},
    {day: 'wen', year: 2024, src:'images/meal3b.jpg'},
    {day: 'thu', year: 2024, src:'images/meal4b.jpg'},
    {day: 'fri', year: 2024, src:'images/meal5b.jpg'},
    {day: 'sat/sun', year: 2024, src:'images/meal6b.jpg'}
]);

document.addEventListener('DOMContentLoaded',()=>{
    foodImages.displayMenuImages();
});
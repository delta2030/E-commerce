const slides = document.querySelectorAll(".image");
var counter = 0;
console.log(slides);

slides.forEach(
  (image, index) => {
    image.style.left = `${index * 100}%`;
  }
);

const slideImage = () => {
  slides.forEach(
    (image) => {
      image.style.transform = `translateX(-${counter * 100}%)`;
    }
  );
};

const Previous = ()=>{
    if (counter === 0) {
        counter = slides.length - 1;
      } else {
        counter--;
      }
      slideImage();
};

const Next = ()=>{
    if (counter === slides.length - 1) {
        counter = 0;
      } else {
        counter++;
      }
      slideImage();
    };


    



document.querySelector(".previous").addEventListener("click", function(){
    setTimeout(Previous(),1000);
})


  

document.querySelector(".next").addEventListener("click", function(){
    setTimeout(Next(),1000);

})

const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink =document.querySelector('/register-link');

registerLink.addEventListener("click",()=>{
    wrapper.classList().add("active");
})

loginLink.addEventListener("click",()=>{
    wrapper.classList().remove("active");
})










  


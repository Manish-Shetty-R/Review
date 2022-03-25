const subBtn = document.getElementById("myBtn");
const firstContainer = document.getElementById("container");
const tuContainer = document.getElementById("new-container") ;
const reviewValue = document.getElementsByClassName("liBtn");
const spanValue = document.getElementById("sp");

tuContainer.style.display= "none";

for (let i=0 ; i < reviewValue.length ; i++){

   reviewValue[i].addEventListener("click", function() {
        spanValue.innerHTML = reviewValue[i].innerHTML;   
        }
   );  
}


subBtn.addEventListener("click", function() {
    tuContainer.style.display= "block";
    firstContainer.style.display="none"
});



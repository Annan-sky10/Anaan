
      const burger = document.querySelector('.burger');
      const header = document.querySelector('.nav-links');
      const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", function() {
        header.classList.toggle("nav-active");
   
});


/* here wala start*/

function bigTable() {
  document.getElementById("table1").style.height= "70%" ;
  document.getElementById("table1").style.width= "90%";
};

function normalTable() {
  document.getElementById("table1").style.height= "50%" ;
  document.getElementById("table1").style.width= "70%";
};

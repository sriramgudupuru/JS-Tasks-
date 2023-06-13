var sticky = navbar.offsetTop;
window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};



// //smooth scroll

document.getElementById('hiddenLinks').addEventListener('click', function (e) {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains('link')) {
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
});

//hamburger button

burger.onclick = () => {
    var x = document.getElementById("hiddenLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex" ;
      x.style.flexDirection = "row";
    }  
};

//random password generator


          
/* Function to generate combination of password */
function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        pass += str.charAt(char)
    }
      
    return pass;
}
  
function passwdGen() {
    passwd.innerHTML = generateP();
}

//bmi

window.onload = () => {
  // let button = document.querySelector("#btn");

  // Function for calculating BMI
  bmi.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let h = parseInt(height.value);
  let w = parseInt(weight.value);
  if (h === "" || isNaN(h)) 
      comment.innerHTML = "Provide a valid Height!";

  else if (w === "" || isNaN(w)) 
      comment.innerHTML = "Provide a valid Weight!";

  else {

      // Fixing upto 2 decimal places
      let bmi = (w / ((h * h) 
                          / 10000)).toFixed(2);

      // Dividing as per the bmi conditions
      if (bmi < 18.6) comment.innerHTML =
          `Under Weight : <span>${bmi}</span>`;

      else if (bmi >= 18.6 && bmi < 24.9) 
          comment.innerHTML = 
              `Normal : <span>${bmi}</span>`;

      else comment.innerHTML =
          `Over Weight : <span>${bmi}</span>`;
  }
}
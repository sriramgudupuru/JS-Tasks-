//showing modal box on click
let btn = document.getElementById("btn") ;
let mbox = document.getElementById("mbox") ;
btn.onclick = function() {
    mbox.style.display="block" ;
}

//closing modal box using into mark

let mark = document.getElementsByTagName("span")[0] ;
mark.onclick = function() {
    mbox.style.display="none";
}

//closing modal if clicked outside of modal

window.onclick = function(event) {
    if(event.target==mbox)
    {
        mbox.style.display="none";
    }
}

//random color generator

const backgroundColor =  () => {
    const randColor = Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = "#" + randColor;
    color.innerHTML = "#" + randColor;
};

newColor.addEventListener("click", backgroundColor);

//random number Generator

randNum.onclick = () =>{
    number.innerHTML = Math.random();
}

//counter

let count=0;
counter.onclick = () => {
        count +=1;
        displayCount.innerHTML = count;
}

//borderRadius

topLeft.oninput = () => {
    borderChanging.style.borderTopLeftRadius = topLeft.value + "px";
}

topRight.oninput = () => {
    borderChanging.style.borderTopRightRadius = topRight.value + "px";
}

bottomLeft.oninput = () => {
    borderChanging.style.borderBottomLeftRadius = bottomLeft.value + "px";
}

bottomRight.oninput = () => {
    borderChanging.style.borderBottomRightRadius = bottomRight.value + "px";
}

// boxShadow

let hS = 0, vS = 0, bS = 0, sS = 0, cS = 0;

hShadow.oninput = () => {
  hS = hShadow.value;     
  changeShadow.style.boxShadow = hS + "px" ;
}
 vShadow.oninput = () => {
   vS = vShadow.value;     
   changeShadow.style.boxShadow = hS + "px" + " " + vS + "px";
 }
blur.oninput = () => {
  bS = blur.value;   
  changeShadow.style.boxShadow = hS + "px" + " " + vS + "px" + " " + bS + "px";   
}
spread.oninput = () => {
  sS = spread.value; 
  changeShadow.style.boxShadow = hS + "px" + " " + vS + "px"  + " " + bS + "px" + " " + sS + "px";   
    
}
shadowColor.oninput = () => {
  cS = shadowColor.value;     
   changeShadow.style.boxShadow = hS + "px" + " " + vS + "px" + " " + bS + "px" + " " + sS +"px" + " " + cS ;   
}

 inoutSet.oninput = () => {
    inoutS = inoutSet.value;     
     changeShadow.style.boxShadow = hS + "px" + " " + vS + "px" + " " + bS + "px" + " " + sS +"px" + " " + cS + " " +inoutS ;   
}

//filter

function filterimg(filterval){
  vinayaka.style.filter=filterval;
    // let filters = document.getElementsByName('filter');
    // for(let i = 0; i < filters.length; i++)
    // {
    //      if(filters[i].checked)
    //         vinayaka.style.filter = filters[i].value;
    // }
}

// vinayaka border slider

wholeBorder.value=0;
    topLeftSlide.value = 0;
    topRightSlide.value = 0;
    bottomLeftSlide.value = 0;
    bottomRightSlide.value = 0;
    xdir.value=0;
    ydir.value=0;

wholeBorder.oninput = () => {
    vinayaka.style.borderRadius = wholeBorder.value + "px";
    topLeftSlide.value = wholeBorder.value;
    topRightSlide.value = wholeBorder.value;
    bottomLeftSlide.value = wholeBorder.value;
    bottomRightSlide.value = wholeBorder.value;

}

topLeftSlide.oninput =() => {
    vinayaka.style.borderTopLeftRadius = topLeftSlide.value + "px";
}

topRightSlide.oninput =() => {
    vinayaka.style.borderTopRightRadius = topRightSlide.value + "px";
}

bottomLeftSlide.oninput =() => {
    vinayaka.style.borderBottomLeftRadius = bottomLeftSlide.value + "px";
}

bottomRightSlide.oninput =() => {
    vinayaka.style.borderBottomRightRadius = bottomRightSlide.value + "px";
}

//vinayaka position slider
xdir.value=0;
ydir.value=0;
xdir.oninput = () => {
    vinayaka.style.transform = `translate(${xdir.value}px, ${ydir.value}px)`;
}


ydir.oninput = () => {
    vinayaka.style.transform = `translate(${xdir.value}px, ${ydir.value}px)` ;
}

// setting images as background

bg1.onclick = () => {
    document.body.style.background = `url(images/bg1.jpeg) no-repeat`;
    document.body.style.backgroundSize = "100% 200%" ;
}

bg2.onclick = () => {
    document.body.style.background = `url(images/bg2.jpeg) no-repeat`;
    document.body.style.backgroundSize = "100% 200%" ;
}

bg3.onclick = () => {
    document.body.style.background = `url(images/bg3.jpeg) no-repeat`;
    document.body.style.backgroundSize = "100% 200%" ;
}

//year

year.innerHTML = new Date().getFullYear();

// countdown

var targDate = new Date("September 13, 2023 23:59:59").getTime();

let countdown = setInterval(function () {
    let presentDate = new Date().getTime() ;
    let mixedSol = targDate - presentDate ;
    let dobirth = dob.value ;
    let calage = dobirth - presentDate ;
    let days = Math.floor(mixedSol / (1000 * 60 * 60 * 24));
    let hours = Math.floor((mixedSol % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((mixedSol % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((mixedSol % (1000 * 60)) / 1000);
    countDown.innerText = days + "Days" + " " + hours + "hours " + minutes + "minutes " + seconds + "seconds ";
    
})

// age calculation
dob.oninput = () => {
let Eyear = dob.value;
let x = new Date(Eyear)
let y= new Date();
let aYears = y.getFullYear() - x.getFullYear() ;
let aMonths = y.getMonth() - x.getMonth() ; 
let aDays = y.getDate() - x.getDate();
age.innerText = aYears + "years " + aMonths + "months " + aDays + "days" ;
}





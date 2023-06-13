let output = document.getElementById("value").value;
clear.onclick = () => {
    value.value = " ";
}

backSpace.onclick = () => {
    let output = value.value;
    value.value = output.substring(0, output.length - 1);
    
}

division.onclick = () => {
    addToResult("/");
}
multiply.onclick = () => {
    addToResult("&times;");
}
n7.onclick = () => {
    addToResult("7");
}
n8.onclick = () => {
    addToResult("8");
}
n9.onclick = () => {
    addToResult("9");
}
minus.onclick = () => {
    addToResult("-");
}
n4.onclick = () => {
    addToResult("4");
}
n5.onclick = () => {
    addToResult("5");
}
n6.onclick = () => {
    addToResult("6");
}
add.onclick = () => {
    addToResult("+");
}
n1.onclick = () => {
    addToResult("1");
}
n2.onclick = () => {
    addToResult("2");
}
n3.onclick = () => {
    addToResult("3");
}
zero.onclick = () => {
    addToResult("0");
}
dot.onclick = () => {
    addToResult(".");
}

equal.onclick = () => {
    value.value = eval(value.value);
    
}

function addToResult(num) {
    value.value = value.value + num ;
}


//digital time

setInterval(digitalTime , 1000) ;

function digitalTime() {
    let time = new Date() ;
    let hours = time.getHours();
    let minutes = time.getHours();
    let seconds = time.getSeconds();

    let amPm = "am" ;
    if(hours > 12) {
        hours -= 12 ;
        amPm = "pm" ;
    }

    if(hours == 0) {
        hours = 12;
        amPm = "am" ;
    }

    hours = hours < 10 ? "0" + hours : hours ;
    minutes = minutes < 10 ? "0" + minutes : minutes ;
    seconds = seconds < 10 ? "0" + seconds : seconds ;
     
    let displayTime = hours + ":" + minutes + ":" + seconds + amPm ;
    dTime.innerText = displayTime;
}


// form validation
// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var passd = document.contactForm.password.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = passwdError = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    //validate password
    if(passd == ""){
        printError("passwdErr","Please enter your password");
    }
    else {
            passwdError = false ;
    }

  
    
    // Validate country
    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr || genderErr || passwdError) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};

showpasswd.onclick = () => {
    if(showing.type == "password")
    {
        showing.type = "text" ;
    }
    else {
        showing.type = "password" ;
    }
};

//Currency Convertion

curConvert.onclick = () => {
let fromCur = fromCurrency.value;
let toCur = toCurrency.value;
let inputAmount = amount.value;
let indval = 1;
let usaval = 81.69 ;
let ukval = 98.34 ;

let calc = () => {
    switch(fromCur){
        case "India" :
            switch(toCur){
                case "India" :
                    //amount.value = amount.value * 10 ;
                    break;
                case "USA" :
                     amount.value = amount.value / usaval ;
                     break;
                case "UK" :
                     amount.value = amount.value / ukval ;
                     break;

            }
        case "USA" :
            switch(toCur){
                case "India" :
                    amount.value = amount.value * usaval ;
                    break;
                case "USA" :
                    //  amount.value = amount.value / usaval ;
                     break;
                case "UK" :
                     amount.value = amount.value * 0.83 ;
                     break;

            }
        case "UK" :
            switch(toCur){
                case "India" :
                    amount.value = amount.value * 98.34 ;
                    break;
                case "USA" :
                     amount.value = amount.value * 1.20 ;
                     break;
                case "UK" :
                     //amount.value = amount.value / ukval ;
                     break;

            }
            
    }
}

calc();


}

//Dark/white mode

darkWhiteMode.onclick = () => {
    document.body.classList.toggle("darkMode");
}

//alert & notification

//alert("this is a alert & notification task");

//loader

window.onload = () => {
    let timeout = setTimeout(showBody, 1000);
}

function showBody() {
    loadpos.style.display = "none";
    loaderBodyHide.style.display = "block";

}

//charCount

charcount.onclick = () => {
    charcount.innerText = chars.value.length;
};

//temp calc

tempF.oninput = () => {
    let temp = parseFloat(tempF.value);
    tempC.innerText = (temp - 32) / 1.8 ; 
}

// Guessing number

let tarGuess = Math.floor(Math.random()*10 +1);
let gCount = 0;
checkGuess.onclick = () => {
    let guessed = guess.value;
    gCount++ ;
    if(guessed == tarGuess)
    {
        alert(`Congratulations, you guessed in ${gCount} guesses`);
    }
    else
    {
        alert (`incorrect guess, try again`);
    }
}

//length converter

convLen.onclick = () => {
    let inpval = inpVal.value ;
    let fromL = fromLen.value ;
    let toL = toLen.value ; 
    switch(fromL){
        case "KM" :
            switch(toL){
                case "M":
                    inpVal.value *= 1000;
                    break;
                case "CM":
                    inpVal.value *= 100000;
                    break;          

            }
            break;
        case "M" :
            switch(toL)
            {
                case "KM" :
                    inpVal.value /= 1000;
                    break;
                case "CM" :
                    inpVal.value *= 100;
                    break;
            }
            break;

        case "CM" :
            switch(toL)
            {
                case "KM" :
                    inpVal.value /= 100000 ; 
                    break;
                case "M" :
                    inpVal.value /=100    
                    break;        
            }
            break;
    }
}

//background change after 3sec

// timedChange.onclick = setTimeout (bgChange, 3000);

function bgChange() {
    document.body.style.background = "url('nityamenon.png') no-repeat" 
    document.body.style.backgroundSize = "cover"
}

//speaking

function textToSpeach(message) {
    
}

textSpeak.onchange = () => {
    let msg = textSpeak.value;
    const speach = new SpeechSynthesisUtterance(msg);
    [speach.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(speach);
}

//searching

function searching() {
    let inp = searchStud.value;
    inp = inp.toLowerCase();
    let store = document.getElementsByClassName("passed");
    for(let i=0; i < store.length; i++) {
        if(!store[i].innerHTML.toLowerCase().includes(inp)) {
            store[i].style.display = "none";
        }
        else {
            store[i].style.display = "list-item" ;
        }
    }
}

//copying text

copy.onclick = () => {
    copyHere.select();
    copyHere.setSelectionRange(0,99999);

    navigator.clipboard.writeText(copyHere.value);
    notice.innerText = "text has been copied, to see effect paste (ctrl+v) somewhere else" ;

}

//keyboard keys name

key.onkeydown = (event) => {
    pressedKey.innerText = event.key;
}

//ludo dice 
 dice.onclick = () => {
    let v = Math.floor(Math.random()*7);
    dice.innerText = v ;
 }

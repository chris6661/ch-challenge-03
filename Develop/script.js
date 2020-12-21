// Assignment code here
var enter;
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmSymbol;
  //upper characters
  var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  //lower characters
  var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //numeric characters
  var number = ['0','1','2','3','4','5','6','7','8','9'];
  //symbol characters
  var symbol = ['!','@','#','$','%','^','&','*','+'];

  var choices;
  
  function generatePassword () {
    //user prompts
    enter = parseInt(prompt("How many characters would you like to include in your password? Please pick from 8-128."));
  
  if (!enter) {
    alert("You must pick a correct number.");
  } else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt("You must pick between 8-128 characters."));
  } else {
    confirmUppercase = confirm("Would you like to add uppercase letters?");
    confirmLowercase = confirm("Would you like to use lower case letters?");
    confrimNumber = confrim("Would you like to add numnbers?");
    confirmSymbol = confirm("Would you like to add special characters?");
  };
  } 
  //if invalid option
  if (upper != true && lower != true && number != true && symbol != true){
    alert("You must select at least one character type!")
  }
  //user picks 4
  else if (confirmUppercase && confirmLowercase && confirmNumber && confirmSymbol) {

    choices = symbol.concat(uppercase, lowercase, number,);
  }
      // user picks 3
      else if (confirmSymbol && confirmNumber && confirmUppercase) {
        choices = symbol.concat(number, uppercase);
    }
    else if (confirmSymbol && confirmNumber && confirmLowercase) {
        choices = symbol.concat(number, lowercase);
    }
    else if (confirmSymbol && confirmLowercase && confirmUppercase) {
        choices = symbol.concat(uppercase, lowercase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(uppercase, lowercase);
    }
    // user picks 2 
    else if (confirmSymbol && confirmNumber) {
        choices = symbol.concat(number);

    } else if (confirmSymbol && confirmLowercase) {
        choices = symbol.concat(lowercase);

    } else if (confirmSymbol && confirmUppercase) {
        choices = symbol.concat(uppercase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = number.concat(lowercase);

    } else if (confirmLowercase && confirmUppercase) {
        choices = lowercase.concat(uppercase);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(uppercase);
    }
    // user picks one
    else if (confirmSymbol) {
        choices = symbol;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = lowercase;
    }
    else if (confirmUppercase) {
      choices = uppercase;
    }

    var password = [];

    for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
    }
    var ps = password.join("");
    UserInput(ps);
      document.getElementById("password").textContent = ps;
    

    var copy = document.querySelector("#copy");
    copy.addEventListener("click", function () {
      copyPassword();
    });

    function copyPassword() {
      document.getElementById("password").select();
    }

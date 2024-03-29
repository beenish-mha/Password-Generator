var generatePassword = document.querySelector(".generatepassword");
var copyToClipboard = document.querySelector(".clipboard");
var yourSecurePassword = document.querySelector(".yoursecurepassword.value");
var specialCheck = /[" !"#$£%&'()*+,-./:;<=>?@[\]^_`{|}~"]+/;
var numbCheck = /[0123456789]/;
var lAlCheck = /[abcdefghijklmnopqrstuvwxyz]/;
var uAlCheck = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
var specialChar;
var numb;
var lAlpha;
var uAlpha;
var passwordArray = [];

//function to ckeck the special chracter entered and pushing into password array!
function checkSpecial() {
  specialChar = prompt('Check your Special Charater and try again');
  sc = specialCheck.test(specialChar);
  if (sc === false) {
    checkSpecial();
  }
  else {
    passwordArray.push(specialChar);
    return;
  }
}
//function to check the number entered and pushing into password array!
function checkNumb() {
  numb = prompt('Check your Number entry and try again');
  nc = numbCheck.test(numb);
  if (nc === false) {
    checkNumb();
  }
  else {
    passwordArray.push(numb);
    return;
  }
}

//function to check the lower case alphabet and pushing into password array!
function checkLalpha() {
  lAlpha = prompt('Please check the lower case entry and try again');
  var lac = lAlCheck.test(lAlpha);
  if (lac === false) {
    checkLalpha();
  }
  else {
    passwordArray.push(lAlpha);
    return;
  }
}

// function to check the upper case alphabet and pushing into password array!
function checkUalpha() {
  uAlpha = prompt('Please check the Upper case entry and try again');
  var uac = uAlCheck.test(uAlpha);
  if (uac === false) {
    checkUalpha();
  }
  else {
    passwordArray.push(uAlpha);
    return;
  }
}

//function to creat a random password generating with the user input.
function radomPassword(passwordArray) {

  var i, x, j;
  var arrayLength = passwordArray.length;
  for (i = 0; i < arrayLength; i++) {
    j = Math.floor(Math.random() * arrayLength);
    x = passwordArray[i];
    passwordArray[i] = passwordArray[j];
    passwordArray[j] = x;
  }
  return passwordArray;
}

//displaying random password on the page.
function showPassword() {
  var newPass = radomPassword(passwordArray);
  newPassword = newPass.join("");
  document.inputform.txt.value = newPassword;
  event.preventDefault();
}

//calling generate button.
generatePassword.addEventListener("click", function () {

  alert("length of your password must b between 8 and 128");

  //checking user enrty and pusing in an array
  specialChar = prompt('Enter any special characters');
  if (specialChar === null) {
    return;
  }
  var sc = specialCheck.test(specialChar);
  if (sc === false) {
    checkSpecial();
  }
  else {
    passwordArray.push(specialChar);
  }

  numb = prompt('Enter any numbers');
  if (numb === null) {
    return;
  }
  var nc = numbCheck.test(numb);
  if (nc === false) {
    checkNumb();
  }
  else {
    passwordArray.push(numb);
  }

  lAlpha = prompt('Enter any lower case alpabet');
  if (lAlpha === null) {
    return;
  }
  var lac = lAlCheck.test(lAlpha);
  if (lac === false) {
    checkLalpha();
  }
  else {
    passwordArray.push(lAlpha);
  }

  uAlpha = prompt('Enter any uppercase alphabet');
  if (uAlpha === null) {
    return;
  }
  var uac = uAlCheck.test(uAlpha);
  if (uac === false) {
    checkUalpha();
  }
  else {
    passwordArray.push(uAlpha);
  }
  //check the length of array.
  var newP = passwordArray.join("");
  if (newP.length < 8 || newP.length > 128) {
    alert ("please check the length of your password and try again");
  }
  else {
    //calling the function which show result in the readonly text-box.
  showPassword();
  }
}) 

//calling copy on clipboard button
copyToClipboard.addEventListener("click", function () {
  var copyText = document.inputform.txt.value;
  // using the Clipboard API.
  navigator.clipboard.writeText(copyText).then();
  alert(copyText + " " + "is been added to your clipboard");
})

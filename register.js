var flag;

// if (performance.navigation.type == 1) {
function reset(){
  document.getElementById('form').reset();
}

function want_admin() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");
  var reg_btn = document.getElementById("reg_btn");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "none";
    reg_btn.style.left = "230px";
    flag = 1;
  }
  else{
    text.style.display = "block";
    reg_btn.style.left = "800px";
    flag = 0;
  }

}

function validateEmail(email){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // var x = document.forms["form"]["email"];
    if(email.value==""){
      email.setCustomValidity("Please fill out this field.");
      return false;
    }
    if (reg.test(email.value) == false)
    {
        email.setCustomValidity("Invalid Email");
        return false;
    }
    else {
      email.setCustomValidity("");
    }
    return true;
}

function validatePassword() {
  var pass1 = document.getElementById("password").value;
  var pass2 = document.getElementById("password_confirmation").value;
  // alert(pass1 + pass2);
  if(pass1 != pass2){
    document.getElementById("password_confirmation").setCustomValidity("Passwords don't Match");
    return false;
  }
  document.getElementById("password_confirmation").setCustomValidity('');
  return true;
}

function validateContact(contact){
    var reg = /^[0-9]{10}$/;
    // var x = document.forms["form"]["number"];
    if(contact.value==""){
      contact.setCustomValidity("Please fill out this field.");
      return false;
    }
    if (reg.test(contact.value) == false)
    {
        contact.setCustomValidity("Invalid Contact (10 digits required)");
        return false;
    }
    contact.setCustomValidity("");
    return true;
}

function validateAge(age){
    if (flag == 1)
      return true;
    var reg = /^[0-9]{1,2}$/;
    // var x = document.forms["form"]["age"];
    if(age.value==""){
      age.setCustomValidity("Please fill out this field.");
      return false;
    }
    if (reg.test(age.value) == false || age.value=='0' || age.value=="00")
    {
        age.setCustomValidity("Invalid Age");
        return false;
    }
    age.setCustomValidity("");
    return true;
}

function validateCGPA(cgpa){
    if (flag == 1)
      return true;

    var reg = /^([0-9])+\.+[0-9]$/;
    // var x = document.forms["form"]["cgpa"];
    if(cgpa.value==""){
      cgpa.setCustomValidity("Please fill out this field.");
      return false;
    }
    if (reg.test(cgpa.value) == false)
    {
        cgpa.setCustomValidity("Invalid CGPA, Format Example: 9.0");
        return false;
    }
    cgpa.setCustomValidity("");
    return true;
}

function validateForm(){
  var email = document.forms["form"]["email"];
  var email_returned = validateEmail(email);
  if(email_returned == false){
    email.innerHTML="";
    return false;
  }

  var contact = document.forms["form"]["number"];
  var contact_returned = validateContact(contact);
  if(contact_returned == false)
    return false;

  var password_returned = validatePassword();
  if(password_returned == false)
    return false;

  var age = document.forms["form"]["age"];
  var age_returned = validateAge(age);
  if(age_returned == false)
    return false;

  var cgpa = document.forms["form"]["cgpa"];
  var cgpa_returned = validateCGPA(cgpa);
  if(cgpa_returned == false)
    return false;

  return true;
}

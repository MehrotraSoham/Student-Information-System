var flag;

function loadFile(event){
  var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
}

function reset(){
  document.getElementById('form').reset();
  window.location.reload();
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
      email.style.background="#e88f91";
      email.setCustomValidity("Please fill out this field.");
      return false;
    }
    if (reg.test(email.value) == false)
    {
        email.style.background="#e88f91";
        email.setCustomValidity("Invalid Email");
        return false;
    }
    else {
      email.setCustomValidity("");
      email.style.background="#ccffcc";
    }
    return true;
}

function validatePassword() {
  var pass1 = document.getElementById("password");
  var pass2 = document.getElementById("password_confirmation");
  // alert(pass1 + pass2);
  if(pass1.value != pass2.value || pass1.value==""){
    pass1.style.background="#e88f91";
    pass2.style.background="#e88f91";
    document.getElementById("password_confirmation").setCustomValidity("Passwords don't Match");
    return false;
  }
  pass1.style.background="#ccffcc";
  pass2.style.background="#ccffcc";
  document.getElementById("password_confirmation").setCustomValidity('');
  return true;
}

function validateContact(contact){
    var reg = /^[0-9]{10}$/;
    // var x = document.forms["form"]["number"];
    if(contact.value==""){
      contact.style.background="#e88f91";
      contact.setCustomValidity("Please fill out this field.");
      return false;
    }
    if (reg.test(contact.value) == false)
    {
        contact.style.background="#e88f91";
        contact.setCustomValidity("Invalid Contact (10 digits required)");
        return false;
    }
    contact.setCustomValidity("");
    contact.style.background="#ccffcc";
    return true;
}

function validateRoll(roll){
    if (flag == 1)
      return true;
    var reg = /^([0-9]{2})+([A-Z]{2})+([0-9]{4})$/;
    // var x = document.forms["form"]["age"];
    if(roll.value==""){
      roll.style.background="#e88f91";
      roll.setCustomValidity("Please fill out this field.");
      return false;
    }
    if (reg.test(roll.value) == false)
    {
        roll.style.background="#e88f91";
        roll.setCustomValidity("Invalid Roll Number, Format:16IT8035");
        return false;
    }
    roll.style.background="#ccffcc";
    roll.setCustomValidity("");
    return true;
}

function validateAge(age){
    if (flag == 1)
      return true;
    var reg = /^[0-9]{1,2}$/;
    // var x = document.forms["form"]["age"];
    if(age.value==""){
      age.style.background="#e88f91";
      age.setCustomValidity("Please fill out this field.");
      return false;
    }
    if (reg.test(age.value) == false || age.value=='0' || age.value=="00")
    {
        age.style.background="#e88f91";
        age.setCustomValidity("Invalid Age");
        return false;
    }
    age.style.background="#ccffcc";
    age.setCustomValidity("");
    return true;
}

function validateCGPA(cgpa){
    if (flag == 1)
      return true;

    var reg = /^([0-9])+\.+[0-9]$/;
    // var x = document.forms["form"]["cgpa"];
    if(cgpa.value==""){
      cgpa.style.background="#e88f91";
      cgpa.setCustomValidity("Please fill out this field.");
      return false;
    }
    if (reg.test(cgpa.value) == false)
    {
        cgpa.style.background="#e88f91";
        cgpa.setCustomValidity("Invalid CGPA, Format Example: 9.0");
        return false;
    }
    cgpa.style.background="#ccffcc";
    cgpa.setCustomValidity("");
    return true;
}

function validateName(f_name){
  if(f_name.value=="")
  {
    f_name.style.background="#e88f91";
    f_name.setCustomValidity("Please fill out this field.");
    return false;
  }
  f_name.style.background="#ccffcc";
  f_name.setCustomValidity("");
  return true;
}

function validateForm(){
  var name = document.forms["form"]["f_name"];
  var name_returned = validateName(name);
  if(name_returned == false)
    return false;

  var usrnm = document.forms["form"]["usrnm"];
  var usrnm_returned = validateName(usrnm);
  if(usrnm_returned == false)
    return false;

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

  var roll = document.forms["form"]["roll"];
  var roll_returned = validateRoll(roll);
  if(roll_returned == false)
    return false;

  var cgpa = document.forms["form"]["cgpa"];
  var cgpa_returned = validateCGPA(cgpa);
  if(cgpa_returned == false)
    return false;


  return true;
}

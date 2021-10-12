function openNav() {
  document.getElementById("sideNavbar").style.width = "250px";
  }
function closeNav() {
  document.getElementById("sideNavbar").style.width = "0";
  }


function inputFirstName() {
  var fName = document.getElementById("inputFirstName").value;
  if (fName != "") {
    return true;
  } else {
    return false;
  }
}

function inputLastName() {
  var lName = document.getElementById("inputLastName").value;
  if (lName != "") {
  return true;
    } else {
      return false;
    }
}

function inputEmail() {
  var eMail = document.getElementById("inputEmail").value;
  if (eMail != "") {
  return true;
    } else {
      return false;
    }
  }

function submit(){
  if (inputFirstName() && inputLastName() && inputEmail() == true){
    alert ("Thank you!");
    } else {
    alert ("Please fill up the fields.");
    }
  }




  

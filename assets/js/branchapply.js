$(document).ready(function () {
  $(".branchapply__thana").select2();
});
//Branch apply multi step form start

var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    alert("form submitted successfully");
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
      return false;
    }
  }

  const radioGroup = document.querySelectorAll('input[name="experience"]');
  let selectedValue = "";
  let radioLabel = document.querySelector(".radio__label");

  for (const radioButton of radioGroup) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
      break;
    }
  }

  if (selectedValue === "Yes") {
    radioLabel.style.color = "black";
    valid = true;
  } else if (selectedValue === "No") {
    radioLabel.style.color = "black";
    valid = true;
  } else {
    radioLabel.style.color = "red";
    valid = false;
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

//Branch apply multi step form end

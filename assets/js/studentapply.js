$(document).ready(function () {
  $("#thana").select2();
  $("#course").select2();
});

// let form = document.querySelector(".studentapply__form");
// let inputElem = document.querySelectorAll(".studentapply__form input");

// form.addEventListener("submit", function (event) {
//   if (!validForm()) {
//     event.preventDefault();
//     return false;
//   }

//   alert("Form submitted successfully");
// });

// function validForm() {
//   let thana = document.getElementById("thana").value;
//   let subject = document.getElementById("subject").value;
//   let valid = true;

//   for (i of inputElem) {
//     if (i.value == "") {
//       i.setAttribute("class", "invalid");
//       valid = false;
//     } else if (i.name == "phone") {
//       let isPhoneValid = /^(?:\+?88|0088)?01[15-9]\d{8}$/;
//       if (!i.value.match(isPhoneValid)) {
//         i.setAttribute("class", "invalid");
//         valid = false;
//       }
//     } else if (i.name == "email") {
//       let isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       if (!i.value.match(isValidEmail)) {
//         i.setAttribute("class", "invalid");
//         valid = false;
//       }
//     }
//   }

//   if (thana == "") {
//     document.getElementById("thana").setAttribute("class", "invalid");
//     valid = false;
//   }

//   if (subject == "") {
//     document.getElementById("subject").setAttribute("class", "invalid");
//     valid = false;
//   }

//   return valid;
// }

//Branch apply multi step form end

// display bkash info if course is online
const radioGroup = document.querySelectorAll('input[name="coursetype"]');
let selectedValue = "";
let bkashInfo = document.querySelector(".bkash");

for (const radioButton of radioGroup) {
  radioButton.addEventListener("click", function () {
    if (radioButton.checked) {
      selectedValue = radioButton.value;

      if (selectedValue === "Online") {
        bkashInfo.style.display = "block";
      } else {
        bkashInfo.style.display = "none";
      }
    }
  });
}

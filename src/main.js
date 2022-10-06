// alt + shift + f    => Format the code

//import "./styles.css";

const app = document.getElementById("app");
const myForm = document.createElement("form");

myForm.setAttribute("id", "form");
app.appendChild(myForm);

const URL_BASE = "https://jonathan-robles.github.io/api/txt.json";

fetch(URL_BASE)
  .then((res) => res.json())
  .then((data) => {
    for (const key in data) {
      const mainDiv = document.createElement("div");
      const lblSpan = document.createElement("span");
      const input = document.createElement("input");
      // Set attributes
      mainDiv.setAttribute("class", "main-box input-group input-group-sm");

      input.setAttribute("name", key);
      input.setAttribute("class", "form-control");

      lblSpan.textContent = key + " :";
      lblSpan.setAttribute("class", "input-group-text bold");

      // Append elements
      mainDiv.appendChild(lblSpan);

      if (Array.isArray(data[key]) === true) {
        data[key].forEach((arr) => {
          const inpBox = document.createElement("div");
          const radioInp = document.createElement("input");
          const span = document.createElement("span");
          // Set attributes
          inpBox.setAttribute("class", "inp-box input-group-text");
          radioInp.setAttribute("name", key);
          radioInp.setAttribute("value", arr);
          radioInp.setAttribute("type", "radio");

          span.setAttribute("class", "input");
          span.textContent = arr;
          if (key == "Certifications") {
            radioInp.removeAttribute("name");
            mainDiv.setAttribute("id", "certifications");
          }

          if (key == "Experience") {
            radioInp.removeAttribute("name");
            mainDiv.setAttribute("id", "experience");
          }
          // Append elements
          inpBox.appendChild(span);
          inpBox.appendChild(radioInp);

          mainDiv.appendChild(inpBox);
          myForm.appendChild(mainDiv);
        });
      } else {
        mainDiv.appendChild(input);
        form.appendChild(mainDiv);
      }
    }
    const subInput = document.createElement("button");
    subInput.innerHTML = "Submit";
    subInput.setAttribute("type", "submit");
    subInput.setAttribute("class", "btn btn-primary");

    myForm.appendChild(subInput);
  });

const form = document.getElementById("form");
const myPrompt = document.getElementById("prompt");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const cert = document
    .getElementById("certifications")
    .getElementsByTagName("input");
  let certificationsTxt = "Certifications : ";

  for (const prop in cert) {
    if (cert[prop].checked == true) {
      certificationsTxt += ` ${cert[prop].value}, `;
    }
  }

  const exp = document
    .getElementById("experience")
    .getElementsByTagName("input");
  let experienceTxt = "Experience : ";

  for (const prop in exp) {
    if (exp[prop].checked == true) {
      experienceTxt += ` ${exp[prop].value}, `;
    }
  }

  const result = new FormData(form);
  let x = [...result];
  let promp = "";

  x.forEach(function (y) {
    promp += `  ${y[0]} : ${y[1]}  <br>`;
  });
  myPrompt.innerHTML = `${promp}  ${certificationsTxt} <br> ${experienceTxt}`;
});

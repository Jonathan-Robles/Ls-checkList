// import "./styles.css";

const app = document.getElementById("app");

const myForm = document.createElement("form");
myForm.setAttribute("id", "form");
app.appendChild(myForm);

const URL_BASE = "https://jonathan-robles.github.io/api/txt.json";

fetch(URL_BASE)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);

    for (const key in data) {
      
        const label = document.createElement("label");
        const input = document.createElement("input");
        const mainBox = document.createElement("div");

        mainBox.setAttribute('class','main-box');
        input.setAttribute('name', key);
        label.textContent = key + ' :';
// Append elements            
        mainBox.appendChild(label);
// Set attributes
        if (Array.isArray(data[key]) === true) {

              data[key].forEach((arr)=>{
                console.log(arr);
                console.log(key);
                console.log(arr);
                const inpBox = document.createElement("div");
                const radioInp = document.createElement("input");
                const span = document.createElement("span");
// Set attributes              
                inpBox.setAttribute('class','inp-box');
                radioInp.setAttribute('name', key);
                radioInp.setAttribute('value', arr);
                radioInp.setAttribute('type', 'radio');
                span.textContent = arr;
// Append elements                  
                inpBox.appendChild(span);
                inpBox.appendChild(radioInp);
                mainBox.appendChild(inpBox);
                myForm.appendChild(mainBox);
                
              })
                
              }else{
                mainBox.appendChild(input);
                form.appendChild(mainBox);
                
              }
       
              myForm.innerHTML += "<br>";       
      
    }
    const subInput = document.createElement("button");
    subInput.innerHTML = 'sub';
    subInput.setAttribute("type", "submit");
    myForm.appendChild(subInput);

  });

  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = new FormData(form);
    
    let x = [...result];
      console.log(x);
      x.forEach(function(y){
        console.log()
          document.body.innerHTML +=`  ${y[0]} : ${y[1]}  <br>`;
      })
  });  

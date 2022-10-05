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
      
      const mainDiv = document.createElement("div");
        const lblSpan = document.createElement("span");
        const input = document.createElement("input");

        mainDiv.setAttribute('class','main-box input-group input-group-lg');

        input.setAttribute('name', key);
        input.setAttribute('class', 'form-control');

        lblSpan.textContent = key + ' :';
        lblSpan.setAttribute('class', 'input-group-text')
        
// Append elements            
        mainDiv.appendChild(lblSpan);
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
                inpBox.setAttribute('class','inp-box input-group-text');
                radioInp.setAttribute('name', key);
                radioInp.setAttribute('value', arr);
                radioInp.setAttribute('type', 'radio');
                span.setAttribute('class', 'i')
                span.textContent = arr;
// Append elements                  
                inpBox.appendChild(radioInp);
                inpBox.appendChild(span);
                mainDiv.appendChild(inpBox);
                myForm.appendChild(mainDiv);
              })
                
              }else{
                mainDiv.appendChild(input);
                form.appendChild(mainDiv);
                
              }
    }
    const subInput = document.createElement("button");
    subInput.innerHTML = 'Submit';
    subInput.setAttribute("type", "submit");
    subInput.setAttribute("class", "btn btn-primary");

    myForm.appendChild(subInput);

  });

  const form = document.getElementById("form");
  const myPrompt = document.getElementById("prompt");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = new FormData(form);
    
    let x = [...result];
    let promp = '';
      console.log(x);
      x.forEach(function(y){
        console.log()
        promp +=`  ${y[0]} : ${y[1]}  <br>`;
          
      })
      myPrompt.innerHTML = promp;
  });  

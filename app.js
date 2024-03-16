// count value monitor variable
let currentValue = 0;

// Button elements
const decBtn = document.querySelector(".dec-btn");
const incBtn = document.querySelector(".inc-btn");
const clrBtn = document.querySelector(".clr-btn");
// text container
const countText = document.querySelector(".counter-text");
countText.innerHTML = `Your Current Count is : <div class="ans">${currentValue}</div>`;

// count value container
const countNum = document.querySelector(".ans");
// error container
const errorText = document.querySelector(".error-text");
// countNum.innerText = currentValue;
errorText.innerHTML = "";

// decrement event handler
decBtn.addEventListener("click", (e) => {
  // countText.innerHTML = '';
  if (currentValue < 1) {
    errorText.innerHTML = "Error : Cannot go below 0";
    return;
  }
  errorText.innerHTML = "";
  countText.innerHTML = `Your Current Count is : <div class="ans">${--currentValue}</div>`;
  checkValClear();
});

// increment event handler
incBtn.addEventListener("click", (e) => {
  errorText.innerHTML = "";
  countText.innerHTML = `Your Current Count is : <div class="ans">${++currentValue}</div>`;
  checkValClear();
});

// Clear button event handler
clrBtn.addEventListener("click", (e) => {
  errorText.innerHTML = "";
  if (currentValue == 0) {
    return;
  }
  currentValue = 0;
  countText.innerHTML = `Your Current Count is : <div class="ans">${currentValue}</div>`;
});

function checkValClear() {
  const clearBtn = document.querySelector(".clr-btn");
  if (currentValue > 1) {
    clearBtn.style.display = "block";
  } else if(currentValue<1){
    clearBtn.style.display = "none";
  }
}

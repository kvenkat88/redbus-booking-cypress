// cy.clock() overrides native global functions related to time allowing them to be controlled synchronously via cy.tick() or the yielded clock object. This includes controlling:

// setTimeout
// clearTimeout
// setInterval
// clearInterval
// Date Objects


//https://developer.mozilla.org/en-US/docs/Web/API/setInterval


// setInterval(code)
// setInterval(code, delay)

// setInterval(func)
// setInterval(func, delay)
// setInterval(func, delay, arg0)
// setInterval(func, delay, arg0, arg1)
// setInterval(func, delay, arg0, arg1, /* … ,*/ argN)

//myInterval = setInterval(function, milliseconds);
a=2
b=3

function addition(a,b){
    console.log(a+b)
}
setInterval(function(){
    console.log(a+b)
}, 2000)

let timeout;

//
function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}

// Using setInterval() and clearInterval() to create a dynamic progress bar:
function move() {
    const element = document.getElementById("myBar");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++;
        element.style.width = width + '%';
      }
    }
  }
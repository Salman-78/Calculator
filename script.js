let string = "";
let input = document.getElementById("ipid");
let buttons = document.querySelectorAll("button");
let arr = Array.from(buttons);

arr.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
        try {
         // Convert the result back to string
          string = eval(string).toString(); 
          input.value = string;
        } catch {
          input.value = "Error";
          string = "";
        }
    } 
    else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } 
    else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } 
    else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});






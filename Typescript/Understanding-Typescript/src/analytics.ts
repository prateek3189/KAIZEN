let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
}

sendAnalytics('The Data');


function clickHandler(message: string) {
  console.log('Clicked: ' + message);
}

const button = document.querySelector("button")! as HTMLInputElement;
if(button) {
  button.addEventListener("click", clickHandler.bind(null, "Button"));
}

// function add (n1: number, n2: number) {
//   if(n1 + n2 > 0) {
//     return n1 + n2;
//   }
// }
let userInput: unknown;
let username: string;

userInput = 5;
userInput = "Prateek";

if(typeof userInput === "string") {
  username = userInput;
}

function generateError(message: string, code: number): never { // When it never returns anything
  throw { message, errorCode: code };
  // while(true) {}
}

generateError("An error occurred!!!", 500);

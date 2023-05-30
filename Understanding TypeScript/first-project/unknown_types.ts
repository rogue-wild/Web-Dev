let userInput: unknown; //unknown type it differs from any type
let userName: string;

userInput = 5;
userInput = "max";

if(typeof userInput ==="string"){
    userName = userInput;
}

function generateError(message: string, code: number): never{ //This never returns anything
    throw {message: message, errorCode: code};
    // while(true){}
}

generateError("An error occured!", 500);
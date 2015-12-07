function tryMe (param1, param2) {
    return(param1 + " and " + param2);
}

function callbackTester (callback) {
 
 console.log(arguments[0]);
 var received =     callback (arguments[1], arguments[2]);
 
 console.log(received);
}

callbackTester (tryMe, "hello", "goodbye");

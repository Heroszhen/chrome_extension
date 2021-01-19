var email = document.getElementById("login_field") || document.getElementById("email");
if(email)email.value = "";
var password = document.getElementById("password") || document.getElementById("pass");
if(password)password.value = "";

function setEmail(emailv){
    let tab = emailv.split(";");
    email.value = tab[0];
    password.value = tab[1];
}

/*
email.addEventListener('mousemove', () => {
    document.getElementById("login_field").value = "ooo";
});*/

chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "paste") {
            
            setEmail(request.data);
        }else if(request.action == "taketoken"){
            chrome.storage.sync.get('token', function(result) {
                console.log('Value currently is ' + result.key);
                sendResponse(result.token);
            });
        }else if(request.action == "settoken"){
            chrome.storage.sync.set({"token": request.data},function(){
                chrome.storage.sync.get('token', function(result) {
                    console.log('Value currently is ' + result.token);
                    sendResponse(result.token);
                });
            });
            sendResponse(request.data);
            //sendResponse(request.data); 
        }
    }
);

var email = document.getElementById("login_field") || document.getElementById("email");
email.value = "zhen";
var password = document.getElementById("password") || document.getElementById("pass");
password.value = "zhen";

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
        if (request.action === "paste") {/*
            // 收到paste消息和之前抓取的值
            var ctrl = $("#input");
            if (ctrl.length > 0) {
            // 将值放入目标网页的id为input的输入框中
                ctrl.val(request.data);
                
            } else {
                alert("No data");
            }*/
            setEmail(request.data);
        }
    }
);

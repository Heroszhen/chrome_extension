$( document ).ready(function() {
    /*
    $.ajax({
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $("#zcontainer").text("");
            let results = data["results"];
            results.forEach(elm =>{
                let input = "<input class='oneuser' value='"+elm["email"]+"'>";
                $("#zcontainer").append(input);
            });
        }
    });*/
    $.ajax({
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $("#zcontainer").text("");
            let results = data["results"];
            results.forEach(elm =>{
                let div = "<div class='oneuser'>"+elm['email']+";"+elm['phone']+"</div>";
                $("#zcontainer").append(div);
            });
        }
    });
});

/*
$("#zcontainer").on("click",".oneuser",function(){
    let email = $(this).val();
    $("#emailchosen").text(email);
    var CopyText = this;
    CopyText.select();
    document.execCommand("copy");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // envoyer les datas récupérés à background2.js
        chrome.tabs.sendMessage(tabs[0].id, { action: "paste", data: email }, function (response) {
            //window.confirm(response);
        });
    });
});*/

$("#zcontainer").on("click",".oneuser",function(){
    let email = $(this).text();
    $("#emailchosen").text(email);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // envoyer les datas récupérés à background2.js
        chrome.tabs.sendMessage(tabs[0].id, { action: "paste", data: email }, function (response) {
            //window.confirm(response);
        });
    });
});

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

    /*
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
    });*/

    $("#part1").css("display","none");

    chrome.storage.sync.get('token', function(result) {
        let token = result.token;console.log(token)
        if(token == undefined || token == ""){
            //window.confirm(response);
            $("#part1").css("display","block");
        }else{
            $.ajax({
                url: 'https://randomuser.me/api/?results=10',
                dataType: 'json',
                success: function(data) {
                    //console.log(data);
                    $("#zcontainer").text("");
                    let results = data["results"];
                    results.forEach(elm =>{
                        let div = "<div class='oneuser'>"+elm['email']+";"+elm['phone']+"</div>";
                        $("#zcontainer").append(div);
                    });
                }
            });
        }
    });

    
/*
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // envoyer les datas récupérés à background2.js
        chrome.tabs.sendMessage(tabs[0].id, { action: "taketoken", data: "ddd" }, function (response) {

            
            if(response == undefined || response == ""){
                //window.confirm(response);
                $("#part1").css("display","block");
            }else{
                $.ajax({
                    url: 'https://randomuser.me/api/?results=10',
                    dataType: 'json',
                    success: function(data) {
                        //console.log(data);
                        $("#zcontainer").text("");
                        let results = data["results"];
                        results.forEach(elm =>{
                            let div = "<div class='oneuser'>"+elm['email']+";"+elm['phone']+"</div>";
                            $("#zcontainer").append(div);
                        });
                    }
                });
            }
        });
    });*/
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
});
*/
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

$("#submit").click(function(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    //url
    //....
    window.confirm("Mail: "+email.value+" ; Mot de passe :"+password.value+"; Token : phptoken");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // envoyer les datas récupérés à background2.js
        chrome.tabs.sendMessage(tabs[0].id, { action: "settoken", data: "phptoken" }, function (response) {
            
            $("#part1").css("display","none");
            $.ajax({
                url: 'https://randomuser.me/api/?results=10',
                dataType: 'json',
                success: function(data) {
                    //console.log(data);
                    $("#zcontainer").text("");
                    let results = data["results"];
                    results.forEach(elm =>{
                        let div = "<div class='oneuser'>"+elm['email']+";"+elm['phone']+"</div>";
                        $("#zcontainer").append(div);
                    });
                }
            });
        });
    });

});
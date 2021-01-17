chrome.runtime.onInstalled.addListener(function(){
    alert("plugin installed");
});

/*
chrome.webNavigation.onCompleted.addListener(function(){
    alert("Une nouvelle page chargée");
    document.getElementById("login_field").value = "zhen";
},
{
    url:[
        {urlMatches:"youtube"}
    ]
}
);*/

chrome.webNavigation.onCompleted.addListener(function(){
    //alert("Une nouvelle page chargée");
    //document.getElementById("login_field").value = "zhen";
    //console.log("ok")
});
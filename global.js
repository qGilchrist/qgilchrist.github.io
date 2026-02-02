$(document).ready(function () {
    const date = new Date();
    console.log("Current Year: "+ date.getFullYear());
    getReadMe();

    $("#readMe").innerHTML = $("#readMe").innerHTML +"<br>"+ date.getFullYear();

});

function getReadMe() {
    $("#readMe").load("README.md", function(response, status, xhr){
    	console.log("getReadMe function log: status: "+ status+", xhr: "+xhr+" resp: "+response);
    });
}


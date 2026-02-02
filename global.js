$(document).ready(function () {
    const year = new Date().getFullYear();
    console.log("Current Year: "+ year);
    $("#date").innerHTML = year;
    getReadMe();
}
);

function getReadMe() {
    $("#readMe").load("README.md", function(response, status, xhr){
        
    console.log("getReadMe function log: status: "+ status+", xhr: "+xhr+" resp: "+response);
    });
}


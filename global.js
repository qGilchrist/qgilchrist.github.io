$(document).ready(function () {
    getReadMe();
    let date = Date().getFullYear();
    console.log("Date: "+date);
}
);

function getReadMe() {
    $("#readMe").load("README.md", function(response, status, xhr){
        
    console.log("getReadMe fucntion log: status: "+ status+", xhr: "+xhr+" resp: "+response);
    });
}


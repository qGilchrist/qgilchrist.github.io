$(document).ready(function () {
    getReadMe();
}
);

function getReadMe() {
    $("#readMe").load("README.md", function(response, status, xhr){
        
    console.log("getReadMe fucntion log: status: "+ status+", xhr: "+xhr+" resp: "+response);
    });
}


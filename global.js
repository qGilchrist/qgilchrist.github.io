$(document).ready(function () {
    getReadMe();
    let date = Date().getFullYear();
}
);

function getReadMe() {
    $("#readMe").load("README.md", function(response, status, xhr){
        
    console.log("getReadMe fucntion log: status: "+ status+", xhr: "+xhr+" resp: "+response);
    });
}


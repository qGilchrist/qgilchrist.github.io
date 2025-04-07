$(document).ready(function () {
    getReadMe();
}
);

function getReadMe() {
    $("#readMe").load("README.md", function(response, status, xhr){
        
    console.log("resp: "+response+", status: "+ status+", xhr: "+xhr);
    });
}


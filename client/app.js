function getBathValue() {
    var uiBATH = document.getElementsByName("uiBATH");
    for(var i in uiBATH){
        if(uiBATH[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; //invalid value
}
function getBHKValue(){
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i in uiBHK){
        if(uiBHK[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; //invalid value
}

function onClickedEstimatePrice(){
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathr = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");

    var url = "http://127.0.0.1:5000/predict_home_price";

    //to call predict http , use jquery post call

    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathr,
        location: location.value
    }, function(data,status){
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>"+data.estimated_price.toString()+" Lakh<h2>";
        console.log(status);
    });

}

function onPageLoad(){
    //1st task is to load all the location names dynamically on the page as soon as it loads

    console.log("document loaded");
    var url = "http://127.0.0.1:5000/get_location_names";
    //$-->Jquery
    $.get(url, function(data, status){
        //response from http get call(as seen in postman http testing) is saved in data variable
        console.log("got response for get_location_names request");
        if(data){
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations){
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
}

window.onload = onPageLoad;
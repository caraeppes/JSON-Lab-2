
var httpRequest = new XMLHttpRequest();

httpRequest.open("GET", "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD");
httpRequest.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var jsonData = JSON.parse(httpRequest.responseText)["data"];
        for(var i = 0; i < jsonData.length; i++){
            if(jsonData[i][10] == "Golden Gate Bridge"){
                document.getElementById('result').innerHTML += jsonData[i][8] +
                    "<br>Release Year: " + jsonData[i][9] +
                    "<br>Production Company: " +  jsonData[i][12] + "<br><br>";
            }
        }
    }
}
httpRequest.send();
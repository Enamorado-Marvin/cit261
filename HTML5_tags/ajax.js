function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
 
ajax_get('data.json', function(data) {
    
 
    var html = "<ul>";
       for (var i=0; i < data["videos"].length; i++) {
           html += '<li>' + 
           '<a href="'+ data["videos"][i]["url"] + '">'
           + '<img src="'+ data["videos"][i]["thumb"] + '" width="120">'
           + '<p id="titl">' + data["videos"][i]["title"] + "<br>" + data["videos"][i]["subtitle"] + "</p></a></li>"
           + '<div class="clean"></div>' + "<hr>";
       }
    html += "</ul>";

    document.getElementById("text").innerHTML = html;


});
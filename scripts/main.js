function httpGet(url, key, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, true);
    xmlHttp.setRequestHeader('X-Api-Key', key);
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.onload = function () {
       //pasem el retorn a la funció callback
       callback(this.responseText);
    };
    xmlHttp.onerror = function () {
       document.getElementById('txt1').innerHTML =
       "hi ha hagut un error en la consulta a l'API";
    };
    xmlHttp.send();
 }
  
 function testingAPI() {
    var key = 'i8Z5zvSXTy9PtGhtfAtpEa3d4Fsc5ZkX5Z3iBcoF';
    var url = 'https://api.meteo.cat/pronostic/v1/municipal/250019';
    httpGet(url, key, function (data) {
       //TODO data té els valors del retorn de la consulta a l'API, en aquest cas els mostrem per pantalla en plà i en la consola del navegador
       document.getElementById('txt1').innerHTML = data;
       console.log(data);
    });
 }

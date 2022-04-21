import fetch from 'node-fetch';
var jsonObj;
    fetch("https://sfrs-j75dy.ondigitalocean.app/api/listDistricts", {method:'POST'})
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(DisplayData(json))
    })
    .catch(error => console.log('error', error));

function list()
{
    
    for(var i = 0; i < jsonObj.data.length; i++)
    {
        var DisplayData = "Ditricr name        Province\n";
        DisplayData += jsonObj.data[i].name+"        "+jsonObj.data[i].province.name+"\n";
        jsonObj.data.DisplayData = "<th>Districts</th>        <th>Provinces</th>\n"
    }
    return DisplayData;
}
    
console.log(list());
const SqlDataPart = 0;
const SqlStatusPart = 1; //Though return ed in the resultset from SQL, not used here, included for possible future use
//const SqlRowDataPacket = 0;

var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server'));
var outputPath = path.resolve(__dirname, '../../common/models');
var ds = app.dataSources.TestDS;
var sql = "CALL API_GetAPItoDBDetails()";

ds.connector.query(sql, function(err, ReturnedData) {
    if (err) {
        console.log("Error:", err);
    }
    Records = ReturnedData[SqlDataPart];
    console.log("------------------------------------------------------------");
    for (var aRecord in Records) {
        console.log("---> CompletedOk = ", Records[aRecord].CompletedOk);
        console.log("---> APItoDBRoute = ", Records[aRecord].APItoDBRoute);
        console.log("---> SpoFieldNamesAndTypes = ");
        Parms = JSON.parse(Records[aRecord].SpoFieldNamesAndTypes);
        for (var aField in Parms) {
            console.log("    ---> Parm Name = ", Parms[aField].Name);
            console.log("    ---> Parm Type = ", Parms[aField].type);
            console.log("    ------------------------------------------------ ");
        }
        console.log("--------------------------------------------------------");
    }
});
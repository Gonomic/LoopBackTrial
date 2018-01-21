var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server'));
var outputPath = path.resolve(__dirname, '../../common/models');

var dataSource = app.dataSources.TestDS;

function schemaCB(err, schemas) {
    if (schemas) {
        //console.log("Auto discovery success: " + schema.name);
        console.log("Auto discovery success: ");
        //var outputName = outputPath + '/' + schema.name + '.json';
        var outputName = outputPath + '/modellen.json';
        //console.log("Sproc= ", schema.properties.apitodbId.mysql);
        fs.writeFile(outputName, JSON.stringify(schemas, null, 2), function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("JSON saved to " + outputName);
            }
        });
    }
    if (err) {
        console.error(err);
        return;
    }
    return;
};

dataSource.discoverAndBuildModels('APItoDB', { schema: 'humans' }, schemaCB);
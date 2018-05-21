var Ajv = require('ajv');
var ajv = new Ajv();
var schema=require('./schemas/page.json');
var data={
	"title":123
}

var valid = ajv.validate(schema, data);
if (!valid) console.log(ajv.errors);
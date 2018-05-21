var Ajv = require('ajv');
var schema = {
  "$id": "http://example.com/schemas/schema.json",
  "type": "object",
  "properties": {
    "foo": { "$ref": "defs.json#/definitions/int" },
    "bar": { "$ref": "defs.json#/definitions/str" }
  }
};
 
var defsSchema = {
  "$id": "http://example.com/schemas/defs.json",
  "definitions": {
    "int": { "type": "integer" },
    "str": { "type": "string" }
  }
};
var data={
	"foo":"test"
}
var ajv = new Ajv({schemas: [schema, defsSchema]});
var validate = ajv.getSchema('http://example.com/schemas/schema.json');
var valid=validate(data);

if(!valid){
	console.log(validate.errors);
}
var Ajv = require('ajv');
var ajv = new Ajv({ allErrors: true, jsonPointers: true });
require('ajv-errors')(ajv,{singleError: true});
var schema = {
  type: 'object',
  required: ['foo'],
  properties: {
    foo: { type: 'integer' }
  },
  additionalProperties: false,
  errorMessage: '必须是一个对象，且只有一个foo属性，foo的类型必须是整数-should be an object with an integer property foo only'
};
 
var validate = ajv.compile(schema);
console.log(validate({foo: 'a', bar: 2})); // false 
console.log(validate.errors); // processed errors 
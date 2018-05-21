var Ajv = require('ajv');
var ajv = new Ajv({ allErrors: true, jsonPointers: true });
require('ajv-errors')(ajv /*, {singleError: true} */ );

var schema = {
    "properties": {
        "bar": {
            type: "number",
            minimum: 100,
            errorMessage: {
                type: "请填写数量",
                minimum: "数量不能小于100"
            }
        },

        "foo": {
            type: "string",
            errorMessage: {
                type: "类型错误"
            }
        }
    }
};

var validate = ajv.compile(schema);

test({ "foo": 2, "bar": 4 });

function test(data) {
    var valid = validate(data);
    if (valid) console.log('Valid!');
    else console.log(validate.errors);
}
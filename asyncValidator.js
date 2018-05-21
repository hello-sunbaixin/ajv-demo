var schema = require('async-validator');
var descriptor = {
  name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
  input:[
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
}
var validator = new schema(descriptor);
validator.validate({name: "mu",input:''}, (errors, fields) => {
  if(errors) {
    // validation failed, errors is an array of all errors
    // fields is an object keyed by field name with an array of
    // errors per field
    console.log(errors);
    // return handleErrors(errors, fields);
  }
  // validation passed
});
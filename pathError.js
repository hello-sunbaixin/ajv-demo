var Ajv = require('ajv');
var ajv = new Ajv({jsonPointers: true});
var schema=require('./schemas/page.json');
var data={
	"title":"题目",
	"body":[{
		"type":"容器名称"
	}]
}

var valid = ajv.validate(schema, data);
if (!valid){
	var errors=ajv.errors;
	var dataPath=errors[0].dataPath;
	console.log('错误路径path----',dataPath);
	//通过path得到对应的json，可以借助object-path
	//处理dataPath的格式为object-path需要的格式
	// 例如/body/0/type => body.0.type
	var arr=dataPath.split('/');
	arr.splice(0,1);
	var handlePath=arr.join('.');
	console.log('处理过的path为---',handlePath);
    var objectPath = require("object-path");
    console.log('通过path得到对应的json',objectPath.get(data,handlePath))
}

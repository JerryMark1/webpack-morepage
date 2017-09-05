var path = require('path')
var ROOT = path.resolve(__dirname)

module.exports = {
	'page1/main': {
		"src": ROOT + "/src/page1/main",
		"tpl": "page1.html"
	},
	'index/main':{
		"src": ROOT + "/src/index/main",
		"tpl": "index.html"
	},
	'about/main':{
		"src": ROOT + "/src/about/main",
		"tpl": "about.html"
	},
	'about/detail':{
		"src": ROOT + "/src/about/detail",
		"tpl": "detail.html"
	}
}
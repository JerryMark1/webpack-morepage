// 为了支持修改模板文件文件时页面自动刷新
if(ENV == 'DEV') {
    require('pages/tpl/index.html')
}

import Vue from 'src/common/vue'   //直接在公用js引入
new Vue({
	el:'#main',
	data:{
		msg:'Hello world'
	}
});



console.log( 12313 );
$('#J-btn').on('click',function(){
	console.log( 1 );
})


import style from './style.css' // 引入css
import common from 'src/common' // 引入common模块

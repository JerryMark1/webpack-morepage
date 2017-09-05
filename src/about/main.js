// 为了支持修改模板文件文件时页面自动刷新
/*if(ENV == 'DEV') {
    require('pages/tpl/about.html')
}*/
console.log( 2 );
import style from './style.css' // 引入css
import {getQueryString} from 'src/common' // 引入common模块

console.log(getQueryString('a'));

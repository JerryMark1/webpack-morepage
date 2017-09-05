// 为了支持修改模板文件文件时页面自动刷新
if(ENV == 'DEV') {
    require('pages/tpl/page1.html')
}
import style from './style.css' // 引入css
import common from 'src/common' // 引入common模块
console.log(213);
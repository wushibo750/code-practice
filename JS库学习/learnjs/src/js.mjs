import dayjs from 'dayjs'
let date=dayjs().format('YYYY-MM-DD HH:mm')
console.log(date)

import JsCookie from "js-cookie";
JsCookie.set("name","value",{expires:7})  //有效期7天
console.log(JsCookie.get('name'))

import s from'qs'
console.log(s.parse('user=tom & age=22'))  //JSON变成对象
s.stringify({user:'tom',age:'22'})  //对象变成JSON
// import { base64 } from '../lib/index.js'
let { base64 } = require('../lib/index.js')
console.log(base64.myencode('123')) // 自定义加密  即错位加上base64
console.log(base64.encode('123')) // 常规的base64

console.log(base64.mydecode(base64.myencode('123'))) // 自定义解密  即错位加上base64
console.log(base64.decode(base64.encode('123'))) // 自定义解密  即错位加上base64

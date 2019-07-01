// var
var i = 10; //宣言ok
i = 11; //再代入ok
var i = 12; //再宣言ok(エラーとならない) 再宣言は可読性を下げる

// let
let j = 10; //宣言ok
j = 11; //再代入ok
// let j = 12; //再宣言ng

// const
const tax_rate = 0.08 //宣言ok
// tax_rate = 0.1 //再代入ng
// const taxt_rate = 1.2 //再宣言ng
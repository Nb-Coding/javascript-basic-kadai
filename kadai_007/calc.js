//変数numが3の倍数の場合： “3の倍数です”
//変数numが5の倍数の場合： “5の倍数です”
// 変数numが3と5の倍数の場合： “3と5の倍数です”
// それ以外の場合： 変数numを出力する

var num = Math.floor(Math.random() * 15) +1;
//console.log(num);

if (num % 15 == 0 ) {
    console.log('3と5の倍数です');
} else if (num % 5 == 0) {
    console.log('5の倍数です');
} else if (num % 3 == 0) {
    console.log('3の倍数です');
} else {
    console.log(num);
}
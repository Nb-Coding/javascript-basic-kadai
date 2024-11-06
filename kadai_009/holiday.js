//日本の祝日のデータが含まれた配列の要素を先頭から順番に全て取り出して、コンソールに出力する

const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

var count = holidays.length;

// for文の場合
for (var index = 0; index < count; index++) {
    console.log(holidays[index]);
}

// while文の場合
var index = 0;

while (index < count) {
    console.log(holidays[index]);
    index++;
}
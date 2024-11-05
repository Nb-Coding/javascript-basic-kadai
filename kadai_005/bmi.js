//体重：68kg
//身長：1.7m
//計算式：[体重(kg)]÷[身長(m)×身長(m)]

let userWeight = 68;
let userHeight = 1.7;

let userBmi = userWeight / (userHeight ** 2);

console.log(userBmi);

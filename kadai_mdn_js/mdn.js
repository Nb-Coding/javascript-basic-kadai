//今日の日付を取得する
getDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() +1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

console.log(getDateString());


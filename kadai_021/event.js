const btn = document.getElementById('btn');
const text = document.getElementById('text');

//非同期処理をして、非同期処理を使用して、2秒後に文章を書き換えよう

btn.addEventListener('click', ()=>{
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});
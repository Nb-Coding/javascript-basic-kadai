const changeBtn = document.getElementById('btn'); 
const text = document.getElementById('text');

changeBtn.addEventListener('click',()=>{
    text.textContent = 'ボタンをクリックしました';
});

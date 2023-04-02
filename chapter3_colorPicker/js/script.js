//コンソールにcolorPickerの値を表示
console.log(document.querySelector('#colorPicker').value);

//変数定義
const text = document.querySelector("#colorText");
const color = document.querySelector('#colorPicker');

//カラピッカーを操作した時に動作する関数
const colorBg =()=>{
    //選択した色を背景色に設定
    document.body.style.backgroundColor = color.value;
    //カラーコードを表示
    if(color.value==='#ffffff'){
        text.textContent=`カラーコード：${color.value}(白である)`;
    }else if(color.value==='#000000'){
        text.textContent=`カラーコード：${color.value}(黒である)`;
    }else{
        text.textContent=`カラーコード：${color.value}`;
    }
}

//操作部
color.addEventListener('input', colorBg);
//document.querySelector('#colorText').textContent=`カラーコード：${document.querySelector('#colorPicker').value}`;
//document.querySelector('#colorText').textContent='カラーコード：'+document.querySelector('#colorPicker').value;
//document.querySelector('#colorText').textContent='カラーコード：';
//document.querySelector('#colorText').innerHTML='<h1>カラーコード：</h1>';

console.log('読み込み完了');

/* 変数を日本語で
const 文 = document.querySelector("#colorText");
const 色 = document.querySelector('#colorPicker');
文.textContent=`カラーコード：${色.value}`;
*/
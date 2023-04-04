const loading = document.querySelector('#loading');

window.addEventListener('load',()=>{
    //ローディングが終わった時の処理
    loading.classList.add('loaded');
    console.log('loading done!');
})
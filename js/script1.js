function firstscript() {
    if(stamp1 == "true") {
        alert('既にスタンプを取得しているようです。');
              }else{
        alert('スタンプを取得しました！');
}
}
 window.onload = firstscript;

 Cookies.set('stamp1', 'true');

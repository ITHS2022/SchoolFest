const stamp1 = Cookies.get('stamp1');
const stamp2 = Cookies.get('stamp2');
const stamp3 = Cookies.get('stamp3');
const stamp4 = Cookies.get('stamp4');

if(stamp1 == "true") {
    document.stamp1.src = "https://github.com/ITHS2022/SchoolFest/blob/main/img/stamp/60th_logo1.png?raw=true";
}

if(stamp2 == "true") {
    document.stamp2.src = "https://github.com/ITHS2022/SchoolFest/blob/main/img/stamp/60th_logo2.png?raw=true";
}

if(stamp3 == "true") {
    document.stamp3.src = "https://github.com/ITHS2022/SchoolFest/blob/main/img/stamp/60th_logo3.png?raw=true";
}

if(stamp4 == "true") {
    document.stamp4.src = "https://github.com/ITHS2022/SchoolFest/blob/main/img/stamp/60th_logo4.png?raw=true";
}


function reset() {
    if (window.confirm('集めたスタンプを削除してもよろしいですか？もとには戻せません。')) {
        alert('削除しました');Cookies.remove('stamp1');Cookies.remove('stamp2');Cookies.remove('stamp3');Cookies.remove('stamp4');
        location.reload()
    }
  }

if(stamp1 == "true"){
    if(stamp2 == "true"){
        if(stamp3 == "true"){
            if(stamp4 == "true"){
                var mydiv = document.getElementById("main-text");
                mydiv.innerHTML = "<h1>スタンプがすべて揃いました！</h1>";
            }
        }
    }
}



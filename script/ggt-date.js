//前提宣言(複数のファンクションで使ったりするから)



function time(x){
    //変数宣言
    var now=new Date();
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var date=now.getDate();
    var day=now.getDay();
    var hh=now.getHours();
    var mm=("0"+now.getMinutes()).slice(-2);
    var ss=("0"+now.getSeconds()).slice(-2);
    var youbi=["日","月","火","水","木","金","土"][day];
    var zikan=document.getElementById('zikan');
    var apam=(hh<12)?"午前"+hh:"午後"+(hh-12);

    zikan.innerHTML=year+"年"+month+"月"+date+"日 "+youbi+"曜日\n"+apam+"時"+"("+hh+":"+mm+":"+ss+")";
    //もし日付が変わっていたり起動したてならweekly実行
    //x=1 || 5時丁度なら実行
    if(x==1 || ((hh==5) && (mm,ss==0))){
        weekly();
        loadCSSFile();
    }

    function weekly(){
        //変数宣言
        var i,j = 0;
        var r;
        //素材が取れる国の分だけ点灯させる
        var c = 5;
        //5時より前ならday(曜日)を1減らす
        var week=(hh<5)?(day-1):day;
        //日曜日の時の処理
        if(week==-1){week=6}

        var get = document.getElementById("weeklyget");
        //表の初期化
        for (i=1, r=4; i < r; i++){
            for (j=0; j < c; j++) {
            get.rows[i].cells[j].classList.remove('today');
            }

        }
        //曜日によって1行ごとに点灯
        if(week==1 ||week==4){
            i=1;
            r=2;
        } else if(week==2||week==5){
            i=2;
            r=3;
        } else if(week==3||week==6){
            i=3;
            r=4;

        } else if(week==0){
            i=1;
            r=4;
        }
        //表を点灯
        for (; i < r; i++){
            for (j=0; j < c; j++) {
            get.rows[i].cells[j].classList.add('today');
            }
        }
    }

}
setInterval('time(0)',1000);
function loadCSSFile() {
    var link_css = document.getElementById("ggt-css");
    link_css.rel = "stylesheet";
    link_css.href = "html&css/css/ggt-home.css";
  
    document.head.appendChild(link_css);
}

window.onload=function(){
    time(1);

};
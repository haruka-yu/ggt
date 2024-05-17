

function cbm(order,id){
    //実行したい命令（記憶するとか全消去とか）,キャラ番号
    /*
    order=rM　とかcrownC とか。
    Mrとかでいいかも　大文字（実行したい命令の種類）
    r,l,c = r,lv,crown
    M = memory
    C = clear
    S = set

    cS rS...


    idは普通にキャラの番号
    t1 = 岩主人公
    c3 = バーバラ
    a = all　setとclearを一括でやるとき用
    
    命令で実行する関数を振り分けてidで区別する
    Mならfunction
    
    */
    var t_rA = [];
    var c_rA = [];
    for(i=0;i<5;i++){t_rA[i]=0;}
    for(i=0;i<80;i++){c_rA[i]=0;}

    var t_lvA =[];
    var c_lvA =[];
    for(i=0;i<5;i++){t_lvA[i]=0;}
    for(i=0;i<80;i++){c_lvA[i]=0;}

    var t_crownA = [];
    var c_crownA = [];
    for(i=0;i<5;i++){t_crownA[i]=0;}
    for(i=0;i<80;i++){c_crownA[i]=0;}

    function Memory(){
 
    }

    function t_r(num){
        console.log(t_rA);
        let check = document.getElementById("t" + num + "_r")
    
        if(check.checked){
            console.log(t_rA);
            t_rA[num] = 1;
    
        }else{
            console.log(t_rA);
            t_rA[num] = 0;
    
        }
    }
    function t_lv(num){
        let check = document.getElementById("t"+ num +"_lv")
        if(check.checked){
            t_lvA[num] = 1;
            console.log(t_lvA);
        }else{
            t_lvA[num] = 0;
            console.log(t_lvA);
        }
    }
    function t_crown(num){
        let check = document.getElementById("t"+ num +"_crown")
        if(check.checked){
            t_crownA[num] = 1;
            console.log(t_crownA);
        }else{
            t_crownA[num] = 0;
            console.log(t_crownA);
        }
    }
    
    function c_r(num){
        let check = document.getElementById("c"+ (num+1) +"_r")
        if(check.checked){
            c_rA[num] = 1;
            console.log(c_rA);
        }else{
            c_rA[num] = 0;
            console.log(c_rA);
        }
    }
    function c_lv(num){
        let check = document.getElementById("c"+ (num+1) +"_lv")
        if(check.checked){
            c_lvA[num] = 1;
            console.log(c_lvA);
        }else{
            c_lvA[num] = 0;
            console.log(c_lvA);
        }
    }
    function c_crown(num){
        let check = document.getElementById("c"+ (num+1) +"_crown")
        if(check.checked){
            c_crownA[num] = 1;
            console.log(c_crownA);
        }else{
            c_crownA[num] = 0;
            console.log(c_crownA);
        }
    }

}



function set(){
    //let t_rA_memo = JSON.stringify(t_rA)
    //ローカルストレージにぶち込まれた「育成状況のメモ」がm2に代入される（まだ使えない）
    let t_rA_m2 = localStorage.getItem("t_rA");
    let c_rA_m2 = localStorage.getItem("c_rA");
    let t_lvA_m2 = localStorage.getItem("t_lvA");
    let c_lvA_m2 = localStorage.getItem("c_lvA");
    let t_crownA_m2 = localStorage.getItem("t_crownA");
    let c_crownA_m2 = localStorage.getItem("c_crownA");

    //m2の情報にparseをかける（これで使える）
    t_rA = JSON.parse(t_rA_m2);
    c_rA = JSON.parse(c_rA_m2);
    t_lvA = JSON.parse(t_lvA_m2);
    c_lvA = JSON.parse(c_lvA_m2);
    t_crownA = JSON.parse(t_crownA_m2);
    c_crownA = JSON.parse(c_crownA_m2);
    //m2に保存されている配列を元に育成状況のメモを復元

}

function clear(){
    //旅人
    localStorage.removeItem("t_rA_m1");
    localStorage.removeItem("t_rA_m2");
    localStorage.removeItem("t_lvA_m1");
    localStorage.removeItem("t_lvA_m2");
    localStorage.removeItem("t_crownA_m1");
    localStorage.removeItem("t_crownA_m2");
    //キャラ
    localStorage.removeItem("c_rA_m1");
    localStorage.removeItem("c_rA_m2");
    localStorage.removeItem("c_lvA_m1");
    localStorage.removeItem("c_lvA_m2");
    localStorage.removeItem("c_crownA_m1");
    localStorage.removeItem("c_crownA_m2");    

}
function memory(){
    //m1に「育成状況のメモ」をJSONファイルにしてぶち込む
    localStorage.setItem("t_rA",JSON.stringify(t_rA));
    localStorage.setItem("c_rA",JSON.stringify(c_rA));
    localStorage.setItem("t_lvA",JSON.stringify(t_lvA));
    localStorage.setItem("c_lvA",JSON.stringify(c_lvA));
    localStorage.setItem("t_crownA",JSON.stringify(t_crownA));
    localStorage.setItem("c_crownA",JSON.stringify(c_crownA));
    //終わり。
    console.log(t_rA);
}



window.onload=function(){

    //set();




    console.log("ok");
    console.log(t_rA);
};




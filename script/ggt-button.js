//画像をボタンにして、このjsで表示するやつを決める


let add_img;

//ログインボーナス・テイワットマップ
/*
login map calk
ログボリンク
https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&lang=ja-jp
*/

/*
＊HTMLで設定しておくもの
・選択されてる素材を分かりやすくするcssのクラス

・変数と変更箇所の指定をする
・クラスを一括で外す
・押された箇所によってクラスを付与する
let usetargets=document.getElementById("usetargets");
*/


//wmを使うキャラ、武器を表示するエリア

function wm(pass){
    //日替わり素材：未実装含めて42個
    const usewm_map = {
        "MoT1": 1,"MoW1": 2, "MoT2": 3,"MoW2": 4, "MoT3": 5,"MoW3": 6,
        "LiT1": 7,"LiW1": 8, "LiT2": 9,"LiW2":10, "LiT3":11,"LiW3":12,
        "InT1":13,"InW1":14, "InT2":15,"InW2":16, "InT3":17,"InW3":18,
        "SuT1":19,"SuW1":20, "SuT2":21,"SuW2":22, "SuT3":23,"SuW3":24,
        "FoT1":25,"FoW1":26, "FoT2":27,"FoW2":28, "FoT3":29,"FoW3":30,
        "NaT1":31,"NaW1":32, "NaT2":33,"NaW2":34, "NaT3":35,"NaW3":36,
        "SnT1":37,"SnW1":38, "SnT2":39,"SnW2":40, "SnT3":41,"SnW3":42,
    };

    for (let i = 0; i < 43; i++) {
        let wm_ghost = document.getElementById("usewm" + i);
        if (wm_ghost) {
            wm_ghost.classList.add("ghost");
        }
        let wm_select = document.getElementById("wm" + i);
        if (wm_select) {
            wm_select.classList.remove("select");
        }        
    }
    if (usewm_map.hasOwnProperty(pass)) {
        document.getElementById("usewm" + usewm_map[pass]).classList.remove('ghost');
        document.getElementById("wm" + usewm_map[pass]).classList.add('select');
    }
    //selectクラス




/*
＊前までのやり方
if(pass=="MoT1"){usewm1.classList.remove('ghost');}
*/
//
//window.open(Link, "_blank", "noreferrer");


}


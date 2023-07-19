//画像をボタンにして、このjsで表示するやつを決める


let add_img;

//ログインボーナス・テイワットマップ
/*
login map calk
ログボリンク
https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&lang=ja-jp
*/


//wmを使うキャラ、武器を表示するエリア
let usetargets=document.getElementById("usetargets");
function wm(pass){
for (let i = 0; i < 43; i++) {
    let element = document.getElementById("usewm" + i);
    if (element) {
        element.classList.add("ghost");}
}
//日替わり素材：未実装含めて42個
if(pass=="MoT1"){usewm1.classList.remove('ghost');}
if(pass=="MoW1"){usewm2.classList.remove('ghost');}
if(pass=="MoT2"){usewm3.classList.remove('ghost');}
if(pass=="MoW2"){usewm4.classList.remove('ghost');}
if(pass=="MoT3"){usewm5.classList.remove('ghost');}
if(pass=="MoW3"){usewm6.classList.remove('ghost');}
if(pass=="LiT1"){usewm7.classList.remove('ghost');}
if(pass=="LiW1"){usewm8.classList.remove('ghost');}
if(pass=="LiT2"){usewm9.classList.remove('ghost');}
if(pass=="LiW2"){usewm10.classList.remove('ghost');}
if(pass=="LiT3"){usewm11.classList.remove('ghost');}
if(pass=="LiW3"){usewm12.classList.remove('ghost');}
if(pass=="InT1"){usewm13.classList.remove('ghost');}
if(pass=="InW1"){usewm14.classList.remove('ghost');}
if(pass=="InT2"){usewm15.classList.remove('ghost');}
if(pass=="InW2"){usewm16.classList.remove('ghost');}
if(pass=="InT3"){usewm17.classList.remove('ghost');}
if(pass=="InW3"){usewm18.classList.remove('ghost');}
if(pass=="SuT1"){usewm19.classList.remove('ghost');}
if(pass=="SuW1"){usewm20.classList.remove('ghost');}
if(pass=="SuT2"){usewm21.classList.remove('ghost');}
if(pass=="SuW2"){usewm22.classList.remove('ghost');}
if(pass=="SuT3"){usewm23.classList.remove('ghost');}
if(pass=="SuW3"){usewm24.classList.remove('ghost');}
//Fo:25~30
//Na:31~36
//Sn:37~42

//
//window.open(Link, "_blank", "noreferrer");


}


//一人旅か4人編成か
var partytype = Math.floor( Math.random() * 2 );

//メンバー重複チェック
var tyouhuku = [];

var party=document.getElementById('party');

if(partytype==0){
    //人の選出
    let member = Math.floor( Math.random() * 67 );
    party.innerHTML = '<img class="r5" src="../../images/characters/Ci_'+ member +'.webp"></img>';
}
else{
    for(i=0;i<5;i++){
    if(!randoms.includes(tmp)){
        randoms.push(tmp);
        break;
    }    
    }
}



console.log(partytype);






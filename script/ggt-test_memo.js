/*
    <script src="../script/ggt-button.js" defer></script>

    デバッグ用
        console.log(week);
        console.log(hh);
        console.log(day);
＊全文見る
console.log(pass);

＊1文字だけ見る
console.log(pass.charAt(3));

＊指定の範囲を見る
console.log(pass.substr(0,2));

＊指定した文字以降を見る
console.log(pass.substr(2));

キャラの育成メモページに貼り付けてランダムでパーティ組めるようにする
<script src="../../script/ggt-randum.js"></script>


キャラ育成のメモ変数名何にしようかな
cbm？
c character
b bleed
m memo
いいかも

paimon関数でイベントのお知らせする
あと誕生日とか
螺旋更新のお知らせ
スターライトとか


*/

//chara namber
/*
0.旅人
1.アンバー|2.ガイア|3.リサ|4.バーバラ|5.レザー
6.香菱|7.北斗|8.行秋|9.凝光|10.フィッシュル

11.ベネット|12.ノエル|13.重雲|14.スクロース|15.ジン
16.ディルック|17.七七|18.モナ|19.刻晴|20.ウェンティ

21.クレー|22.タルタリヤ|23.ディオナ|24.鍾離|25.辛炎
26.アルベド|27.甘雨|28.魈|29.胡桃|30.ロサリア

31.煙緋|32.エウルア|33.楓原万葉|34.神里綾華|35.宵宮
36.早柚|37.アーロイ|38.雷電将軍|39.九条沙羅|40.珊瑚宮心海

41.トーマ|42.荒瀧一斗|43.ゴロー|44.申鶴|45.雲菫
46.八重神子|47.神里綾人|48.夜蘭|49.久岐忍|50.鹿野院平蔵

51.ティナリ|52.コレイ|53.ドリー|54.セノ|55.キャンディス
56.ニィロウ|57.ナヒーダ|58.レイラ|59.放浪者|60.ファルザン

61.アルハイゼン|62.ヨォーヨ|63.ディシア|64.ミカ|65.白朮
66.カーヴェ|67.綺良々|68.リネット|69.リネ|70.フレミネ

71.ヌヴィレット|72.リオセスリ|73.フリーナ|74.シャルロット|75.ナヴィア
76.シュヴルーズ|77.閑雲|78.嘉明|79.千織|80.

81.|82.|83.|84.|85.
86.|87.|88.|89.|90.

91.|92.|93.|94.|95.
96.|97.|98.|99.|100.

//r５
0.旅人
1.ジン|2.ディルック|3.七七|4.モナ|5.刻晴
6.ウェンティ|7.クレー|8.タルタリヤ|9.鍾離|10.アルベド
11.甘雨|12.魈|13.胡桃|14.エウルア|15.楓原万葉
16.神里綾華|17.宵宮|18.アーロイ|19.雷電将軍|20.珊瑚宮心海
21.荒瀧一斗|22.申鶴|23.八重神子|24.神里綾人|25.夜蘭
26.ティナリ|27.セノ|28.ニィロウ|29.ナヒーダ|30.放浪者
31.アルハイゼン|32.ディシア|33.白朮|34.リネ|35.
36.|37.|38.|39.|40.
41.|42.|43.|44.|45.
46.|47.|48.|49.|50.



//星４
0.アンバー
1.ガイア|2.リサ|3.バーバラ|4.レザー|5.香菱
6.北斗|7.行秋|8.凝光|9.フィッシュル|10.ベネット
11.ノエル|12.重雲|13.スクロース|14.ディオナ|15.辛炎
16.ロサリア|17.煙緋|18.早柚|19.九条沙羅|20.トーマ
21.ゴロー|22.雲菫|23.久岐忍|24.鹿野院平蔵|25.コレイ
26.ドリー|27.キャンディス|28.レイラ|29.ファルザン|30.ヨォーヨ
31.ミカ|32.カーヴェ|33.綺良々|34.リネット|35.フレミネ
36.|37.|38.|39.|40.
41.|42.|43.|44.|45.
46.|47.|48.|49.|50.
*/


//weapon number
/*
・sword 片手剣 
星五
0.風鷹剣
1.天空の刃|2.斬山の刃|3.磐岩結緑|4.蒼古なる自由への誓い|5.霧切の廻光
6.波乱月白経津|7.聖顕の鍵|8.萃光の裁葉|9.|10.
11.|12.|13.|14.|15.
16.|17.|18.|19.|20.
21.|22.|23.|24.|25.
26.|27.|28.|29.|30.


星四
0.西風剣
1.祭礼の剣|2.匣中龍吟|3.笛の剣|4.ダークアレイの閃光|5.旧貴族長剣
6.黒岩の長剣|7.斬岩・試作|8.鉄蜂の刺し|9.降臨の剣|10.黒剣
11.腐植の剣|12.天目影打|13.シナバースピンドル|14.籠釣瓶一心|15.原木刀
16.サイフォスの月明かり|17.東花坊時雨|18.|19.|20.
21.|22.|23.|24.|25.
26.|27.|28.|29.|30.



・ Claymore 大剣
星五
0.狼の末路
1.天空の傲|2.無工の剣|3.松韻の響く頃|4.赤角石塵滅砕|5.葦海の標
6.|7.|8.|9.|10.
11.|12.|13.|14.|15.
16.|17.|18.|19.|20.
21.|22.|23.|24.|25.
26.|27.|28.|29.|30.


星四
0.西風大剣
1.祭礼の大剣|2.雨裁|3.鐘の剣|4.千岩古剣|5.旧貴族大剣
6.黒岩の斬刀|7.古華・試作|8.白影の剣|9.螭龍の剣|10.雪葬の星銀
11.桂木斬長正|12.銜玉の海皇|13.惡王丸|14.森林のレガリア|15.マカイラの水色
16.鉄彩の花|17.|18.|19.|20.
21.|22.|23.|24.|25.
26.|27.|28.|29.|30.



・Polearm　槍
星五
0.和璞鳶
1.天空の脊|2.破天の槍|3.護摩の杖|4.草薙の稲光|5.息災
6.赤砂の杖|7.|8.|9.|10.
11.|12.|13.|14.|15.
16.|17.|18.|19.|20.
21.|22.|23.|24.|25.
26.|27.|28.|29.|30.


星四
0.西風長槍
1.匣中滅龍|2.千岩長槍|3.旧貴族猟槍|4.黒岩の突槍|5.星鎌・試作
6.流月の針|7.死闘の槍|8.ドラゴンスピア|9.喜多院十文字槍|10.「漁獲」
11.斬波のひれ長|12.ムーンピアサー|13.風信の矛|14.|15.
16.|17.|18.|19.|20.
21.|22.|23.|24.|25.
26.|27.|28.|29.|30.



・Catalyst 法器
星五
0.天空の巻
1.四風原典|2.浮世の錠|3.不滅の月華|4.神楽の真意|5.千夜に浮かぶ夢
6.トゥライトゥーラの記憶|7.碧落の瓏|8.|9.|10.
11.|12.|13.|14.|15.
16.|17.|18.|19.|20.
21.|22.|23.|24.|25.
26.|27.|28.|29.|30.


星四
0.西風秘典
1.祭礼の断片|2.昭心|3.流浪楽章|4.ダークアレイの酒と詩|5.旧貴族秘法録
6.黒岩の緋玉|7.金珀・試作|8.万国諸海の図譜|9.匣中日月|10.冬忍びの実
11.ドドコの物語|12.白辰の輪|13.誓いの明瞳|14.満悦の実|15.彷徨える星
16.|17.|18.|19.|20.
21.|22.|23.|24.|25.
26.|27.|28.|29.|30.



・ Bow　弓
星五
0.
1.|2.|3.|4.|5.
6.|7.|8.|9.|10.
11.|12.|13.|14.|15.
16.|17.|18.|19.|20.
21.|22.|23.|24.|25.
26.|27.|28.|29.|30.


星四
0.
1.|2.|3.|4.|5.
6.|7.|8.|9.|10.
11.|12.|13.|14.|15.
16.|17.|18.|19.|20.
21.|22.|23.|24.|25.
26.|27.|28.|29.|30.
*/

//キャラ誕生日
/*
1月
3：放浪者
9：トーマ
18：ディオナ
22：綺良々
24：ロサリア

2月
2：リネ、リネット
11：アルハイゼン
14：北斗
22：珊瑚宮心海
29(28)：ベネット

3月
3：七七
6：ヨォーヨ
10：申鶴
14：ジン
21：ノエル
26：神里綾人

4月
4：アーロイ
7：ディシア
10：シャルロット
17：魈
20：夜蘭
25：白朮
30：ディルック

5月
3：キャンディス
8：コレイ
18：ゴロー
21：雲菫
27：フィッシュル

6月

7月

8月

9月

10月

11月

12月

*/

/*
[風鷹剣,西風剣,ダークアレイの閃光,旧貴族長剣,シナバースピンドル,冷刃,
    銀の剣,無鋒の剣,松韻の響く頃,鐘の剣,
        雪葬の星銀,鉄影段平,西風秘典,旧貴族秘法録,魔導緒論,
        ポケット魔導書,生徒ノート,絶弦,蒼翠の狩猟弓,幽夜のワルツ,鴉羽の弓]




0.
1.|2.|3.|4.|5.
6.|7.|8.|9.|10.
11.|12.|13.|14.|15.
16.|17.|18.|19.|20.
21.|22.|23.|24.|25.
26.|27.|28.|29.|30.
31.|32.|33.|34.|35.
36.|37.|38.|39.|40.
41.|42.|43.|44.|45.
46.|47.|48.|49.|50.
51.|52.|53.|54.|55.
56.|57.|58.|59.|60.
61.|62.|63.|64.|65.
66.|67.|68.|69.|70.
71.|72.|73.|74.|75.
76.|77.|78.|79.|80.
81.|82.|83.|84.|85.
86.|87.|88.|89.|90.
91.|92.|93.|94.|95.
96.|97.|98.|99.|100.
101.|102.|103.|104.|105.
106.|107.|108.|109.|110.
111.|112.|113.|114.|115.
116.|117.|118.|119.|120.
121.|122.|123.|124.|125.
126.|127.|128.|129.|130.
131.|132.|133.|134.|135.
136.|137.|138.|139.|140.
141.|142.|143.|144.|145.
146.|147.|148.|149.|150.
151.|152.|153.|154.|155.
156.|157.|158.|159.|160.
161.|162.|163.|164.|165.
166.|167.|168.|169.|170.
171.|172.|173.|174.|175.
176.|177.|178.|179.|180.
181.|182.|183.|184.|185.
186.|187.|188.|189.|190.
191.|192.|193.|194.|195.
196.|197.|198.|199.|200.


*/





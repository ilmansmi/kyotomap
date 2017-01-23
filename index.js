var line = d3.svg.line().x(function(d) { return d.x; }).y(function(d) { return d.y; }).interpolate("linear").tension(0);

function addLines(){
	
var line17 = [
		{x:780, y:1340,　cClass: "node"},
		{x:840, y:1340, label: "塩小路高倉", cClass: "end"},
		{x:900, y:1340},
		{x:900, y:1280, cClass:"node"},
		{x:900, y:1200, label: "河原町正面", tClass: "hor"},
		{x:900, y:1050, label: "河原町松原", tClass: "hor"},
		{x:900, y:880, cClass: "node"},
		{x:900, y:840, cClass: "node"},
		{x:900, y:760, cClass: "node"},
		{x:900, y:700, cClass: "node"},
		{x:900, y:640, cClass: "node"},
		{x:900, y:600, cClass: "node"},
		{x:900, y:500, cClass: "node"},
		{x:1000, y:500, label: "出町柳", tClass: "ver-45 top",  cClass: ""},
		{x:1060, y:500, cClass: "node"},
		{x:1100, y:500, label: "京大農学部前", tClass: "ver-45 top",  cClass: ""},
		{x:1140, y:500, label: "北白川", tClass: "ver-45 top",  cClass: ""},
		{x:1200, y:500, label: "銀閣寺道", tClass: "ver-45 top",  cClass: ""},
		{x:1200, y:530, label: "浄土寺", tClass: "hor"},
		{x:1200, y:560, label: "近隣車庫前", tClass: "hor"},
		{x:1200, y:640, label: "真如堂前", tClass: "hor end",  cClass: "end"},
	];
var line26 = [
		{x:780, y:1340,　cClass: "node"},
		{x:780, y:1280, label: "烏丸七条", tClass: "hor"},
		{x:780, y:1200, label: "烏丸六条", tClass: "hor"},
		{x:780, y:1120, cClass: "node"},
		{x:780, y:960, label: "烏丸松原", tClass: "hor"},
		{x:780, y:885, cClass: "node"},
		{x:680, y:885, cClass: "node"},
		{x:670, y:885, cClass: "node"},
		{x:600, y:885, cClass: "node"},	
		{x:570, y:885, cClass: "node"},
		{x:540, y:885, cClass: "node"},
		{x:500, y:885, cClass: "node"},
		{x:465, y:885, cClass: "node"},
		{x:465, y:840, cClass: "node"},
		{x:465, y:800, cClass: "node"},
		{x:465, y:750, cClass: "node"},
		{x:465, y:700, cClass: "node"},
		{x:465, y:620, label: "北の忠告前", tClass: "hor"},
		{x:465, y:560, label: "大所軍", tClass: "hor"},
		{x:465, y:500, cClass: "node"},
		{x:420, y:500, label: "東寺院町", tClass: "ver-45 top",  cClass: ""},
		{x:380, y:500, label: "明真次北門前", tClass: "ver-45 top",  cClass: ""},
		{x:350, y:500, label: "京福妙心寺寺駅前", tClass: "ver-45 top",  cClass: ""},
		{x:300, y:500, cClass: "node"},
		{x:280, y:540, cClass: "node"},
		{x:260, y:560,cClass: "node"},
		{x:240, y:580,cClass: "node"},
		{x:220, y:600, cClass: "node"},
		{x:240, y:600},
		{x:240, y:630,cClass: "node"},
	];
var line28 = [
		{x:760, y:1335,cClass:"node"},
		{x: 730, y:1335,cClass:"node"},		
		{x: 680, y:1335, cClass:"node"},
		{x: 680, y:1280,cClass: "node"},
		{x: 680, y:1200,cClass: "node"},
		{x: 680, y:1120,cClass: "node"},
		{x: 680, y:1050,cClass: "node"},
		{x: 680, y:895,cClass: "node"},
		{x: 600, y:895,cClass: "node"},	
		{x: 570, y:895,cClass: "node"},	
		{x: 540, y:895,cClass: "node"},
		{x: 500, y:895,cClass: "node"},
		{x: 450, y:895,cClass: "node"},
		{x: 425, y:895, cClass: "node"},
		{x: 400, y:895, cClass: "node"},
		{x: 375, y:895, cClass: "node"},
		{x: 350, y:895, cClass: "node"},
		{x: 325, y:895, cClass: "node"},
		{x: 300, y:895, label: "日新電機前", tClass: "ver-45 top",  cClass: ""},
		{x: 275, y:895, label: "梅津団町", tClass: "ver-45 top",  cClass: ""},
		{x: 250, y:895, label: "長福寺町", tClass: "ver-45 top",  cClass: ""},
		{x: 225, y:895, label: "梅津西浦町", tClass: "ver-45 top",  cClass: ""},
		{x: 200, y:895, label: "梅宮大社前", tClass: "ver-45 top",  cClass: ""},
		{x: 170, y:895, label: "松尾芭蕉", tClass: "ver-45 top",  cClass: ""},
		{x: 145, y:895, cClass: "node"},
		{x: 145, y:850, cClass: "node"},
		{x: 90, y:800, cClass: "node"},	
		{x: 90, y:700, cClass: "node"},	
		{x: 117, y:700, cClass: "node"},
		{x: 117, y:600, label: "大覚寺", tClass: "ver-45 top end"},			
		//合流点嵯峨釈迦堂前(91)		
	];	
var line59 = [
		{x:230, y:630,cClass: "node"},
		{x:230, y:610},
		{x:205, y:610, cClass: "node"},
		{x:235, y:570,cClass: "node"},
		{x:260, y:550,cClass: "node"},
		{x:275, y:520, cClass: "node"},
		{x:290, y:500, cClass: "node"},
		{x:305, y:475, label: "大室仁和寺", tClass: "ver-45"},
		{x:330, y:470, label: "大室", tClass: "ver-45"},
		{x:355, y:455, label: "戸ノ下町", tClass: "ver-45"},
		{x:380, y:445, label: "竜安寺前", tClass: "ver-45"},
		{x:410, y:425, label: "立命館大学前", tClass: "ver-45"},
		{x:440, y:413, label: "衣笠書門長", tClass: "ver-45"},
		{x:460, y:400, cClass: "node"},
		{x:480, y:370, cClass: "node"},
		{x:540, y:365, cclass: "node"},
		{x:545, y:385, cClass: "node"},
		{x:545, y:410, cClass: "node"},
		{x:545, y:440, cClass: "node"},
		{x:545, y:465, cClass: "node"},
		{x:545, y:490, cClass: "node"},
		{x:553, y:490, cClass: "node"},
		{x:600, y:490, cClass: "node"},
		{x:670, y:490, cClass: "node"},
		{x:730, y:490, cClass: "node"},
		{x:780, y:490, cClass: "node"},
		{x:840, y:490, cClass: "node"},
		{x:910, y:490, cClass: "node"},
		{x:910, y:600, cClass: "node"},
		{x:910, y:640, cClass: "node"},
		{x:910, y:700, cClass: "node"},
		{x:910, y:760, cClass: "node"},
		{x:910, y:840, cClass: "node"},
		{x:910, y:890, cClass: "node"},
		{x:980, y:890, cClass: "node"},
		{x:980, y:850, cClass: "node"},	

	];	
var line91 = [
		{x:780, y:890,cClass: "end"},
		{x:720, y:890,cClass: "node"},
		{x:670, y:890,cClass: "node"},
		{x:600, y:890, cClass: "node"},
		{x:570, y:890, cClass: "node"},
		{x:540, y:890, cClass: "node"},
		{x:500, y:890, cClass: "node"},
		{x:460, y:890, cClass: "node"},
		{x:460, y:840, cClass: "node"},
		{x:460, y:800, cClass: "node"},
		{x:460, y:750, cClass: "node"},
		{x:460, y:700, cClass: "node"},
		{x:440, y:700, label: "伯楽町", tClass: "ver-45"},
		{x:410, y:700, label: "西ノ京馬代町", tClass: "ver-45"},
		{x:390, y:700, label: "木辻南町", tClass: "ver-45"},
		{x:360, y:700, label: "妙心寺前", tClass: "ver-45"},
		{x:340, y:700, label: "花園駅前", tClass: "ver-45"},
		{x:300, y:700, label: "花園江木の長", tClass: "ver-45"},
		{x:280, y:700, label: "太秦映画村道", tClass: "ver-45"},
		{x:260, y:700, label: "嵯峨野高校前", tClass: "ver-45"},
		{x:240, y:700, label: "常盤野小学校前", tClass: "ver-45"},
		{x:225, y:700, label: "太秦北路町", tClass: "ver-45"},
		{x:210, y:700, label: "太秦開日町", tClass: "ver-45"},
		{x:185, y:700, label: "廣澤御所ノ内町", tClass: "ver-45"},
		{x:160, y:700, label: "嵯峨中学前", tClass: "ver-45"},
		{x:145, y:700, label: "嵯峨嵐山駅", tClass: "ver-45"},
		{x:130, y:700, label: "嵯峨背戸側町", tClass: "ver-45"},
		{x:120, y:700, cClass: "node"},
		{x:120, y:650, label: "嵯峨釈迦堂前", tClass: "ver-45 end"},
	];
var line101 = [
		{x:720, y:375,cClass: "node"},
		{x:670, y:375, cClass: "node"},
		{x:670, y:375, cClass: "node"}, //daitokuji
		{x:540, y:375, cClass: "node"}, //senbonkitaooji
		{x:520, y:375}, 
		{x:485, y:380, cClass: "node"}, 
		{x:470, y:400, cClass: "node"}, 
		{x:470, y:450, label: "藁天神前", tClass: "ver-45"}, 
		{x:470, y:500, cClass: "node",tClass: "ver-45"}, 
		{x:500, y:500, cClass: "node"}, 
		{x:550, y:500, cClass: "node"}, 
		{x:600, y:500, cClass: "node"}, 
		{x:675, y:500, cClass: "node"},
		{x:675, y:700, cClass: "node"}, 
		{x:675, y:760, cClass: "node"},	
		{x:675, y:800, cClass: "node"},		
		{x:675, y:897, cClass:"node"},	
		{x:770, y:897, cClass:"node"},
		{x:770, y:1120, cClass:"node"},
		{x:770, y:1330, cClass:"node"},
	];
var line206 = [
		{x:780, y:1340,　cClass: "node"},
		{x: 730, y:1340,cClass:"node"},		
		{x: 670, y:1340},
		{x: 670, y:1280,cClass: "node"},
		{x:600, y:1280, cClass: "node"},
		{x:600, y:1200, cClass: "node"},
		{x:600, y:1120, cClass: "node"},
		{x:600, y:1050, cClass: "node"},
		{x:600, y:960, cClass: "node"},
		{x:580, y:930, label: "壬生祖佐城前", tClass: "ver-45 top",  cClass: ""},
		{x:540, y:900, label: "千本朱雀立名鑑前", tClass: "ver-45 top",  cClass: ""},
		{x:540, y:800, label: "二条駅前", tClass: "hor"},
		{x:540, y:760, label: "千本旧二条", tClass: "hor"},
		{x:540, y:700, cClass: "node"},
		{x:540, y:640, label: "", tClass: "hor"},
		{x:540, y:600, label: "", tClass: "hor"},
		{x:540, y:500, cClass: "node"},
		{x:540, y:465, cClass: "node"},
		{x:540, y:440, cClass: "node"},
		{x:540, y:410, cClass: "node"},
		{x:540, y:385, cClass: "node"},
		{x:540, y:360, cClass: "node"},
		{x:570, y:360, label: "", tClass: "ver-45 top"},
		{x:600, y:360, label: "", tClass: "ver-45 top"},
		{x:640, y:360, label: "", tClass: "ver-45 top"},
		{x:670, y:360, cClass:"node"},
		{x:695, y:360, label: "北大路新道", tClass: "ver-45 top"},		
		{x:720, y:360, cClass: "node"},
		{x:1040, y:360, label: "高野橋東すめ", tClass: "ver-45 top"},
		{x:1070, y:380, label: "高野", tClass: "ver-45 top"},
		{x:1070, y:470, cClass: "node"},
		{x:1070, y:670, cClass: "node"},
		{x:1070, y:840, cClass: "node"},
		{x:1070, y:880, cClass:"node"},
		{x:1070, y:1020, cClass:"node"},
		{x:1070, y:1060, cClass:"node"},
		{x:1070, y:1120, cClass:"node"},
		{x:1070, y:1200, cClass:"node"},
		{x:1070, y:1280, cClass:"node"},
		{x:1020, y:1280, label: "三十三間堂", tClass: "ver-45"},
		{x:980, y:1280, label: "七條京阪前", tClass: "ver-45"},
		{x:900, y:1280, cClass:"七条河原町"},
		];
var line207 = [
		/*{x:700, y:1500, cClass: "node"},
		{x:640, y:1500, cClass: "node"},
		{x:605, y:1500, cClass: "node"},
		{x:605, y:1460, label: "東寺東村前", tClass: "ver-45 top",  cClass: ""},
		{x:605, y:1280, cClass: "node"},
		{x:605, y:880, cClass: "node"},
		{x:670, y:880, cClass: "node"},
		{x:680, y:880, cClass: "node"},
		{x:780, y:880, cClass: "node"},
		{x:860, y:880, label: "四条高倉", tClass: "ver-45 top",  cClass: ""},
		{x:1065, y:880, cClass:"node"},
		{x:1065, y:1020, cClass:"node"},
		{x:1065, y:1060, cClass:"node"},
		{x:1065, y:1120, cClass:"node"},
		{x:1065, y:1200, cClass:"node"},
		{x:1065, y:1280, cClass:"node"},
		{x:1065, y:1340, cClass:"node"},
		{x:1065, y:1440, cClass:"node"},
		{x:1000, y:1500,　cClass:"node"},
		{x:900, y:1500, cClass:"node"},
		{x:780, y:1500, cClass:"node"},
		{x:700, y:1500,cClass:"node"},*/
	];
var line202 = [
		{x:705, y:1490, cClass: "node"},
		{x:640, y:1490, cClass: "node"},
		{x:605, y:1490, cClass: "node"},
		{x:590, y:1490, label: "東寺南門前", tClass: "ver-45 top",  cClass: ""},
		{x:565, y:1490, label: "羅城門", tClass: "ver-45 top",  cClass: ""},
		{x:525, y:1490, label: "九条七本松", tClass: "ver-45 top",  cClass: ""},
		{x:500, y:1490, label: "洛陽工業高校前", tClass: "ver-45 top",  cClass: ""},		
		{x:485, y:1470, label: "西大路九条", tClass: "ver-45 top",  cClass: ""},		
		{x:455, y:1440},
		{x:455, y:1400, label: "西大路駅前", tClass: "ver-45 top",  cClass: ""},	
		{x:455, y:1340, label: "西大路八条", tClass: "ver-45 top",  cClass: ""},			
		{x:455, y:1280, label: "西大路七条", tClass: "ver-45 top",  cClass: ""},	
		{x:455, y:1200, label: "西大路花屋町", tClass: "ver-45 top",  cClass: ""},	
		{x:455, y:1120, label: "西大路五条", tClass: "ver-45 top",  cClass: ""},	
		{x:455, y:1050, label: "西大路松原", tClass: "ver-45 top",  cClass: ""},	
		{x:455, y:885, cClass: "node"},			
		{x:455, y:840, cClass: "node"},
		{x:455, y:800, cClass: "node"},
		{x:455, y:750, cClass: "node"},
		{x:455, y:700, cClass: "node"},
		{x:500, y:700, label: "丸太町御前通", tClass: "ver-45 top",  cClass: ""},
		{x:525, y:700, label: "丸太町七本松", tClass: "ver-45 top",  cClass: ""},	
		{x:540, y:700, cClass: "node"},	
		{x:600, y:700, label: "丸太町智恵光院", tClass: "ver-45 top",  cClass: ""},	
		{x:670, y:700, cClass: "node"},
		{x:700, y:700, label: "府庁前", tClass: "ver-45 top",  cClass: ""},	
		{x:780, y:700, label: "烏丸丸太町", tClass: "ver-45 top",  cClass: ""},	
		{x:840, y:700, label: "裁判所前", tClass: "ver-45 top",  cClass: ""},	
		{x:900, y:700, cClass: "node"},	
		{x:980, y:700, label: "丸太町京阪前", tClass: "ver-45 top",  cClass: ""},
		{x:1055, y:700, cClass: "node"},
		{x:1055, y:800, cClass: "node"},
		{x:1055, y:810, label: "東山仁王門", tClass: "ver-45 top",  cClass: ""},	
		{x:1055, y:840, cClass: "node"},
		{x:1055, y:865, label: "知恩院前", tClass: "ver-45 top",  cClass: ""},	
		{x:1055, y:1020, cClass:"node"},
		{x:1055, y:1060, cClass:"node"},
		{x:1055, y:1120, cClass:"node"},
		{x:1055, y:1200, cClass:"node"},
		{x:1055, y:1280, cClass:"node"},
		{x:1055, y:1330, cClass:"node"},
		{x:1055, y:1435, cClass:"node"},
		{x:1000, y:1490, cClass:"node"},
		{x:900, y:1490, cClass:"node"},
		{x:780, y:1490, cClass:"node"},	
		{x:700, y:1490, cClass:"node"},		
	];
var connections = [
		{x:760, y:1330,　w:40, h:30, label: "京都駅", tClass: "ver-45　top lt3v-45", cClass: "green"},
		{x: 900, y:1280, w:15, h:20, label: "七条河原町", tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x: 600, y:960, w:15, h:20, label: "四条松原", tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:1060, y:490,  w:15, h:20, label: "百万遍", tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:1050, y:880, label: "祇園", tClass: "hor", w:30, h:15,cClass: "green" },
		{x:1050, y:1020, label: "東山安井", tClass: "hor", w:30, h:15,cClass: "green"},
		{x:1050, y:1060, label: "清水道", tClass: "hor", w:30, h:15,cClass: "green"},
		{x:1050, y:1120, label: "五条坂", tClass: "hor", w:30, h:15,cClass: "green"},
		{x:1050, y:1200, label: "馬町", tClass: "hor", w:30, h:15,cClass: "green"},
		{x:1050, y:1280, label: "東山七条", tClass: "hor", w:30, h:15,cClass: "green"},
		{x:600, y:880, label: "四条大宮", w:15, h:20,tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:600, y:1270, label: "七条大宮",w:15, h:15,tClass: "ver-45　top lt3v-45", cClass: "green"},
		{x:600, y:1200, label: "島原口", w:15, h:15,tClass: "ver-45　top lt3v-45", cClass: "green"},
		{x:600, y:1120, label: "大宮五条", w:15, h:15,tClass: "ver-45　top lt3v-45", cClass: "green"},
		{x:600, y:1050, label: "大宮松原", w:15, h:15,tClass: "ver-45　top lt3v-45", cClass: "green"},
		{x:770, y:880, label: "四条烏丸", w:15, h:20, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:720, y:880, label: "四条西洞院",w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:670, y:880, label: "四条堀川",w:15, h:20, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:700, y:1490, label: "九条車庫前",w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:640, y:1490, label: "九条近鉄前",w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:605, y:1490, label: "九条大宮", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:450, y:880, label: "西大路四条", w:20, h:20, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:450, y:840, label: "西大路三条",  w:20, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:450, y:800, label: "西大路御池",  w:20, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:450, y:750, label: "太子道",  w:20, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:455, y:695, label: "西ノ京円町", w:20, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:540, y:700, label: "千本丸太町", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:900, y:700, label: "河原町丸太町", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:1045, y:700, label: "熊野神社前", w:30, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:1050, y:750, label: "東山二条", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:1050, y:840, label: "東山三条", w:30, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:1055, y:1330, label: "今熊野",  w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:1055, y:1430, label: "仙遊寺道",  w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:1000, y:1490, label: "東福寺",  w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:900, y:1490, label: "九条河原町",  w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:780, y:1490, label: "大石橋", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x: 710, y:355,label: "北大路バスターミナル", w:15, h:25, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:670, y:355, label: "北大路堀川", w:15, h:25, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:535, y:355, label: "千本北大路", w:15, h:25, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:460, y:490, label: "北野白梅町",   w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:490, y:490, label: "北野天満宮",   w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:535, y:490, label: "千本今出川",   w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:600, y:490, label: "今出川大宮",   w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:670, y:490, label: "堀川今出川",   w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:670, y:700, label: "堀川丸太町",   w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:670, y:760, label: "二条城前",   w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:670, y:800, label: "堀川御池",   w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:500, y:880, label: "四条御前通",  w:15, h:20, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:540, y:880, label: "四条中新道",  w:15, h:20, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:570, y:880, label: "壬生寺道",  w:15, h:20, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:765, y:1120, label: "烏丸五条", w:20, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:290, y:500, label: "福大路",　 w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:260, y:540, label: "鳴滝本町",  w:15, h:15, tClass: "hor", cClass: "green"},
		{x:240, y:560, label: "宇多野病院前",  w:15, h:15, tClass: "hor", cClass: "green"},
		{x:220, y:580, label: "youth hostel前",  w:15, h:15, tClass: "hor", cClass: "green"},
		{x:200, y:600, label: "山越え",  w:15, h:15, tClass: "hor", cClass: "green"},
		{x:220, y:630, label: "山越え中町",  w:15, h:15, tClass: "hor", cClass: "green"},
		{x:460, y:400, label: "金閣前", w:15, h:15, tClass: "hor", cClass: "green"}, 
		{x:480, y:370, label: "金閣寺道", w:15, h:15, tClass: "hor", cClass: "green"},
		{x:535, y:465, label: "千本上立売", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:535, y:440, label: "剣竜子前", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:535, y:410, label: "千本鞍馬口", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:535, y:390, label: "lighthouse前", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:565, y:490, label: "今出川浄福寺", w:15, h:10, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:730, y:490, label: "上京区総合庁舎前", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},			
		{x:780, y:490, label: "烏丸今出川", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:840, y:490, label: "同志社前", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},		
		{x:900, y:490, label: "河原町今出川", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:900, y:640, label: "荒神口", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:900, y:600, label: "府立医大病院前", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:900, y:760, label: "京都市役所前",w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:900, y:840, label: "河原町三条",w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:900, y:880, label: "四条河原町",w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},	
		{x:980, y:880, label: "四条京阪前",w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x:980, y:840, label: "三条河原町",w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x: 730, y:1330,label: "下京区総合庁舎前", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},		
		{x: 670, y:1280, label: "七条堀川", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x: 670, y:1200,label: "西本願寺前", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},	
		{x: 670, y:1120,label: "堀川五条", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x: 670, y:1050,label: "堀川松原", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x: 425, y:885, label: "西院竜見町",w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x: 400, y:885, label: "四条中学校前", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x: 375, y:885, label: "四条門野大路", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x: 350, y:885, label: "京都外大前", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x: 325, y:885, label: "南広町", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},
		{x: 145, y:885, label: "松尾大社前", w:15, h:15, tClass: "ver-45 top lt3v-45", cClass: "green"},			
		];
		
		
	d3.select(".line17").append("path").attr("d", line(line17)).attr("class", "line17");
	for(var i=0; i < line17.length; i++) {
		var node = d3.select(".line17").append("g").attr("class", "station").attr("transform", "translate("+line17[i].x+", "+line17[i].y +")");
		node.append("circle").attr("r", 3).attr("class", line17[i].cClass);
		node.append("text").attr("class", line17[i].tClass).text(line17[i].label);
		addChanges(node);
	}

	d3.select(".line26").append("path").attr("d", line(line26)).attr("class", "line26");
	for(var i=0; i < line26.length; i++) {
		var node = d3.select(".line26").append("g").attr("class", "station").attr("transform", "translate("+line26[i].x+", "+line26[i].y +")");
		node.append("circle").attr("r", 3).attr("class", line26[i].cClass);
		node.append("text").attr("class", line26[i].tClass).text(line26[i].label);
		addChanges(node);
	}
	d3.select(".line28").append("path").attr("d", line(line28)).attr("class", "line28");
	for(var i=0; i < line28.length; i++) {
		var node = d3.select(".line28").append("g").attr("class", "station").attr("transform", "translate("+line28[i].x+", "+line28[i].y +")");
		node.append("circle").attr("r", 3).attr("class", line28[i].cClass);
		node.append("text").attr("class", line28[i].tClass).text(line28[i].label);
		addChanges(node);
	}
	
	
	d3.select(".line59").append("path").attr("d", line(line59)).attr("class", "line59");
	for(var i=0; i < line59.length; i++) {
		var node = d3.select(".line59").append("g").attr("class", "station").attr("transform", "translate("+line59[i].x+", "+line59[i].y +")");
		node.append("circle").attr("r", 3).attr("class", line59[i].cClass);
		node.append("text").attr("class", line59[i].tClass).text(line59[i].label);
		addChanges(node);
	}
	
		d3.select(".line91").append("path").attr("d", line(line91)).attr("class", "line91");
	for(var i=0; i < line91.length; i++) {
		var node = d3.select(".line91").append("g").attr("class", "station").attr("transform", "translate("+line91[i].x+", "+line91[i].y +")");
		node.append("circle").attr("r", 3).attr("class", line91[i].cClass);
		node.append("text").attr("class", line91[i].tClass).text(line91[i].label);
		addChanges(node);
	}
	d3.select(".line101").append("path").attr("d", line(line101)).attr("class", "line101");
	for(var i=0; i < line101.length; i++) {
		var node = d3.select(".line101").append("g").attr("class", "station").attr("transform", "translate("+line101[i].x+", "+line101[i].y +")");
		node.append("circle").attr("r", 3).attr("class", line101[i].cClass);
		node.append("text").attr("class", line101[i].tClass).text(line101[i].label);
		addChanges(node);
	}
		d3.select(".line202").append("path").attr("d", line(line202)).attr("class", "line202");
	for(var i=0; i < line202.length; i++) {
		var node = d3.select(".line202").append("g").attr("class", "station").attr("transform", "translate("+line202[i].x+", "+line202[i].y +")");
		node.append("circle").attr("r", 3).attr("class", line202[i].cClass);
		node.append("text").attr("class", line202[i].tClass).text(line202[i].label);
		addChanges(node);
	}

	d3.select(".line206").append("path").attr("d", line(line206)).attr("class", "line206");
	for(var i=0; i < line206.length; i++) {
		var node = d3.select(".line206").append("g").attr("class", "station").attr("transform", "translate("+line206[i].x+", "+line206[i].y +")");
		node.append("circle").attr("r", 3).attr("class", line206[i].cClass);
		node.append("text").attr("class", line206[i].tClass).text(line206[i].label);
		addChanges(node);
	}
	d3.select(".line207").append("path").attr("d", line(line207)).attr("class", "line207");
	for(var i=0; i < line207.length; i++) {
		var node = d3.select(".line207").append("g").attr("class", "station").attr("transform", "translate("+line207[i].x+", "+line207[i].y +")");
		node.append("circle").attr("r", 3).attr("class", line207[i].cClass);
		node.append("text").attr("class", line207[i].tClass).text(line207[i].label);
		addChanges(node);
	}
	/* Connections */
	for(var i=0; i < connections.length; i++) {
		var node = d3.select(".connections").append("g").attr("class", "con").attr("transform", "translate("+connections[i].x+", "+connections[i].y +")");
		node.append("rect")
			.attr("rx", 2)
			.attr("ry", 2)
			.attr("class", connections[i].cClass)
			.attr("height", connections[i].h)
			.attr("width", connections[i].w);
		node.append("text").attr("class", connections[i].tClass).text(connections[i].label);
		addChanges(node);
	}
}

function addChanges(el){
	el.select("text.hor").attr("dx", 8).attr("dy", 5);
	el.select("text.ver45").attr("dx", -10).attr("dy", 0);
	el.select("text.ver-45").attr("dx", -5).attr("dy", -5);
	el.select("text.bot").attr("dx", 10).attr("dy", 10);
	el.select("text.top").attr("dx", 10).attr("dy", 0);
	el.select("circle.node").attr("r", 0);
	el.select("circle.end").attr("r", 5);
	el.select("text.lt2h").attr("dx", 20).attr("dy", 12);
	el.select("text.lt3h").attr("dx", 25).attr("dy", 12);
	el.select("text.lt5h").attr("dx", 35).attr("dy", 12);
	el.select("text.lt2v-45").attr("dx", 8).attr("dy", 3);
	el.select("text.lt3v-45").attr("dx", 8).attr("dy", 3);
	el.select("text.lt5v-45").attr("dx", 8).attr("dy", 3);
	el.select("text.tc").attr("dx", 25).attr("dy", 25);
	el.select("text.lt2hb").attr("dx", 0).attr("dy", 30);
}
addLines();
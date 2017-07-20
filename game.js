

//植物
var score=0;
var talk=document.getElementsByName("talk");
var bit=document.getElementsByName("bit");
var speed=20;
var page=0;


var choose=0;//豌豆卡片是否选中，没有不能种植物
var eatTime=new Array(5);//僵尸停下时会开始吃植物，这个表示当前吃植物僵尸已经用的时间，到达规定时间，植物消失，还没实现，bug啊
var bulletx=new Array();//豌豆射手横坐标集合
var bullety=new Array();//纵坐标集合
var shootrow=[0,1,2,3,4];//豌豆所在的行数
for(var i=0;i<line.length;i++){//初始化最开始的植物线，僵尸捕食时间,和僵尸的纵坐标
	line[i]=360;
	eatTime[i]=0;
	etop[i]=(i*95);
	}
var flo;	//向日葵，虽然根本没用到这玩意儿
	var shoot=0;	//射手
	var lx=0;//这是变量和下面的用来接收屏幕坐标的
	var ly=0;
var bu=[];//豌豆子弹，也是数组
var say=0;//对话框的位置，开始时植物后来是僵尸吗，因为是同一个span标签
var shootleft=[340,340,340,340,340];//初始射手的横坐标

var shoottop=[];//纵
shoottop[0]=88;//第一个的纵
var nums=5;

var first=true;//是否是第一次，其实不完全是这意思，因为我需要增加新元素师，会把它变成true以便获取到最新的元素
var add=true;

//炸弹
var pause=false;
var bomo=[];
var bang=[];
var bomox=[];
var bomoy=[];

//计时器
var Timer;

//辣椒
var jala=[];
var bang2=[];
var jalar;
var jalarow=[];
var jalay=[];


//循环主方法

document.getElementsByName("changespeed").item(0).onfocus=function(){

    
	this.value="";
	
	}

document.getElementById("pause").onclick=function(){
	if(pause==false){
	clearInterval(Timer);
	document.getElementById("pause").value="继续";
	
	document.getElementsByName("changespeed")[0].style.display="block";
	document.getElementById("changespeed").style.display="block";
	document.getElementsByName("changespeed")[0].value=speed;
	//document.getElementsByName("changespeed").item(0).focus();
	//document.getElementsByTagName("div")[3].style.display="block";
	pause=true;
	}
	else if(pause==true){
		pause=false;
		action();
		
		document.getElementsByName("changespeed")[0].style.display="none";
		document.getElementById("changespeed").style.display="none";
		document.getElementById("pause").value="暂停";
		
		
		}
	
	}
	


function init(){
	
	bomo=document.getElementsByName("bomo");
	jala=document.getElementsByName("jala");
	
	if(bang.length>0){
		for(var i=0;i<bang.length;i++){
		bang[i]++;
		if(bang[i]==20){
			
			bomo[i].style.left=(bomox[i]-50)+"px";
			bomo[i].style.top=(bomoy[i]-50)+"px";
			bomo[i].src="src/Boom.gif";
			document.getElementById("bomo").currentTime=0;
			document.getElementById("bomo").play();
			
			}
		if(bang[i]==40){
			bang[i]=0;
			document.getElementById("one").removeChild(bomo[i]);
			bang.splice(i,1);
			bomox.splice(i,1);
			bomoy.splice(i,1);
			}}
		}
		
		if(jala.length>0){
		for(var i=0;i<jala.length;i++){
		bang2[i]++;
		if(bang2[i]==40){
			
			//bomo[i].style.left=(bomox[i]-50)+"px";
			//bomo[i].style.top=(bomoy[i]-50)+"px";
			jala[i].src="src/JalapenoAttack.gif";
			jala[i].style.left=240+"px";
			jala[i].style.top=jalay-70+"px";
			document.getElementById("bomo").currentTime=0;
			document.getElementById("bomo").play();
			
			}
		if(bang2[i]==120){
			bang2[i]=0;
			document.getElementById("one").removeChild(jala[i]);
			bang2.splice(i,1);
			jalarow.splice(i,1);
			jalay.splice(i,1);
			}}
		}

document.getElementById("bg").play();
	document.getElementById("line").innerHTML="l:"+line[0]+"<br>2:"+line[1]+"<br>3:"+line[2]+"<br>4:"+line[3]+"<br>5:"+line[4]+"敌人个数"+enemy.length+"豌豆数"+shoot.length+"坐标数"+shoottop.length;
	
	//显示子弹移动
	
	//射手	
document.getElementsByTagName("h2")[0].innerText="共抵抗了"+score+"个敌人";

firstPlant();

initenemy();

/*var canvas=document.getElementById("canvas");
var cxt=canvas.getContext("2d");
var img=new Image();
img.src="Zombies/ConeheadZombie/1.gif";
img.onload=function(){
	
	cxt.drawImage(img,0,0,80,130);
	
	
	}*/
	
	if(score>0&&score%50==0){
		creatEnemy();
		score+=0.1;
		}
if(score*10%10==1){
		document.getElementsByTagName("p")[0].innerText="已加入一个敌人";
		document.getElementsByTagName("p")[0].style.color="red";
		
	}else if(score%10==2){
		document.getElementsByTagName("p")[0].innerText="";
		}

}
function action(){

   document.getElementsByTagName("input")[0].value==0?speed=document.getElementsByName("changespeed")[0].value:speed=document.getElementsByTagName("input")[0].value;
	document.getElementById("start").style.display="none";
	document.getElementById("pause").style.display="block";
	init();
 Timer=setInterval("init()",speed);
 document.getElementsByTagName("input")[0].value=0;

	
}
speed=document.getElementsByTagName("input").item(0).focus();

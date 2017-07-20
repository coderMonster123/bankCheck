// JavaScript Document

var line=new Array(5);
var choose=false;
var eatTime=new Array(5);
var bulletx=new Array();
var bullety=new Array();
var top=new Array(5);
for(var i=0;i<line.length;i++){
	line[i]=360;
	eatTime[i]=0;
	top[i]=(i*95);
	}
var flo;	
	var shoot;	
	var lx;
	var ly;
var bu;
var say=0;
var shootleft=[340,340,340,340,340];

var shoottop=[];
shoottop[0]=88;

var left=[1100,1500,1400,1145,1300];
var attack=["src/Attack.gif","src/BucketheadZombieAttack.gif","src/Attack.gif","src/FlagZombieAttack.gif","src/HeadAttack1.gif"];
var walk=["src/BackupDancer.gif","src/BucketheadZombie.gif","src/BackupDancer.gif","src/FlagZombie.gif","src/HeadWalk1.gif" ];
var first=true;
function xy(){
 lx=event.screenX
 ly=event.screenY
}
document.onmousemove=xy;
//创建子弹
function bullet(x,y){
	var div=document.getElementsByTagName("div")[0];
	var img=document.createElement("img");
	img.src="src/PB00.gif";
	img.name="bullet";
	img.style.left=x+"px";
	img.style.top=y+"px";

	div.appendChild(img);
	}

//循环主方法
function init(){
	
	//显示子弹移动
	
	//射手	

if(first==true){
shoot=document.getElementsByName("shoot");
for(var i=0;i<shoot.length;i++){
	if(i<=4){
		shoottop[i]=(i*95)+shoottop[0];
shoot[i].style.left=shootleft[0]+"px";
shoot[i].style.top=shoottop[i]+"px";}
	//bulletpos.push([shootleft+50,shoottop+(i*95)]);
	bulletx.push(shootleft[0]+60*[80]);
	bullety.push(shoottop[i]);
	bullet(bulletx[i],bullety[i]);
	
	
}

//向日葵
 flo=document.getElementsByName("flo");
for(var i=0;i<flo.length;i++){
flo[i].style.left=250+"px";
flo[i].style.top=88+(i*95)+"px";
}
}
bu=document.getElementsByName("bullet");	

//document.getElementsByName("nock")[0].style.left=-200+"px";

for(var i=0;i<bulletx.length;i++){
	
	

	bu[i].style.left=bulletx[i]+"px";
	bu[i].style.top=bullety[i]+"px";
	bulletx[i]+=5;
	if(bulletx[i]>left[i]&&bulletx[i]<=left[i]+8){
		document.getElementsByName("nock")[0].style.left=(left[i]+40)+"px";
		document.getElementsByName("nock")[0].style.top=(top[i]+60)+"px"
		bu[i].style.display="none";
		}
	if(bulletx[i]>1200){
		bulletx[i]=shootleft[i]+60;
		bullety[i]=shoottop[i];
		bu[i].style.display="block";
		
		}
		first=false;	
	
}

if(left[0]==900){
	document.getElementsByTagName("span")[0].innerText="吓尿了，射不出来啊";
	
	}
	if(left[0]==820){
		say++;
	document.getElementsByTagName("span")[0].innerText="";
	
	}
	if(left[0]==600){
	
	document.getElementsByTagName("span")[0].innerText="草，一个能打的都木有，都准备等死吧";
	
	}
	if(left[0]==520){
	say++;
	document.getElementsByTagName("span")[0].innerText="";
	
	}
	
	//if(left[0]==1000){alert(eatTime[0]);}
	if(say==0){
		 document.getElementsByTagName("span")[0].style.left=shoot[1].style.left;
		document.getElementsByTagName("span")[0].style.top=shoot[1].style.top;
		
		}
		else if(say==1){
			 document.getElementsByTagName("span")[0].style.left=flo[2].style.left;
		document.getElementsByTagName("span")[0].style.top=flo[2].style.top;
			}
			else{
	  document.getElementsByTagName("span")[0].style.left=left[1]+"px";
		document.getElementsByTagName("span")[0].style.top=top[1]+"px";}
	
var enemy=document.getElementsByName("dance");
for(var i=0;i<enemy.length;i++){
enemy[i].style.left=left[i]+"px";


enemy[i].style.top=top[i]+"px";
      
		
if(left[i]==200){
	
	if(top[i]>500){
		
		top[i]--;
		}
	else if(top[i]<500){
		if(top[0]==0){
			document.getElementsByTagName("p").item(0).innerHTML="门上锁了，走后门!!!"
	document.getElementsByTagName("p").item(0).style.color="blue";
			}
		
		top[i]++;
		}
	else{
		document.getElementsByTagName("p").item(0).innerHTML="";
		left[i]--;
		
		document.getElementsByTagName("span")[0].style.color="brown";
		
		if(i==3){
			
			document.getElementsByTagName("span")[0].innerText="爱我草，别特么和我抢啊";
		
		}
		if(i==2){document.getElementsByTagName("span")[0].innerText="给我留点！！你妹的";
		}
		
		
		}	
	
	}
else if(left[i]>line[i]&&left[i]!=200){
left[i]--;

}	

if(left[i]==line[i]){
enemy[i].src=attack[i];
left[i]--;	

	}
if(left[i]==line[i]-1){
	
eatTime[i]++;



if(eatTime[i]>200){
	
	for(var j=shoot.length-1;j>=0;j--){
	if(shootleft[j]+50>=left[i]&&shoottop[j]==88+i*95){
             line[i]=line[i]-90;
			shoot[j].style.display="none";
			break;
			
			
			}
	}
	
	/*if(line[i]==360){
		bulletx.splice(0,1);
		bullety.splice(0,1);
		shoot[i].style.display="none";
		
	    
	line[i]=270;}
	else*/
	 if(line[i]==270){
		flo[i].style.display="none";
		
		line[i]=-200;
		}
	 if(line[i]==-200){
			
	document.getElementsByTagName("p").item(0).innerHTML="僵尸吃掉了你的脑子!!!";
document.getElementsByTagName("p")[0].style.color="red";

	}	
	eatTime[i]=0;
	enemy[i].src=walk[i];
	}	

	
	}	




}




/*var canvas=document.getElementById("canvas");
var cxt=canvas.getContext("2d");
var img=new Image();
img.src="Zombies/ConeheadZombie/1.gif";
img.onload=function(){
	
	cxt.drawImage(img,0,0,80,130);
	
	
	}*/
	
	

}
window.onload=init;
setInterval("init()",20);
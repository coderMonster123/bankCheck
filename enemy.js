// JavaScript Document
// JavaScript Document
var line=new Array(5);//这是僵尸停下的位置，表示哪行的植物种了几排
var enemylive=[6,7,8,8,4];//每个僵尸所能承受的最大子弹数
var etop=[88,178,268,358,448];//这是僵尸的横坐标
var left=[0,0,0,0,0]//
var live=[true,true,true,true,true];

var left=[1100,1500,1400,1145,1300];//僵尸初始横坐标
var attack=["src/Attack.gif","src/BucketheadZombieAttack.gif","src/Attack.gif","src/FlagZombieAttack.gif","src/HeadAttack1.gif"];//这个数组用在存储各种僵尸行走时图片的路径
var walk=["src/BackupDancer.gif","src/BucketheadZombie.gif","src/BackupDancer.gif","src/FlagZombie.gif","src/HeadWalk1.gif" ];//这个时吃东西时的
var enemy=[];
var enemyrow=[0,1,2,3,4];
var relivetime=[0,0,0,0,0];

function initenemy(){
var div=document.getElementById("one");
enemy=document.getElementsByName("dance");//所有僵尸标签
for(var i=0;i<enemy.length;i++){
	

enemy[i].style.left=left[i]+"px";

enemy[i].style.top=etop[i]+"px";

enemy[i].style.opacity=1;

	if(live[i]==true){
		
  if(left[i]<1000){//当僵尸进入界面
  for(var bi=0;bi<bomo.length;bi++){
	  if(left[i]>bomox[bi]-200&&left[i]<bomox[bi]+80&&etop[i]+200>bomoy[bi]+50-80&&etop[i]<bomoy[bi]+80&&bang[bi]>20){
		  live[i]=false;
		 div.removeChild(enemy[i]);
		
		  
		  }
		  
		 }
	  
 for(var ji=0;ji<jala.length;ji++){
	  if(enemyrow[i]==jalarow[ji]&&bang2[ji]>40){
		  live[i]=false;
		 div.removeChild(enemy[i]);
		
		  
		  }
  }
	 for(var j=0;j<bu.length;j++){
	if(bulletx[j]>left[i]&&bulletx[j]<=left[i]+10&&bullety[j]>etop[i]&&bullety[j]<=etop[i]+95&&bu[j].style.display!="none"){//循环比较每一发子弹是否和僵尸重合
	
        	
		document.getElementsByName("nock")[0].style.left=(left[i]+40)+"px";//这是一张豌豆打到僵尸时碎掉的图片，让它打到时显示
		document.getElementsByName("nock")[0].style.top=(etop[i]+40)+"px";
		bit[0].play();
		enemy[i].style.opacity=0.2;
		bu[j].style.display="none";//这个子弹打到僵尸后隐藏,但还会一直往右移动，超过屏幕后，再让他显示
		enemylive[i]--;//僵尸的血量下降
		
		
	}
	if(enemylive[i]<0){//当血没有了，就是挂掉的时候
	    score++;
		score=parseInt(score);
		talk[0].play();
		left[i]=1200;
		var num=Math.floor(Math.random()*5);
		
		//移动到屏幕右边，等着下次出来，继续打
		enemy[i].src=walk[num];
		
		//都挂了，吃不了了，变成走路的样子
		enemylive[i]=8;//血量恢复
		
		}
	
		}
	  }
		
if(left[i]==200){
	//这是僵尸吃掉所有职务时，到达门前
	
	
	if(etop[i]>500){//纵坐标如果大于500，会一直往上走
		
		etop[i]--;
		}
	else if(top[i]<500){
		if(top[0]==0){
			document.getElementsByTagName("p").item(0).innerHTML="门上锁了，走后门!!!"
	document.getElementsByTagName("p").item(0).style.color="blue";
			}
		//反之向上走
		etop[i]++;
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
	
else if(left[i]>line[enemyrow[i]]&&left[i]!=200){
	if(left[i]==line[i]+79){
	 eatTime[i]=0;//重置这个僵尸的捕食时间
	enemy[i].src=walk[i];}//如果没走到植物面前，会一直向左走
left[i]--;

}

if(left[i]==line[enemyrow[i]]){//走到植物面前，变为捕食模式，吃东西那张图片
enemy[i].src=attack[i];
left[i]--;	//再往前走一小步，要不会反复执行这个图片，看起来是静止的图片

	}
if(left[i]==line[enemyrow[i]]-1){//当在植物面前时，开始吃，吃饭时间增加
	
eatTime[i]++;
document.getElementById("eat").play();


if(eatTime[i]>200){//吃了四秒后
/*if(line[enemyrow[i]]==360){
		bulletx.splice(0,1);
		bullety.splice(0,1);
		document.getElementById("one").removeChild(shoot[j]);
			
			shootleft.splice(j,1);
			shoottop.splice(j,1);
			 shootrow.splice(j,1);//数组中j位置删除元素的方法，也可以用delete shootrow[j],老庞还有好多没教呢，唉
			 bulletx.splice(j,1);
			 bullety.splice(j,1);
		
	    
	line[enemyrow[i]]=280;}
	
	else*/ if(line[enemyrow[i]]==280){//最后一排是向日葵，不是射手，所以单独列出
		flo[enemyrow[i]].style.display="none";//被吃了，就隐藏
		
		line[enemyrow[i]]=-200;
		}
	
else{	for(var j=shoot.length-1;j>=0;j--){
	if(shootleft[j]<left[i]&&shootleft[j]+60>=left[i]&&shoottop[j]==88+enemyrow[i]*95){
		//j代表被吃的植物
		
		/*alert("j:"+j); 
			 alert("数组长"+shoot.length);
			 alert("i"+i);
			 alert("列"+shootrow[j]);*/
		//shoot[j-1].style.display="none";
		bu[j].style.display="none";
		//将这个图片影藏
             line[enemyrow[i]]=line[enemyrow[i]]-80;
			 bulletx[j]=1250;
			 //植物线后退
			// alert(shoot.length);
			document.getElementById("one").removeChild(shoot[j]);
			document.getElementById("one").removeChild(bu[j]);
			shootleft.splice(j,1);
			shoottop.splice(j,1);
			 shootrow.splice(j,1);//数组中j位置删除元素的方法，也可以用delete shootrow[j],老庞还有好多没教呢，唉
			 bulletx.splice(j,1);
			 bullety.splice(j,1);
			 
			break;
		
			
			}
	}
}
	

	
	eatTime[i]=0;//重置这个僵尸的捕食时间
	enemy[i].src=walk[i];//重新让这货变成走路形态
	}	
	
	
	
 if(left[i]==-201){//僵尸到了后院，你挂了
			
	
document.getElementsByTagName("p")[0].style.color="red";
clearInterval(Timer);
document.getElementsByTagName("p").item(0).innerHTML="僵尸吃掉了你的脑子!!!";
document.getElementById("dead").play();
	}	
	
	
	}	



}
else if(live[i]==false){
	
	if(relivetime[i]==0)
	{enemy[i].src="src/BoomDie.gif";
	score++;
	}
	
	relivetime[i]++;
	
	if(relivetime[i]==80){
		left[i]=Math.round(Math.random()*500+1000);
		live[i]=true;
		relivetime[i]=0;
		enemy[i].src=walk[i];
		
		
		
		}
	
	}

}
}

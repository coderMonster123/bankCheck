// JavaScript Document

function firstPlant(){
if(first==true){//如果需要获取最新插入标签时，因为有计时器，不控制的话，会一直插入标签，根本停不下来啊

shoot=document.getElementsByName("shoot");//变量用来表示射手
for(var i=0;i<shoot.length;i++){//循环更新坐标
	if(i<=4){//前5个是预先做好的
		shoottop[i]=(i*95)+shoottop[0];
shoot[i].style.left=shootleft[0]+"px";
shoot[i].style.top=shoottop[i]+"px";}//从之前准备好的数组里面取就行
	//bulletpos.push([shootleft+50,shoottop+(i*95)]);
	bulletx.push(shootleft[0]+i*80);//这是js里往数组插入数据的方法，就像java中的list.add
	bullety.push(shoottop[i]);
	bullet(bulletx[i],bullety[i]);//豌豆射手的坐标变一下放到子弹数组，传了子弹所需的两个参数
	
	
}

//向日葵
 flo=document.getElementsByName("flo");//和射手一样，循环显
for(var i=0;i<flo.length;i++){
flo[i].style.left=250+"px";
flo[i].style.top=88+(i*95)+"px";
}
}
bu=document.getElementsByName("bullet");	//获取子弹的数组

//document.getElementsByName("nock")[0].style.left=-200+"px";

for(var i=0;i<bu.length;i++){//遍历每一发子弹
	
	

	bu.item(i).style.left=bulletx[i]+"px";//开始改变子弹数组的左边，实时更新子弹坐标
	bu.item(i).style.top=bullety[i]+"px";
	bulletx[i]+=5;//子弹的速度是5
	
	if(bulletx[i]>1200&&bulletx[i]<1220){//子弹飞出屏幕时
		bulletx[i]=shootleft[i]+20;//回到发射它的豌豆那里
		bullety[i]=shoottop[i];//纵坐标也是
		
		bu[i].style.display="block";//显示它，因为后面我会在打到僵尸是隐藏
		
		}
		first=false;	//改变这个标志，因为已经插入完成，不希望无限增加
}

if(left[0]==900){
	document.getElementsByTagName("span")[0].innerText="吓尿了，射不出来啊";//这个是原来植物要说的一句话，前提是什么都不做，看他自己弄
	
	}
	if(left[0]==820){//就是僵尸位置一到这，转移说话权
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
		document.getElementsByTagName("span")[0].style.top=etop[1]+"px";}
}
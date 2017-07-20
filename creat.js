// JavaScript Document
		
function changeBorderColor(){
		for(var i=1;i<=3;i++){
		if(choose==i){
			
			document.getElementsByTagName("div")[i].style.borderColor="white";

			
			}	else{
				document.getElementsByTagName("div")[i].style.borderColor="black";
				
				}
			
			
			}
			
			}

document.getElementsByTagName("div").item(1).onclick=creatPlant=function(){//这是豌豆卡片的单击事件，单击切换选中状态
	

	
	if(choose==1){choose=0;}
	else{
		choose=1;
		}
		changeBorderColor();
/*document.getElementsByTagName("div")[1].style.borderColor="black";
}
else{choose!=1;document.getElementsByTagName("div")[1].style.borderColor="white";
	document.getElementsByTagName("div")[2].style.borderColor="black";
	document.getElementsByTagName("div")[3].style.borderColor="black";
	}*/
	}
document.getElementsByTagName("div").item(2).onclick=creatBomo=function(){//这是豌豆卡片的单击事件，单击切换选中状态
		if(choose==2){choose=0;}else{
			choose=2;
			}
			changeBorderColor();
/*document.getElementsByTagName("div")[2].style.borderColor="black";
}

else{choose!=2;document.getElementsByTagName("div")[2].style.borderColor="white";
	document.getElementsByTagName("div")[1].style.borderColor="black";
	document.getElementsByTagName("div")[0].style.borderColor="black";
	}*/
	}	
	document.getElementsByTagName("div").item(3).onclick=creatBomo=function(){//这是豌豆卡片的单击事件，单击切换选中状态
		if(choose==3){choose=0;}else{
			choose=3;
			}
			changeBorderColor();
			}
	
	
		
		
		
		
	

	
document.getElementById("one").onclick=function(){
	
	
	//这是创建豌豆射手的方法，和子弹类似啊
	if(choose==0)
	{
for(var i=0;i<10;i++){
	creatEnemy();
}

	}
	
	if(choose!=0&&lx>=340){
	var div=document.getElementsByTagName("div")[0];
	var img=document.createElement("img");
	
	
	
	var x=0;
	var y=0;
	var plant=true;
	/*
		
		*/
	for(var h=0;h<9;h++){
			if(lx>=340-80+80*h&&lx<80*h+340)
			{
			x=340-80+h*80;
			}
			}
	for(var i=0;i<5;i++){
	
		
		if(ly>=88+i*95+30&&ly<88+i*95+95+30){
			
			y=88+i*95;
			jalar=i;
		
			for(var j=0;j<shoot.length;j++){
				if(x==shootleft[j]&&y==shoottop[j]){
					plant=false;
					
					}
				
				
				}
			
			if(plant==true){
				
			
			 img.style.left=(x)+"px";
	         img.style.top=(y)+"px";
			if(choose==1){		
			
			img.src="src/Peashooter.gif";
	         img.name="shoot";
			div.appendChild(img);
			shootrow[shoot.length]=i;
			//alert(shootrow[shoot.length]);
	shootleft[shoot.length-1]=x;
	shoottop[shoot.length-1]=y;
		line[i]=line[i]+80;
		   bulletx.push(shootleft[shoot.length-1]+80);//这是js里往数组插入数据的方法，就像java中的list.add
	bullety.push(shoottop[shoot.length-1]);
	bullet(bulletx[i],bullety[i]);	
		
			}else if(choose==2){
			
				img.src="src/CherryBomb.gif";
				img.style.position="absolute";
	         img.name="bomo";
			div.appendChild(img);
			bang.push(0);
			bomox.push(x);
			bomoy.push(y);
			bang[bang.length-1]++;
			}
			else if(choose==3){
				img.src="src/Jalapeno.gif";
				img.style.position="absolute";
				img.name="jala";
			div.appendChild(img);
			jalarow.push(jalar);
			jalay.push(y);
			bang2.push(0);
			bang2[bang2.length-1]++;
				}
			}
			}
			}		
	}
	
	}	
function bullet(x,y){//创建子弹
	var div=document.getElementsByTagName("div")[0];//这个就是从网上搜到的
	var img=document.createElement("img");//这个是新建一个img标签
	img.src="src/PB00.gif";//给他的src属性复制上路径
	img.name="bullet";//起个相同的名字，都叫子弹
	img.style.left=x+"px";//坐标是传过来的值，因为是不同的豌豆射出的，在不同豌豆的右边
	img.style.top=y+"px";

	div.appendChild(img);//这个是向div中插入img标签，因为有属性了，所以插进去的就是子弹，就和jquery差不多的方法
	}
	
function xy(){
 lx=event.pageX;//这两个就是获取屏幕坐标的函数，这特么也太简单了吧
 ly=event.pageY;
}
document.onmousemove=xy;//用鼠标移动时间调用此函数，实现实时更新坐标位置

function creatEnemy(){//创建僵尸

var div=document.getElementsByTagName("div")[0];

	//这个就是从网上搜到的

	var img=document.createElement("img");//这个是新建一个img标签
	//给他的src属性复制上路径
	img.name="dance";//起个相同的名字，都叫子弹
	var num=Math.floor(Math.random()*5);
	attack.push(attack[num]);
	walk.push(walk[num]);
	img.src=walk[num];
	enemylive.push(4);
	div.appendChild(img);//这个是向div中插入img标签，因为有属性了，所以插进去的就是子弹，就和jquery差不多的方法

  
	left.push(1000+20*num);
	etop.push(etop[num]);
	enemyrow.push(num);
eatTime.push(0);
live.push(true);
relivetime.push(0);

}
/*else{
	
	/*
	
	
	
	
	var img=document.getElementsByName("dance");
	
	
	for(var i=0;i<img.length;i++){
img[i].parentNode.removeChild(img[i]);
	enemylive.splice(0,5);
	left.splice(0,5);
	etop.splice(0,5);
eatTime.splice(0,5);

}
		
	
	}
	*/
	


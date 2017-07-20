// JavaScript Document
document.getElementsByTagName("div").item(1).onclick=function(){//这是豌豆卡片的单击事件，单击切换选中状态
	
	
	if(choose==true){choose=false;
document.getElementsByTagName("div")[1].style.borderColor="black";
}
else{choose=true;document.getElementsByTagName("div")[1].style.borderColor="white";
	
	
	}
	}
document.getElementById("one").onclick=function(){//这是创建豌豆射手的方法，和子弹类似啊
	
	if(choose==true){
	var div=document.getElementsByTagName("div")[0];
	var img=document.createElement("img");
	img.src="src/Peashooter.gif";
	img.name="shoot";
	
	
	var x=0;
	var y=0;
	
	/*
		
		*/
	for(var h=0;h<9;h++){
			if(lx>=340-80+80*h&&lx<80*h+340)
			{
			x=340-80+h*80;
			}
			}
	for(var i=0;i<5;i++){
	
		
		if(ly>=88+i*95+60&&ly<88+i*95+95+60){
			
			y=88+i*95;
			
			line[i]=line[i]+80;
			 img.style.left=(x)+"px";
	         img.style.top=(y)+"px";
				div.appendChild(img);
			shootrow[shoot.length]=i;
			//alert(shootrow[shoot.length]);
	shootleft[shoot.length]=x;
	shoottop[shoot.length]=y;
		
			}}		
		
		 
	
	first=true;
	
	
	

	
	//alert(shootleft[shoot.length]+"<br>"+shoottop[shoot.length]);
	}
	
	}	


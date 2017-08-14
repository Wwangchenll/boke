// JavaScript Document
window.onload=function(){
	var mid=document.getElementById("container");
	var midTop=document.getElementsByClassName("middle-top");
	var imglist=document.getElementById("imgList");
	var imgs=document.getElementsByTagName("img");
	var butts=document.getElementById("button").getElementsByTagName("span");
	var index=1;
	
	function animate(offset){
		imglist.style.left=parseInt(imglist.style.left)+offset+'px';
		}
	for(var i=0;i<butts.length;i++){
		   var myindex=i;
		   butts[i].onmouseover=function(){
		   var offset = -500 * (myindex - index); 
		   animate(offset);
			}
		}
/*function scollPic(){
		for (var i=0;i<imgs.length;i++){
		var myIndex=i;
		butts.onmouseover=function(){	
			var offset = -500 * (myIndex - index); 
		    imglist.style.left=parseInt(imglist.style.left)-offset+'px';
			   }
			}
          };
	scollPic();*/
	/*function scollPic1(offset){
		var left=parseInt(imglist.style.left)-offset;
		butt.onmouseover=function(){
			imglist.style.left=left +'px';
			}
		}
	scollPic1(-500);*/
	}
	
	
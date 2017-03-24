 var say=true;
      function clickme() {
          if (say) {
            document.getElementById("menu").style.marginRight="90px";
            document.getElementById("menu").style.transition="0.5s";
            say=false;
          }
      }

      //header-in sonu
var count=0;
var images=["url('img/slide1.jpg')","url('img/slide2.jpg')","url('img/slide3.jpg')"];      
var back=document.getElementById('slider');
var right=document.getElementById('rightbtn');
var left=document.getElementById('leftbtn');
var text1=document.querySelector('#text1 h1');
var texts=['CreativeWhiteTemplates','Responsive Design Theme','Amazing Video Background'];
var text2=document.querySelector('#text1 p');
var tex=['The template is suitable for any company and the direction that appreciates style, purity and quality of the web site.','The template is suitable for any company and the direction that appreciates style, purity and quality of the web site.','The template is suitable for any company and the direction that appreciates style, purity and quality of the web site.'];
 text1.innerHTML=texts[0];
 text2.innerHTML=tex[0];
 back.style.backgroundImage=images[0];
right.addEventListener("click",function(){
   count++;
  	if(count>images.length-1){
		count=0;
	}
	 back.style.backgroundImage=images[count];
   text1.innerHTML=texts[count];
   text1.style.fontSize='60px';
   text1.style.fontWeight='100';
   text1.style.width='900px';
   text1.style.color='white';
   text2.innerHTML=tex[count];
   text2.style.color='white';
});
left.addEventListener("click",function(){
   count--;
   	if(count<0){
		count=images.length-1;
 	}
	 back.style.backgroundImage=images[count];
   text1.innerHTML=texts[count];
   text2.innerHTML=tex[count];
   text1.style.fontSize='60px';
   text1.style.fontWeight='100';
   text1.style.width='900px';
   text1.style.color='white';
   text2.style.color='white';
});


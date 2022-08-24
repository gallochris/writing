window.onload = function(){ 

HowManyDivs = 30;
 
////////////////////////////////////
var CookieName = 'DivRamdomValueCookie';
function RandomDiv() {
var r = Math.ceil(Math.random() * HowManyDivs);
if(HowManyDivs > 1) {
   var ck = 0;
   var cookiebegin = document.cookie.indexOf(CookieName + "=");
 
   if(cookiebegin > -1) {
      cookiebegin += 1 + CookieName.length;
      cookieend = document.cookie.indexOf(";",cookiebegin);
      if(cookieend < cookiebegin) { cookieend = document.cookie.length; }
      ck = parseInt(document.cookie.substring(cookiebegin,cookieend));
      }
 
   while(r == ck) { r = Math.ceil(Math.random() * HowManyDivs); }
   document.cookie = CookieName + "=" + r;
   }
 
for( var i=1; i<=HowManyDivs; i++) {
   document.getElementById("dale"+i).style.display="none";
   }
 
document.getElementById("dale"+r).style.display="block";
}
 
RandomDiv();
 };

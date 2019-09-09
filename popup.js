document.addEventListener('DOMContentLoaded', function() {
  
  
  
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
   //alert("click 1");

function createCookie(cookieName,cookieValue,daysToExpire)
        {
          var date = new Date();
          date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
          document.cookie = cookieName+ "=" + cookieValue+"___"+location.href  + "; expires=" + date.toGMTString();
		  //alert(location.href);
		}
		function accessCookie(cookieName)
        {
          var name = cookieName + "=";
          var allCookieArray = document.cookie.split(';');
          for(var i=0; i<allCookieArray.length; i++)
          {
            var temp = allCookieArray[i].trim();
            if (temp.indexOf(name)==0)
            return temp.substring(name.length,temp.length);
       	  }
        	return "";
        }
		//function checkCookie()
        //{
          var user = accessCookie("testCookie");
          if (user!="")
        	alert("Welcome Back " + user + "!!!");
          else
          {
            user = prompt("Please enter your name");
            num = prompt("How many days you want to store your name on your computer?");
            if (user!="" && user!=null)
            {
            createCookie("testCookie", user, num);
            }
          }
        //}
		  
  var loc = location.href;
  var url_ = "https://google.com?utm_source="+loc;
 // window.open("https://google.com", "_blank");
 window.open(url_, "_blank");
});
}, false);
